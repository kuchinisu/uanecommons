# Generated by Django 5.0.6 on 2024-05-11 23:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_useraccount_fecha_de_entrada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_entrada',
            field=models.DateField(default=datetime.date(2024, 5, 11)),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='fecha_de_nacimiento',
            field=models.DateField(default=datetime.date(2024, 5, 11)),
        ),
    ]