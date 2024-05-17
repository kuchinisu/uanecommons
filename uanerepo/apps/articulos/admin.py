from django.contrib import admin
from .models import Articulo, Parrafo, Categoria, Imagen

admin.site.register(Categoria)
admin.site.register(Articulo)
admin.site.register(Parrafo)
admin.site.register(Imagen)