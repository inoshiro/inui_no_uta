var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('youtube-player', {
	  height: '405',
	  width: '720',
	  videoId: firstVideoId
	});
  }

var currentVideoId;

function loadVideo(video_id, seek_to=0) {
  player.loadVideoById(video_id, seek_to);
  currentVideoId = video_id;
}

function playSong(video_id, song_title, video_title, start_at) {
  if (video_id !== currentVideoId) {
    loadVideo(video_id, start_at);
  } else {
    player.seekTo(start_at);
    player.playVideo();
  }
  updateSongInfo(video_id, song_title, video_title);
}

$(function(){
  $('a.song-title').click(function(event){
	  return false;
  });
});

function updateSongInfo(video_id, song_title, video_title) {
  var playingThumb = document.getElementById("playing-thumb");
  var playingSongTitle = document.getElementById("navigation-song-title");
  var playingVideoTitle = document.getElementById("navigation-video-title");
  playingThumb.src = "http://img.youtube.com/vi/" + video_id + "/mqdefault.jpg";
  playingSongTitle.textContent = song_title;
  playingVideoTitle.textContent = video_title;
}

class Video {
	constructor(id, title) {
		this.id = id;
		this.title = title;
	}
}

class VideoList {
	constructor() {
		this.videos = {};
	}
	addVideo(id, title) {
		this.videos[id] = new Video(id, title);
	}
}

class Song {
	constructor(video_id, video_title, title, artist, start_at, end_at) {
		this.video_id = video_id;
		this.video_title = video_title;
		this.title = title;
		this.artist = artist;
		this.start_at = start_at;
		this.end_at = end_at;
	}
	isPlaying(video_id, time) {
		if (this.video_id != video_id) {
			return false
		}
		if (this.start_at <= time && time <= this.end_at) {
			return true;
		}
		return false;
	}
}
class SongList {
	constructor() {
		this.songs = [];
	}
	addSong(video_id, video_title, title, artist, start_at, end_at) {
		this.songs.push(new Song(video_id, video_title, title, artist, start_at, end_at));
	}
	searchSong(video_id, current_time) {
		var res = this.songs.find(song => song.isPlaying(video_id, current_time));
		return res;
	}
}
