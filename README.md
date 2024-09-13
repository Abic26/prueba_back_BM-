
# Backend prueba tec. Alianza

Proyecto backend para gestionar y visualizar datos en la base de datos, incluyendo métodos GET, POST, PUT y DELETE. Este proyecto proporciona un sistema de inicio de sesión y registro de usuarios, y permite a los usuarios gestionar y explorar registros de asistencia. El proyecto está desarrollado con Node.js, Express, Sequelize, PostgreSQL y pgAdmin4.
## Tabla de Contenidos.

- [Instalación](#instalación)
- [Configuración de PostgreSQL y pgAdmin4](#configuración-de-postgresql-y-pgadmin4)
- [API Reference](#API)
- [Contribución](#Contribución)
- [Créditos](#créditos)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clonar el proyecto 
```sh
git clone https://github.com/Abic26/prueba_back_BM-.git
```
2. Seleccione donde descargo el proyecto:
```sh
cd ejemplo/ejemplo
```
3. Instala las dependencias:
```sh
npm install
```
4. Abrir el proyecto en el editor de código de preferencia, se recomienda Vsc (Visual Studio Code):
```sh
code .
```
5. ejecutar el proyecto en modo desarrollo.
```sh
npm run dev
```
6. inicializa el proyecto en modo produccion.
```sh
npm run start
```

## Configuración de PostgreSQL y pgAdmin4

Para configurar PostgreSQL y pgAdmin4, sigue estos pasos:

### 1. Instalar PostgreSQL

1. Descarga e instala PostgreSQL desde [su sitio web oficial](https://www.postgresql.org/download/).
2. Durante la instalación, se te pedirá que configures una contraseña para el usuario `postgres`. Toma nota de esta contraseña, ya que la necesitarás más adelante.

### 2. Instalar pgAdmin4

1. Descarga e instala pgAdmin4 desde [su sitio web oficial](https://www.pgadmin.org/download/).
2. Una vez instalado, abre pgAdmin4 e inicia sesión con la contraseña del usuario `postgres`.

### 3. Configurar la Base de Datos

1. Abre pgAdmin4 y conéctate al servidor PostgreSQL.
2. Crea una nueva base de datos para tu proyecto:
   - Haz clic derecho en el nodo `Databases` y selecciona `Create` > `Database`.
   - Asigna un nombre a la base de datos (por ejemplo, `prueba_tec_alianza`).
   - Haz clic en `Save`.

### 4. Configurar Sequelize

1. Crea un archivo `.env` en la raíz de tu proyecto con la configuración de conexión a la base de datos. Aquí hay un ejemplo de cómo debería verse tu archivo `.env`:

   ```env
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=1312
   DB_NAME=admin
   DB_PORT=5432
   PORT=5000


## API Reference

### Auth
####Registro de Usuario

```http
 POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Name of the user |
| `password` | `string` | **Required**. Email of the user |
| `role` | `string` | **Required**. Password of the user |

#### Inicio de Sesión

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |

#### Users

```http
 GET /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |


#### Obtener un usuario por ID

```http
 GET /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. ID del usuario a obtener |

#### Crear un nuevo usuario

```http
POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |
| `role`      | `string` | **Required**. role of the user |


#### Actualizar un usuario existente

```http
PUT /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the user |
| `username`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |
| `role`      | `string` | **Required**. role of the user |

#### Eliminar un usuario

```http
DELETE /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of the user for delete |

### Attendance
#### Crear registro de asistencia

```http
POST /api/attendance/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. id of the user |
| `hour`      | `string` | **Required**. hour of the user |
| `date`      | `string` | **Required**. date of the user |

#### Obtener registros de asistencia por ID de usuario

```http
GET /api/attendance/user/:user_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. id of the user |

#### Obtener todos los registros de asistencia

```http
 GET /api/attendance/all
```





## Contribución

Cómo contribuir al proyecto.
1. Clonar el proyecto:
```sh
git clone https://github.com/Abic26/prueba_back_BM-.git
```
2. Crea una rama para la contribución: 
```sh
git checkout -b feature/nueva-funcionalidad
```
3. Realice sus cambios y realiza los commits: 
```sh
git add .
git commit -m "Agrega nueva funcionalidad"
```
4. Realize push con sus nuevos cambios: 
```sh
git push origin feature/nueva-funcionalidad
```

## Créditos

Este proyecto fue creado por [Andres Felipe Lopez S. "Abic26"](https://github.com/Abic26).

## Licencia

Este proyecto está bajo la Licencia MIT, lo que significa que puedes:

- Usar el código en tus proyectos personales o comerciales.
- Modificar el código para satisfacer tus necesidades.
- Distribuir el código modificado o sin modificar.
- Incluir el código en otros proyectos (con los atributos adecuados).

**¡No tienes que pedir permiso!** Solo asegúrate de incluir el aviso de derechos de autor y la declaración de la Licencia MIT en las copias de tu proyecto.

## Contacto

Si tienes preguntas, sugerencias o comentarios sobre este proyecto, no dudes en ponerte en contacto. Puedes visitarme a través de:

- Correo electrónico: [abicsupa@gmail.com](mailto:abicsupa@gmail.com)
- Sitio web: [Abic26_page](https://abicdev.vercel.app/)

¡Espero escuchar tus pensamientos y opiniones!
