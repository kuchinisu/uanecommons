from rest_framework import serializers
from .models import Audio, CategoriaAudio

class CategoriaAudioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CategoriaAudio
        fields = [
            'nombre',
            
        ]
class AudioSerializer(serializers.ModelSerializer):
    archivo_audio = serializers.CharField(source='get_audio')
    autor = serializers.CharField(source='get_autor')
    categoria = serializers.CharField(source='get_categoria')
    class Meta:
        model = Audio
        fields = [
            'nombre',
            'subtitulo',
            'descripcion',
            'archivo_audio',
            'autor',
            'categoria',
            'destacado',
            'publico',
            'licencia',
            'slug',
        ]