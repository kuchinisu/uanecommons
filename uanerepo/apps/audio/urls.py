from django.urls import path
from .views import *

urlpatterns = [
    path('subir/', PostAudio.as_view()),
    path('lista_de_audios/', AudiosView.as_view()),
    path('audio/<slug>/', AudioSlug.as_view()),
    path("categorias/", CategoriasV.as_view()),

    path('por_categoria/<categoria>/', AudioPorCategoria.as_view()),

]
