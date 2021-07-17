from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
# Create your models here.

class Usuario(AbstractUser):
    dni = models.IntegerField(null=True)
    tipoDni = models.IntegerField(null=True)  # apunta a tabla tipodni
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255, null=True)
    fechaNacimiento = models.DateTimeField(null=True)
    nacionalidad = models.IntegerField(null=True)  # apunta tabla pais
    provincia = models.IntegerField(null=True)
    localidad = models.IntegerField(null=True)
    calle = models.CharField(max_length=128, null=True)
    numeroCalle = models.IntegerField(null=True)
    piso = models.CharField(max_length=2, null=True)
    dpto = models.CharField(max_length=1, null=True)
    telefono = models.IntegerField(null=True)
    celular = models.IntegerField(null=True)
    is_active = models.BooleanField(default=True)
    first_name = None
    last_name = None
    username = None
    is_verified = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager() 

    def __str__(self):
        return self.nombre

class Rol(models.Model):
    descripcion = models.CharField(max_length=60)

    def __str__(self):
        return self.descripcion


class Permiso(models.Model):
    numeroProceso = models.IntegerField()

# class PermisoxRol(models.Model):
#     idRol = models.IntegerField() # FK a rol
#     idPermiso = models.IntegerField() # FK a permiso

# class RolxUsuarioxCongreso():
#     idCongreso = models.IntegerField() # FK a congreso
#     idUsuario = models.IntegerField()  # FK a usuario
#     idRol = models.IntegerField()      # FK a rol
