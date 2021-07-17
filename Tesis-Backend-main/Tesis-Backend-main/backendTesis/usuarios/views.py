

from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UsuarioCompletoSerializer, UsuarioSerializer
from .models import Usuario
import jwt,datetime
from rest_framework.decorators import api_view, authentication_classes
from .authentication import Authentication

from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse

# Create your views here.

@api_view(['GET'])
def apiOverView(request):
    api_urls = {
        'Lista de usuarios':'/lista-usuarios/',
        'Registrar usuario':'/registrar/',
        'Editar usuario':'/editar/',
        'Eliminar usuario':'/eliminar/',
        'Iniciar sesion:': '/login/',
        'Cerrar sesion': '/logout/',
        'Usuario en sesion':'/usuario/',
    }
    return Response(api_urls)

@api_view(['POST'])
def registrar(request):
    serializer = UsuarioSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    usuario_data = serializer.data
    usuario = Usuario.objects.filter(email=usuario_data['email']).first()
    payload = {
        'id': usuario.id,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(days=30),
        'iat': datetime.datetime.utcnow()
    }
    token = jwt.encode(payload, settings.SECRET_KEY , algorithm='HS256').decode('utf-8')
    current_site = get_current_site(request).domain
    mail = usuario.email
    relative_link = reverse('email-verify')
    url_envio = 'http://' + current_site + relative_link + "?token=" + token
    data = {'email': mail, 'link': url_envio}
    res = send_mail(data)
    return Response(serializer.data)

@api_view(['POST'])
def login(request):
    email = request.data['email']
    password = request.data['password']

    usuario = Usuario.objects.filter(email=email).first()

    if usuario is None:
        raise AuthenticationFailed('Usuario no encontrado.')

    if not usuario.check_password(password):
        raise AuthenticationFailed('Contraseña incorrecta.')

    if not usuario.is_verified:
        raise AuthenticationFailed('Cuenta no activada.')

    payload = {
        'id': usuario.id,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        'iat': datetime.datetime.utcnow()
    }   

    token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')
    response = Response()
    response.set_cookie(key='jwt',value=token,httponly=True)

    response.data = {
        'jwt': token
        }
    return response


@api_view(['GET'])
def usuario(request):
    token = request.COOKIES.get('jwt')

    if not token:
        raise AuthenticationFailed('Usuario no autenticado!')
    try:
        payload = jwt.decode(token,'secret',algorithms=['HS256'])    
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Usuario no autenticado!')
            
    usuario = Usuario.objects.filter(id=payload['id']).first()
    serializer = UsuarioSerializer(usuario)    
    return Response(serializer.data)

@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'Sesion terminada.'
    }
    return response


@api_view(['POST'])
@authentication_classes([Authentication])
def editar(request):

    usuario = request.user
    serializer = UsuarioCompletoSerializer(instance=usuario,data=request.data)
    
    if serializer.is_valid():
        serializer.save(raise_exception=True)
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET'])
def lista_usuarios(request):
    usuarios = Usuario.objects.all()
    serializer = UsuarioCompletoSerializer(usuarios, many=True)
    return Response(serializer.data)



@api_view(['DELETE'])
@authentication_classes([Authentication])
def eliminar(request):
    usuario = request.user
    if usuario.is_authenticated:
        usuario.is_active = False
        usuario.save()
        return Response('Usuario eliminado!')



@api_view(['POST'])
@authentication_classes([Authentication])
def activar(request):

    usuario = request.user
    if usuario.is_authenticated and usuario.is_superuser:
        email = request.data['email']
        usuario = Usuario.objects.filter(email=email).first()
        usuario.is_active = True
        usuario.save()
        return Response('Usuario activado!')
    return Response('Usuario no autorizado.')

   
    

def send_mail(data):
    link = data['link']
    mail = data['email']
    context = {'linkActivacion': link}
    template = get_template('plantilla_confirmar_mail.html')
    content = template.render(context)
    correo = EmailMultiAlternatives(
        'Correo de Activacion de Cuenta',
        'Por favor Activa Tu Cuenta',
        settings.EMAIL_HOST_USER,
        [mail]
    )
    correo.attach_alternative(content, 'text/html')
    correo.send()
    return True

@api_view(['GET'])
def verify_email(request):
    token = request.GET.get('token')
    try:
        payload = jwt.decode(token, settings.SECRET_KEY)
        user = Usuario.objects.get(id=payload['id'])
        if not user.is_verified:
            user.is_verified = True
            user.save()
        return Response({'email': 'Se activó correctamente la cuenta'}, status=status.HTTP_200_OK)
    except jwt.ExpiredSignatureError as identifier:
        return Response({'error': 'El link expiró'}, status= status.HTTP_400_BAD_REQUEST)
    except jwt.exceptions.DecodeError as identifier:
        return Response({'error': 'Token Inválido'}, status= status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def reenviarmailactivacion(request):
    mail = request.data['email']
    usuario = Usuario.objects.filter(email=mail).first()
    if usuario is None:
        return Response({'error': 'El correo no se encuentra registrado en el sitio'}, status= status.HTTP_400_BAD_REQUEST)
    if usuario.is_verified:
        return Response({'error': 'La Cuenta ya se encuentra activa'}, status= status.HTTP_400_BAD_REQUEST)
    payload = {
        'id': usuario.id,
        'exp' : datetime.datetime.utcnow() + datetime.timedelta(days=30),
        'iat': datetime.datetime.utcnow()
    }
    token = jwt.encode(payload, settings.SECRET_KEY , algorithm='HS256').decode('utf-8')
    current_site = get_current_site(request).domain
    mail = usuario.email
    relative_link = reverse('email-verify')
    url_envio = 'http://' + current_site + relative_link + "?token=" + token
    data = {'email': mail, 'link': url_envio}
    res = send_mail(data)
    return Response({'OK': 'Se envió el correo de activacion'}, status=status.HTTP_200_OK)
