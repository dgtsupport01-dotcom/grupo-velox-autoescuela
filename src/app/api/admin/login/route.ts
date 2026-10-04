import { NextRequest, NextResponse } from 'next/server';
import { LoginAdminSchema } from '@/lib/validation';
import prisma from '@/lib/prisma';
import { verifyPassword, sanitizeInput } from '@/lib/security';
import { createAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validar datos de entrada
    const validatedData = LoginAdminSchema.parse(body);

    // Buscar admin por email
    const admin = await prisma.admin.findUnique({
      where: { email: validatedData.email.toLowerCase() }
    });

    if (!admin || !admin.activo) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const passwordValid = await verifyPassword(
      validatedData.password,
      admin.password_hash
    );

    if (!passwordValid) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Crear token JWT
    const token = await createAdminToken(admin.id, admin.email);

    return NextResponse.json(
      {
        success: true,
        message: 'Autenticación exitosa',
        admin: {
          id: admin.id,
          nombre: admin.nombre,
          email: admin.email,
          role: admin.role
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en POST /api/admin/login:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
