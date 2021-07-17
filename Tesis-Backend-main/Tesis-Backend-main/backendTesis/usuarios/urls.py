
from django.urls import path
#from .views import RegisterView, LoginView, UsuarioView, LogoutView, hello_world

from .views import activar, apiOverView, editar, eliminar, lista_usuarios, registrar, login, logout, usuario, verify_email, reenviarmailactivacion


urlpatterns = [
    path('', apiOverView, name="api-overview"),
    path('lista-usuarios/', lista_usuarios, name="lista-usuarios"),
    path('registrar/', registrar,name="registrar"),
    path('login/', login, name="login"),
    path('usuario/', usuario, name="usuario"),
    path('logout/', logout, name="logout"),
    path('editar/', editar, name="editar"),
    path('eliminar/', eliminar, name="editar"),
    path('email-verify/', verify_email, name="email-verify"),
    path('reenviar-confirmacion/', reenviarmailactivacion, name="reenviar-confirmacion"),
    path('activar/', activar, name="activar"),
]

