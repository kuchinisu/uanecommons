# Generated by Django 5.0.6 on 2024-05-12 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0004_video_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='aclaracion_de_licencia',
            field=models.TextField(blank=True),
        ),
    ]
