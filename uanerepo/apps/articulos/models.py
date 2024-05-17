from django.db import models
import uuid
from apps.user.models import UserAccount
from django.utils import timezone
from django.shortcuts import get_object_or_404

TIPOS_DE_PARRAFO = (
    ('normal', 'normal'),
    ('codigo', 'codigo'),
    ('APA', 'APA'), 
)

def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.autor.nombre}/img/{instance.nombre}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa

def get_imagen(parrafo):
        parrafo = parrafo
        if parrafo is not None:
            imagenes = Imagen.objects.filter(parrafo=parrafo)
            if imagenes.exists():
                return imagenes.first().imagen.url
        return ''

class Categoria(models.Model):
    nombre = models.CharField(default='', max_length=50)

    def __str__(self):
        return str(self.nombre)

class Articulo(models.Model):
    nombre = models.CharField(default='', max_length=50) 
    descripcion = models.CharField(default="", max_length=255)
    autor = models.ForeignKey(UserAccount, related_name='autor_de_articulo', on_delete=models.CASCADE)
    categorias = models.ManyToManyField(Categoria, related_name='categorias_articulo', blank=True)
    slug = models.SlugField(default='1', unique=True)
    fecha_de_suibido = models.DateTimeField(default=timezone.now)
    destacado = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nombre} - {self.slug}, {self.autor.nombre}"
    def get_contenido(self):
        articulo = get_object_or_404(Articulo, slug=self.slug)
        parrafos = Parrafo.objects.filter(articulo=articulo)

        contendio = []
        for parrafo in parrafos:
            imagen = get_imagen(parrafo=parrafo)
            titulo = parrafo.titulo
            estilo = parrafo.estilo_de_parrafo
            contenido = parrafo.contenido

            contendio.append(
                {
                    'titulo': titulo,
                    'imagen': imagen,
                    'estilo': estilo,
                    'contenido': contenido,
                }
            )
        return contendio

    
    def get_autor(self):
        if self.autor:
            return str(self.autor.nombre)

class Parrafo(models.Model):
    titulo = models.CharField(default='', max_length=50)
    contenido = models.TimeField()
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE)

    estilo_de_parrafo = models.CharField("normal", max_length=50, choices=TIPOS_DE_PARRAFO)

    def __str__(self):
        return str(self.titulo, ' ', self.articulo.nombre, '-', self.articulo.slug)
    


class Imagen(models.Model):
    nombre = models.CharField(default="", max_length=50) 
    imagen = models.ImageField(upload_to=path_dir)
    parrafo = models.ForeignKey(Parrafo, related_name="imagen_de_parrafo", on_delete=models.CASCADE)

    subtitulo = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    def __str__(self):
        return str(self.nombre, self.parrafo.titulo, self.parrafo.articulo.nombre)
    def get_imagen(self):
        if self.imagen:
            return self.imagen.url
        return ''