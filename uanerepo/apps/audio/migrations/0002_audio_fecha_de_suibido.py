# Generated by Django 5.0.6 on 2024-05-08 19:54

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('audio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='audio',
            name='fecha_de_suibido',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
