# Generated by Django 5.0.6 on 2024-05-12 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('audio', '0004_audio_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='audio',
            name='slug',
            field=models.SlugField(default='1', unique=True),
        ),
    ]
