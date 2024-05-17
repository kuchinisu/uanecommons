from django.urls import path
from .views import *

urlpatterns = [
    path("lista_de_articulos/", ArticulosView.as_view()),
    path("articulo_destacado/", ArticuloDestacadoView.as_view()),    
]
