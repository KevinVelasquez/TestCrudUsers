## Como empezar

Primero, instalación de dependencias:

```bash
npm install
```

Segundo, debes crear un archivo en la raiz del proyecto `.env` y debes asignarle las siguientes variables los valores que se especifican en el correo 
```bash
DB_NAME
DB_USER
DB_PASSWORD
DB_HOST
```

Tercero, correr el entorno de desarrollo local:

```bash
npm run dev
```

## Como ejecutar con Docker
```bash
docker build -t my-express-app .
docker run -p 3001:3001 my-express-app
```

Abrir [http://localhost:3001/health](http://localhost:3001/health) con tu navegador para validar que la aplicación esté corriendo correctamente

## Composición de la aplicación

La aplicación consta de dos funcionalidades principales, las cuales son la autenticación y el CRUD de usuarios, en donde cada uno cuenta con sus rutas `src/routes`, con sus controladores `src/controllers` y ambos comparten el servicio `src/services/user.service.ts`. Este servicio hace uso del modelo `src/models/user.model.ts` el cual hace toda la interacción con la base de datos.
Además, podemos encontrar la configuración de la base de datos en `src/config/db.config.ts` y por último tenemos el middleware `src/middlewares/auth.middleware.ts`, el cual hace la validación del JWT para la autorización de los servicios del crud de usuario