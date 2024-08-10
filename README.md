# Microservicio de Comentarios - CMS Basado en Microservicios

Este microservicio es parte de un Sistema de Gestión de Contenido (CMS) que implementa una arquitectura basada en microservicios. Permite gestionar comentarios en los posts, incluyendo la creación, lectura, actualización y eliminación de comentarios.

## Tecnologías Implementadas

- **Express**: Framework para Node.js utilizado para construir el servidor.
- **JavaScript**: Lenguaje de programación utilizado para el desarrollo del microservicio.
- **MySQL**: Sistema de gestión de bases de datos utilizado para almacenar los datos de los comentarios.

## Instalación

Antes de ejecutar el proyecto, asegúrese de tener Node.js y Docker instalados en su sistema.

1. Clona este repositorio:
    ```bash
    git clone https://github.com/Ale8Daniel8Armas/G5_Servicio_Comentarios.git
    ```
2. Instala las dependencias de Node.js:
    ```bash
    npm install
    ```

## Dependencias

Asegúrese de instalar las siguientes dependencias de Node.js:

```bash
npm install express nodemon dotenv mysql morgan
```
## Ejecución

Para ejecutar el microservicio localmente:

1. Levanta los contenedores Docker (MySQL y la aplicación Node.js) usando Docker Compose:
    ```bash
    docker-compose up
    ```

2. Ejecuta el servidor en modo desarrollo:
    ```bash
    npm run dev
    ```

El servidor estará escuchando en el puerto `7040`.

## Configuración

El archivo `.env` se utiliza para configurar las variables de entorno, incluyendo las credenciales de la base de datos y otros parámetros sensibles.


