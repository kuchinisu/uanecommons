from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Img
from .serializer import ImgSerializer
from apps.utils.paginator import LargeSetPagination, SmallSetPagination

class ImgView(APIView):
    def get(self, request, format=None):
        if Img.objects.all().exists():
            imagenes = Img.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(imagenes, request)

            serializer = ImgSerializer(results, many=True)

            return paginator.get_paginated_response({'imagenes':serializer.data}, status=status.HTTP_200_OK)
        else:
            Response({'error':'no hay imagenes en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

class ImgDestacada(APIView):
    def get(self, request, format=None):
        imagen = get_object_or_404(Img, destacado = True)

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(imagen, request)

        serializer = ImgSerializer(results, many=True)

        return paginator.get_paginated_response({'imagen':serializer.data})