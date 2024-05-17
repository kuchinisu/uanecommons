from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Doc, CategoriaDoc
from .serializer import DocSerializer, DocCategoriaSerializer
from apps.utils.paginator import LargeSetPagination, SmallSetPagination

class DocumentoSV(APIView):
    def get(self, request, slug, format=None):
        documentos = Doc.objects.filter(slug=str(slug))

        if not documentos.exists():
            return Response({"error":"el documento no existe o fue eliminado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(documentos, request)

            serializer = DocSerializer(results, many=True)

            return paginator.get_paginated_response({"documento":serializer.data})

class DocumentosView(APIView):
    def get(self, request, format=None):
        if Doc.objects.all().exists():
            documentos = Doc.objects.all()


            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(documentos, request)

            serializer = DocSerializer(results, many=True)

            return paginator.get_paginated_response({'documentos':serializer.data})
        else:
            Response({'error':'no hay documentos en la base de datos'}, status=status.HTTP_404_NOT_FOUND)


class DocumentoDestacadoView(APIView):
    def get(self, request, format=None):
        if Doc.objects.all().exists():
            documentos = Doc.objects.filter(destacado=True)

            if not documentos.exists():
                return Response({"error":"no hay documentos destacados"}, status=status.HTTP_404_NOT_FOUND)
            
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(documentos, request)

            serializer = DocSerializer(results, many=True)

            return paginator.get_paginated_response({'documento_destacado':serializer.data})
        else:
            Response({'error':'no hay documentos en la base de datos'}, status=status.HTTP_404_NOT_FOUND)


class PostDocumento(APIView):
    permission_classes=[IsAuthenticated]

    def get(self, request, format=None):
        pass
    def post(self,request, format=None):
        usuario = request.user
        documento = request.FILES.get("imagen") 
        data = request.data

        nombre=data.get('nombre')
        subtitulo=data.get('subtitulo')
        descripcion=data.get('descripcion')
        categoria_=data.get('categoria')
        licencia=data.get('licencia')
        aclaracion_de_licencia=data.get('aclaracionDeLicencia')
        print(aclaracion_de_licencia)
        if not Doc.objects.all():
            slug = '1'
        else:
            slug = str(int(Doc.objects.all().last().slug) + 2)

        if not CategoriaDoc.objects.filter(nombre=categoria_):
            nueva_categoria = CategoriaDoc(nombre=categoria_)
            nueva_categoria.save()
            categoria = nueva_categoria
        else:
            categoria = CategoriaDoc.objects.filter(nombre=categoria_).first()


        nuevo_documento = Doc(
            nombre=nombre,
            subtitulo=subtitulo,
            descripcion=descripcion,
            categoria=categoria,
            licencia=licencia,
            autor=usuario,
            aclaracion_de_licencia=aclaracion_de_licencia,
            slug=slug
        )
        nuevo_documento.doc = documento

        nuevo_documento.save()
        return Response({"mensaje":"documento publicado con exito"}, status=status.HTTP_201_CREATED)
    
class CategoriasV(APIView):
    def get(self, request, format=None):
        categorias = CategoriaDoc.objects.all()
        if not categorias.exists():
            return Response({"error":"no existen categorías disponibles en la base de datos"}, status=status.HTTP_404_NOT_FOUND)
        else:
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(categorias, request)
            serializer = DocCategoriaSerializer(results, many=True)

            return paginator.get_paginated_response({"categorias":serializer.data})
