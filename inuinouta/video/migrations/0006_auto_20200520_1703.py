# Generated by Django 3.0.6 on 2020-05-20 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0005_auto_20200505_1258'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='video',
            options={'ordering': ['-published_at'], 'verbose_name': '動画', 'verbose_name_plural': '動画'},
        ),
        migrations.AddField(
            model_name='video',
            name='is_open',
            field=models.BooleanField(default=True, verbose_name='公開フラグ'),
        ),
        migrations.AlterField(
            model_name='song',
            name='artist',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='アーティスト'),
        ),
        migrations.AlterField(
            model_name='song',
            name='end_at',
            field=models.IntegerField(default=0, null=True, verbose_name='終了時間'),
        ),
        migrations.AlterField(
            model_name='song',
            name='start_at',
            field=models.IntegerField(default=0, null=True, verbose_name='開始時間'),
        ),
        migrations.AlterField(
            model_name='video',
            name='published_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='投稿日時'),
        ),
        migrations.AlterField(
            model_name='video',
            name='thumbnail',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='サムネイル'),
        ),
        migrations.AlterField(
            model_name='video',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='タイトル'),
        ),
    ]
