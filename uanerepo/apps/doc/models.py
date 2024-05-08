from django.db import models
import uuid
from apps.user.models import UserAccount
from django.utils import timezone
from apps.utils.tipos import LICENCIA_OPCIONES


def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.autor.nombre}/doc/{instance.nombre}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa

class CategoriaDoc(models.Model):
    nombre = models.CharField(default='', max_length=100)

class Doc(models.Model):
    nombre = models.CharField(default='', max_length=100)
    subtitulo = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    doc = models.FileField(upload_to=path_dir)
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='doc_autor')
    categoria = models.ForeignKey(CategoriaDoc, on_delete=models.CASCADE, related_name='docs')
    destacado = models.BooleanField(default=False)
    publico = models.BooleanField(default=True)
    licencia = models.CharField(default='CC BY', choices=LICENCIA_OPCIONES, max_length=50)
    fecha_de_suibido = models.DateTimeField(default=timezone.now)


    