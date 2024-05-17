from rest_framework import serializers
from .models import Articulo, Categoria, Parrafo, Imagen

class ArticuloSerializer(serializers.ModelSerializer):
    contenido = serializers.CharField(source='get_contenido')
    autor = serializers.CharField(source='get_autor')
    class Meta:
        model = Articulo
        fields = [
            'nombre',
            'descripcion',
            'autor',
            'slug',
            'fecha_de_suibido',
            'destacado',
            'contenido',
        ]