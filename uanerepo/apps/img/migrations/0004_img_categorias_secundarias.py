# Generated by Django 5.0.6 on 2024-05-09 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('img', '0003_rename_doc_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='img',
            name='categorias_secundarias',
            field=models.ManyToManyField(blank=True, related_name='imagenes_secundarios', to='img.categoriaimg'),
        ),
    ]
