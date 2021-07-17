# Tesis-Backend
Backend del sistema de Gestión de Congresos 2021

# Pasos para descargar y utilizar
Paso 0 : Tener la base de datos creada y con el usuario y contraseña que se usa

1 - Descargar el repo desde main

2 - Crear (solo 1 vez) un entorno virtual

  python3 -m venv env

  source env/bin/activate  # En Windows usar `env\Scripts\activate` (en la carpeta donde creaste el entorno virtual)

2 - Cambiar a un entorno virtual (previamente creado) -> activate 

3 - Importar las librerias de requirements.txt

  pip install -r requirements.txt

4 - Migrar cambios: 

  python manage.py makemigrations

  python manage.py migrate
                    
5 - Arrancar el sistema

  python manage.py runserver
