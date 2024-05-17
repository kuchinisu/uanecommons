from rest_framework import serializers
from .models import Img, CategoriaImg

class ImgSerializer(serializers.ModelSerializer):
    img = serializers.CharField(source = 'get_img')
    autor = serializers.CharField(source = 'get_autor')
    categoria = serializers.CharField(source = 'get_categoria')
    class Meta:
        model = Img
        fields = [
            'nombre',
            'subtitulo',
            'descripcion',
            'img',
            'autor',
            'categoria',
            'destacado',
            'publico',
            'licencia',
            'fecha_de_suibido',
            'slug',
        ]

class CategoriaImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaImg
        fields=[
            'nombre'
        ]