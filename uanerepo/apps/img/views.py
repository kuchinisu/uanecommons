from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Img, CategoriaImg
from .serializer import ImgSerializer, CategoriaImgSerializer
from apps.utils.paginator import LargeSetPagination, SmallSetPagination

class ImgView(APIView):
    def get(self, request, format=None):
        if Img.objects.all().exists():
            imagenes = Img.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(imagenes, request)

            serializer = ImgSerializer(results, many=True)

            return paginator.get_paginated_response({'imagenes':serializer.data})
        else:
            Response({'error':'no hay imagenes en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

class ImgDestacada(APIView):
    def get(self, request, format=None):
        imagen = Img.objects.filter(destacado=True)

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(imagen, request)

        serializer = ImgSerializer(results, many=True)

        return paginator.get_paginated_response({'imagen':serializer.data})
    
class ImagenSlug(APIView):
    def get(self, request, slug, format=None):
        if Img.objects.all():
            imagen = Img.objects.filter(slug=slug)
            if imagen.exists():
                paginator = SmallSetPagination()
                results = paginator.paginate_queryset(imagen, request)

                serializer = ImgSerializer(results, many=True)

                return paginator.get_paginated_response({'imagen_slug':serializer.data})
            else:
                return Response({"error":"la imagen no existe o fe eliminada"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error":"no existen imagenes en la base de datos"}, status=status.HTTP_404_NOT_FOUND)

class PostImagen(APIView):
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

        if not Img.objects.all():
            slug = '1'
        else:
            slug = str(int(Img.objects.all().last().slug) + 2)

        if not CategoriaImg.objects.filter(nombre=categoria_):
            nueva_categoria = CategoriaImg(nombre=categoria_)
            nueva_categoria.save()
            categoria = nueva_categoria
        else:
            categoria = CategoriaImg.objects.filter(nombre=categoria_).first()


        nueva_imagen = Img(
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
        nueva_imagen.img = imagen

        nueva_imagen.save()
        return Response({"mensaje":"imagen subida con exito"}, status=status.HTTP_201_CREATED)
    
class CategoriasV(APIView):
    def get(self,request, format=None):
        
        categorias = CategoriaImg.objects.all()

        if not categorias.exists():
            return Response({"error":"no hay categorias en la base de datos"}, status=status.HTTP_404_NOT_FOUND)
        else:
            paginator = LargeSetPagination()

            results = paginator.paginate_queryset(categorias, request)
            serializer = CategoriaImgSerializer(results, many=True)

            return paginator.get_paginated_response({"categorias":serializer.data})

