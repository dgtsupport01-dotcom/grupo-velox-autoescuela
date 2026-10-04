## Instrucciones de Instalación Rápida

### Opción 1: Instalación Local (Desarrollo)

```bash
# 1. Clonar repositorio
git clone https://github.com/dgtsupport01-dotcom/grupo-velox-autoescuela.git
cd grupo-velox-autoescuela

# 2. Instalar dependencias
npm install

# 3. Crear .env.local
cp .env.example .env.local
# Edita .env.local con tu configuración PostgreSQL

# 4. Crear base de datos
# En PostgreSQL: CREATE DATABASE grupo_velox_autoescuela;

# 5. Ejecutar migraciones
npm run db:push
npm run db:seed

# 6. Iniciar en desarrollo
npm run dev

# Accede a: http://localhost:3000
# Admin: http://localhost:3000/admin/login
```

### Opción 2: Despliegue en Vercel (Producción)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio GitHub
3. Configura variables de entorno en el panel
4. Vercel desplegará automáticamente

### Opción 3: Despliegue autogestionado

```bash
# En tu servidor (Ubuntu/Debian)

# Instalar Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Clonar proyecto
git clone https://github.com/dgtsupport01-dotcom/grupo-velox-autoescuela.git
cd grupo-velox-autoescuela

# Configurar .env.local con credenciales reales
nano .env.local

# Instalar y compilar
npm install
npm run db:push
npm run db:seed
npm run build

# Usar PM2 para mantener el servicio activo
sudo npm install -g pm2
pm2 start 'npm start' --name "grupo-velox-autoescuela"
pm2 startup
pm2 save

# Configurar Nginx (reverse proxy)
# ... ver documentación de Nginx ...
```

## Credenciales de prueba

**Email**: admin@grupoveloxautoescuela.es
**Contraseña**: Admin@2026!Seguro

## Primeros pasos después de la instalación

1. Acceder al panel admin
2. Cambiar contraseña del admin
3. Revisar configuración de seguridad
4. Probar formularios públicos
5. Configurar email (opcional)
6. Configurar dominio personalizado

## Soporte

Para problemas de instalación:
- Consulta README.md
- Revisa los logs: `.next/logs`
- Verifica configuración de PostgreSQL
- Contacta al equipo
