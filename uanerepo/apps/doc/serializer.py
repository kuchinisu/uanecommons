from rest_framework import serializers
from .models import Doc, CategoriaDoc

class DocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = [
            'nombre'
        ]