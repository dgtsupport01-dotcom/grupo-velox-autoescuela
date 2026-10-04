# Grupo Velox Autoescuela - Plataforma de Gestión de Trámites de Permiso de Conducir

Plataforma web profesional y responsiva en español para la gestión de trámites relacionados con permisos de conducir en España.

## 🚀 Características

- ✅ Interface completamente en español
- ✅ Solicitudes de canje de permiso extranjero
- ✅ Solicitudes de nuevo permiso
- ✅ Panel administrativo seguro
- ✅ Base de datos PostgreSQL con Prisma
- ✅ Validación de formularios con Zod
- ✅ Autenticación segura con JWT
- ✅ Almacenamiento privado de documentos
- ✅ Responsive en móvil, tablet y desktop
- ✅ SEO optimizado
- ✅ Protección contra CSRF, XSS, SQLi
- ✅ Logs de auditoría
- ✅ Páginas legales RGPD completas

## 📋 Requisitos

- Node.js 18+
- PostgreSQL 12+
- npm o yarn

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/dgtsupport01-dotcom/grupo-velox-autoescuela.git
cd grupo-velox-autoescuela
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env.local` y configura:

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secreto_muy_seguro_aqui_cambiar_en_produccion
DATABASE_URL="postgresql://usuario:contrasena@localhost:5432/grupo_velox_autoescuela"
NODE_ENV=development
```

### 4. Crear base de datos PostgreSQL

```bash
# En PostgreSQL
CREATE DATABASE grupo_velox_autoescuela;
```

### 5. Ejecutar migraciones de Prisma

```bash
npm run db:push
```

### 6. Poblar base de datos (crear admin de prueba)

```bash
npm run db:seed
```

### 7. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔐 Credenciales de prueba

**Admin:**
- Email: `admin@grupoveloxautoescuela.es`
- Contraseña: `Admin@2026!Seguro`

Accede a `/admin/login` después de la instalación.

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── api/                    # APIs REST
│   │   ├── solicitudes/
│   │   │   ├── canje/         # API canje de permiso
│   │   │   ├── nuevo-permiso/ # API nuevo permiso
│   │   ├── admin/
│   │   │   ├── login/         # API login admin
│   │   │   ├── solicitudes/   # API gestión solicitudes
│   │   │   └── me/            # API datos admin
│   │   └── contacto/          # API formulario contacto
│   ├── admin/
│   │   ├── login/             # Página login
│   │   ├── dashboard/         # Panel principal
│   │   └── solicitud/[id]/    # Detalle solicitud
│   ├── page.tsx               # Página inicio
│   ├── solicitud-canje/       # Página formulario canje
│   ├── nuevo-permiso/         # Página formulario nuevo permiso
│   ├── tarifas/               # Página tarifas
│   ├── faq/                   # Página FAQ
│   ├── contacto/              # Página contacto
│   └── ...
├── lib/
│   ├── auth.ts                # Autenticación JWT
│   ├── validation.ts          # Esquemas Zod
│   ├── security.ts            # Funciones seguridad
│   ├── file-handler.ts        # Gestión archivos
│   ├── middleware.ts          # Middlewares
│   └── prisma.ts              # Cliente Prisma
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
prisma/
├── schema.prisma              # Esquema base datos
└── seed.js                    # Script poblado
public/
├── robots.txt
└── sitemap.xml
```

## 🔒 Seguridad

- **Validación de entrada**: Zod + sanitización
- **Autenticación**: JWT con cookies httpOnly
- **Protección CSRF**: Tokens CSRF en formularios
- **Protección XSS**: Sanitización de HTML
- **Protección SQLi**: Prisma ORM
- **Almacenamiento seguro**: Documentos fuera de directorio público
- **Hash de contraseñas**: bcryptjs con salt 12
- **Auditoría**: Logs de todas las acciones
- **RGPD**: Consentimiento explícito requerido

## 📊 API Endpoints

### Solicitudes públicas

```bash
POST /api/solicitudes/canje
Content-Type: application/json

{
  "nombre": "Juan",
  "apellido": "García",
  "fecha_nacimiento": "1990-01-15",
  "telefono": "+34 608 350 531",
  "email": "juan@example.com",
  "direccion": "Calle Principal 123",
  "nie_dni": "12345678A",
  "numero_permiso": "ABC123456",
  "fecha_expedicion": "2020-01-01",
  "fecha_caducidad": "2030-01-01",
  "categorias": "B",
  "pais_emision": "Francia",
  "consentimiento_datos": true,
  "consentimiento_tratamiento": true
}
```

### Admin

```bash
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@grupoveloxautoescuela.es",
  "password": "Admin@2026!Seguro"
}
```

```bash
GET /api/admin/solicitudes?page=1&estado=nueva_solicitud&search=Juan
Cookie: admin_token=...
```

```bash
PUT /api/admin/solicitudes/{id}
Cookie: admin_token=...
Content-Type: application/json

{
  "estado": "en_revision",
  "comentario_admin": "Falta documento de identidad",
  "notas_internas": "Cliente llamó confirmando datos"
}
```

## 🚀 Despliegue en Producción

### Con Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

Configura las variables de entorno en el panel de Vercel.

### Con Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Variables de entorno para producción

```env
# Seguridad
NEXTAUTH_URL=https://www.grupoveloxautoescuela.es
NEXTAUTH_SECRET=genera-una-contraseña-segura-de-32-caracteres
NODE_ENV=production

# Base de datos
DATABASE_URL="postgresql://usuario:contraseña@host:5432/grupo_velox_autoescuela?sslmode=require"

# Archivos
ALLOWED_FILE_TYPES=pdf,jpg,jpeg,png,doc,docx
MAX_FILE_SIZE=5242880

# Email (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_contraseña_app
```

## 📞 Contacto y Soporte

- **Teléfono/WhatsApp**: +34 608 350 531
- **Email**: contacto@grupoveloxautoescuela.es (próximamente)
- **Horario**: Lunes a viernes, 9:00 a 18:00

## 📄 Licencia

MIT License - Ver LICENSE para más detalles.

## ⚠️ Aviso Legal

Este sitio web tiene finalidad informativa y orientativa. No se garantiza la obtención de permisos ni se ofrecen promesas de resultado. La elegibilidad depende de las autoridades competentes en España.

## 🔄 Actualizaciones

Verifica regularmente nuevas versiones y seguridad:

```bash
git pull origin main
npm install
npm run db:migrate
npm run build
```

---

**Versión**: 1.0.0
**Última actualización**: Octubre 2026
**Desarrollado por**: Grupo Velox Autoescuela
