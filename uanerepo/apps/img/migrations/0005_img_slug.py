# Generated by Django 5.0.6 on 2024-05-11 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('img', '0004_img_categorias_secundarias'),
    ]

    operations = [
        migrations.AddField(
            model_name='img',
            name='slug',
            field=models.SlugField(default=1, unique=True),
        ),
    ]
