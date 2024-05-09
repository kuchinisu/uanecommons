from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    video = serializers.CharField(source='get_video')
    categoria = serializers.CharField(source='get_categoria')
    autor = serializers.CharField(source='get_autor')
    
    class Meta:
        model=Video
        fields=[
            'nombre',
            'subtitulo',
            'descripcion',
            'video',
            'autor',
            'categoria',
            'destacado',
            'publico',
            'licencia',
            'fecha_de_subido',
        ]