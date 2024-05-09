from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Doc
from .serializer import DocSerializer
from apps.utils.paginator import LargeSetPagination

class DocumentosView(APIView):
    def get(self, request, format=None):
        if Doc.objects.all().exists():
            documentos = Doc.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(documentos, request)

            serializer = DocSerializer(results, many=True)

            return paginator.get_paginated_response({'documentos':serializer.data}, status=status.HTTP_200_OK)
        else:
            Response({'error':'no hay documentos en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

            