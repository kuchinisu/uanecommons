from django.urls import path
from .views import *

urlpatterns = [
    path("lista_de_documentos/", DocumentosView.as_view()),
    path("documento_destacado/", DocumentoDestacadoView.as_view()),
    path("documento/<slug>/", DocumentoSV.as_view()),
    path("subir/", PostDocumento.as_view()),
    path("categorias/", CategoriasV.as_view()),
    path("por_categoria/<categoria>/", DocumentoPorCategoria.as_view()),
    
    
]
