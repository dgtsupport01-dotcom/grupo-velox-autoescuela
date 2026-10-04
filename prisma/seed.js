import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Crear admin de prueba
  const hashedPassword = await bcryptjs.hash('Admin@2026!Seguro', 12);
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@grupoveloxautoescuela.es' },
    update: {},
    create: {
      email: 'admin@grupoveloxautoescuela.es',
      nombre: 'Administrador',
      password_hash: hashedPassword,
      role: 'admin',
      activo: true
    }
  });

  console.log('✓ Admin creado:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
