from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Audio
from .serializer import AudioSerializer
from apps.utils.paginator import LargeSetPagination

class AudiosView(APIView):
    def get(self, request, format=None):
        if Audio.objects.all().exists():
            audios = Audio.objects.all()

            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(audios, request)

            serializer = AudioSerializer(results, many=True)

            return paginator.get_paginated_response({'audios':serializer.data}, status=status.HTTP_200_OK)
        else:
            Response({'error':'no hay audios en la base de datos'}, status=status.HTTP_404_NOT_FOUND)

            