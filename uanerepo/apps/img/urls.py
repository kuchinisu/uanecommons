from django.urls import path
from .views import *

urlpatterns = [
    path('lista_de_imagenes/', ImgView.as_view()),
    path('imagen_destacada/', ImgDestacada.as_view()),
]
