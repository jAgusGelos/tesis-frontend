from rest_framework import authentication
from rest_framework import exceptions
from .models import Usuario
import jwt
from django.shortcuts import get_object_or_404


class Authentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise exceptions.AuthenticationFailed('Usuario no autenticado!')
        try:
            payload = jwt.decode(token,'secret',algorithms=['HS256'])    
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed('Usuario no autenticado!')

        user = get_object_or_404(Usuario, pk=payload['id'])
        return (user, None)

 