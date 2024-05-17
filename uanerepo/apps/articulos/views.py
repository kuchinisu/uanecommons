from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Articulo, Parrafo, Imagen
from .serializer import ArticuloSerializer
from apps.utils.paginator import LargeSetPagination

class ArticulosView(APIView):
    def get(self, request, format=None):
        if Articulo.objects.all().exists():
            articulos = Articulo.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(articulos, request)

            serializer = ArticuloSerializer(results, many=True)

            return paginator.get_paginated_response({'articulos':serializer.data})
        else:
            Response({'error':'no hay audios en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

class ArticuloDestacadoView(APIView):
    def get(self, request, format=None):
        if Articulo.objects.all().exists():
            articulos = Articulo.objects.filter(destacado = True)
            if not articulos.exists():
                return Response({"error":"no hay articulos destacados en la base de datos"}, status=status.HTTP_404_NOT_FOUND)

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(articulos, request)

            serializer = ArticuloSerializer(results, many=True)

            return paginator.get_paginated_response({'articulo_destacado':serializer.data})
        else:
            Response({'error':'no hay audios en la base de datos'}, status=status.HTTP_404_NOT_FOUND)


class CrearArticulo(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        pass
    def post(self, request, format=None):
        autor = request.user

        data = request.data

        nombre = data.get("nombre")
        descripcion = data.get("descripcion")

        parrafos = data.get('parrafos')
        
        if Articulo.objects.all().exists():
            slug = str(int(Articulo.objects.last().slug) + 1)
        else:
            slug = '1'
        
        nuevo_articulo = Articulo(
            nombre=nombre,
            descripcion=descripcion,
            autor=autor,
            slug=slug,
        )

        nuevo_articulo.save()

        
        for key in parrafos.keys():
            titulo = key
            contenido = parrafos[titulo]['contenido']
            imagen_nombre = parrafos[titulo]['imagenNombre']
            imagen_subtitulo = parrafos[titulo]['imagenSubtitulo']
            imagen_descripcion = parrafos[titulo]['imagenDescripcion']
            imagen = parrafos[titulo]['imagen']
            estilo_de_parrafo = parrafos[titulo]['estiloDeParrafo']
             
            nuevo_parrafo = Parrafo(
                titulo=titulo,
                contenido=contenido,
                articulo=nuevo_articulo,
                estilo_de_parrafo=estilo_de_parrafo
            )
            nuevo_parrafo.save()
            
            if imagen:
                nueva_imagen = Imagen(
                    nombre=imagen_nombre,
                    subtitulo=imagen_subtitulo,
                    descripcion=imagen_descripcion,
                    parrafo = nuevo_parrafo
                )

                nueva_imagen.imagen = imagen


        return Response({"mensaje":"articulo creado con exito"}, status=status.HTTP_201_CREATED)
