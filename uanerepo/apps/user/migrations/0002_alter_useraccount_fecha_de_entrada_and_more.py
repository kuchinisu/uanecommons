# Generated by Django 5.0.6 on 2024-05-09 07:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 5, 9)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_nacimiento',
            field=models.DateField(default=datetime.date(2024, 5, 9)),
        ),
    ]
