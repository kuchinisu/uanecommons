from django.db import models
import uuid
from apps.user.models import UserAccount
from django.utils import timezone

from apps.utils.tipos import LICENCIA_OPCIONES


def path_dir(instance, filename):
    ext = filename.split('.')[-1]
    nombre_archivo = f"{uuid.uuid4()}.{ext}"
    ruta_completa = f"{instance.autor.nombre}/audio/{instance.nombre}/{nombre_archivo}"
    print(ruta_completa)  
    return ruta_completa


class CategoriaAudio(models.Model):
    nombre = nombre = models.CharField(default='', max_length=100)

class Audio(models.Model):
    nombre = models.CharField(default='', max_length=100)
    subtitulo = models.TextField(blank=True)
    descripcion = models.TextField(blank=True)
    archivo_audio = models.FileField(upload_to=path_dir)
    autor = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    categoria = models.ForeignKey(CategoriaAudio, on_delete=models.CASCADE)
    categorias_secundarias = models.ManyToManyField(CategoriaAudio, related_name='audios_secundarios', blank=True)

    destacado = models.BooleanField(default=False)
    publico = models.BooleanField(default=True)
    licencia = models.CharField(default='CC BY', choices=LICENCIA_OPCIONES, max_length=50)
    fecha_de_suibido = models.DateTimeField(default=timezone.now)

    def get_audio(self):
        if self.archivo_audio:
            return str(self.archivo_audio.url)
        return ''
    def get_autor(self):
        if self.autor:
            return str(self.autor.matricula)
    def get_categoria(self):
        if self.categoria:
            return self.categoria.nombre