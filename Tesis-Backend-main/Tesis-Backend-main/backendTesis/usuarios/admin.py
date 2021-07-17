from django.contrib import admin
from usuarios.models import *

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.

class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    list_display = ['email', 'nombre']
    list_filter = tuple()
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informacion Personal', {'fields': ("nombre",)}),
        ('Fechas importantes', {
            'fields': (('date_joined','last_login'),),
        })
    )
    base_add_fields = (
        (None, {'fields': ('email', 'password1', 'password2'),}),
        ('Informacion Personal', {'fields': ("nombre",)}),
    )
    add_fieldsets = base_add_fields

    readonly_fields = ('date_joined', 'last_login', "nombre")

admin.site.register(Rol)
admin.site.register(Permiso)