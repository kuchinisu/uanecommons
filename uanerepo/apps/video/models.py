from django.db import models

from django.db import models
import uuid
from apps.user.models import UserAccount
from django.utils import timezone
from apps.utils.tipos import LICENCIA_OPCIONES

def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.autor.nombre}/video/{instance.nombre}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa

class CategoriaVideo(models.Model):
    nombre = models.CharField(default='', max_length=100)

class Video(models.Model):
    nombre = models.CharField(default='', max_length=100)
    subtitulo = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    video = models.FileField(upload_to=path_dir)
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='video_autor')
    categoria = models.ForeignKey(CategoriaVideo, on_delete=models.CASCADE)
    destacado = models.BooleanField(default=False)
    publico = models.BooleanField(default=True)
    licencia = models.CharField(default='CC BY', choices=LICENCIA_OPCIONES, max_length=50)
    fecha_de_suibido = models.DateTimeField(default=timezone.now)
