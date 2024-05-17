from rest_framework import serializers
from .models import Doc, CategoriaDoc

class DocSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source="get_autor")
    doc = serializers.CharField(source='get_doc'),
    categoria = serializers.CharField(source="get_categoria")

    class Meta:
        model = Doc
        fields = [
            'nombre',
            'subtitulo',
            'descripcion',
            'autor',
            'doc',
            'categoria',
            'destacado',
            'licencia',
            'fecha_de_suibido',
            'slug'
        ] 
class DocCategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doc
        fields = [
            'nombre',    
        ] 