# Generated by Django 5.0.6 on 2024-05-08 19:54

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('img', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doc',
            name='fecha_de_suibido',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
