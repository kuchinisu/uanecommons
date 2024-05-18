from django.urls import path
from .views import *

urlpatterns = [
    path('lista_de_imagenes/', ImgView.as_view()),
    path('imagen_destacada/', ImgDestacada.as_view()),
    path('imagen/<slug>/', ImagenSlug.as_view()),
    path('subir/', PostImagen.as_view()),
    path('por_categoria/<categoria>/', ImagenPorCategoria.as_view()),
    path('categorias/', CategoriasV.as_view()),
]
