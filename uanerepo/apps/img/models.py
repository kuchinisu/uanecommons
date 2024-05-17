from django.db import models
import uuid
from apps.user.models import UserAccount
from django.utils import timezone
from apps.utils.tipos import LICENCIA_OPCIONES

def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.autor.nombre}/img/{instance.nombre}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa

class CategoriaImg(models.Model):
    nombre = models.CharField(default='', max_length=100)

class Img(models.Model):
    nombre = models.CharField(default='', max_length=100)
    subtitulo = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    img = models.ImageField(upload_to=path_dir)
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='image_autor')
    categoria = models.ForeignKey(CategoriaImg, on_delete=models.CASCADE, related_name='images')
    categorias_secundarias = models.ManyToManyField(CategoriaImg, related_name='imagenes_secundarios', blank=True)    

    destacado = models.BooleanField(default=False)
    publico = models.BooleanField(default=True)
    licencia = models.CharField(default='CC BY', choices=LICENCIA_OPCIONES, max_length=50)
    fecha_de_suibido = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(default='1', unique=True)
    aclaracion_de_licencia = models.TextField(blank=True)
 
    def __str__(self):
        return f'{self.nombre} - {self.autor.nombre}:{self.autor.matricula}'
    def get_img(self):
        if self.img:
            return self.img.url
        return ''
    def get_autor(self):
        if self.autor:
            return self.autor.nombre
        return ''
    def get_categoria(self):
        if self.categoria:
            return str(self.categoria.nombre)
    
    