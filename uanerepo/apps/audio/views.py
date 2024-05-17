from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated

from .models import Audio, CategoriaAudio
from .serializer import AudioSerializer
from apps.utils.paginator import LargeSetPagination

class AudioSlug(APIView):
    def get(self, request, slug, format=None):
        audio = Audio.objects.filter(slug=str(slug))

        if not audio.exists():
            return Response({"error":"no existe el audio solicitado o el audio fue eliminado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(audio, request)
            serializer = AudioSerializer(results, many=True)

            return paginator.get_paginated_response({"audio":serializer.data})

class AudiosView(APIView):
    def get(self, request, format=None):
        if Audio.objects.all().exists():
            audios = Audio.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(audios, request)

            serializer = AudioSerializer(results, many=True)

            return paginator.get_paginated_response({'audios':serializer.data})
        else:
            Response({'error':'no hay audios en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

class PostAudio(APIView):
    permission_classes=[IsAuthenticated]

    def get(self, request, format=None):
        pass
    def post(self,request, format=None):
        usuario = request.user
        imagen = request.FILES.get("imagen") 
        data = request.data

        nombre=data.get('nombre')
        subtitulo=data.get('subtitulo')
        descripcion=data.get('descripcion')
        categoria_=data.get('categoria')
        licencia=data.get('licencia')
        aclaracion_de_licencia=data.get('aclaracionDeLicencia')

        if not Audio.objects.all():
            slug = '1'
        else:
            slug = str(int(Audio.objects.all().last().slug) + 2)

        if not CategoriaAudio.objects.filter(nombre=categoria_).exists():
            nueva_categoria = CategoriaAudio(nombre=categoria_)
            nueva_categoria.save()
            categoria = nueva_categoria
        else:
            categoria=CategoriaAudio.objects.filter(nombre=categoria_).first()


        nuevo_documento = Audio(
            nombre=nombre,
            subtitulo=subtitulo,
            descripcion=descripcion,
            categoria=categoria,
            licencia=licencia,
            autor=usuario,
            aclaracion_de_licencia=aclaracion_de_licencia,
            slug=slug
        )

        print (imagen)
        nuevo_documento.archivo_audio = imagen

        nuevo_documento.save()
        return Response({"mensaje":"audio subido exitosamente"}, status=status.HTTP_201_CREATED)
    