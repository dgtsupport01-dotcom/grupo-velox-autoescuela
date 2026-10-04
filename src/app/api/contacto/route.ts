import { NextRequest, NextResponse } from 'next/server';
import { ContactoFormSchema } from '@/lib/validation';
import prisma from '@/lib/prisma';
import { sanitizeInput } from '@/lib/security';
import { getClientIp } from '@/lib/middleware';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type debe ser application/json' },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Validar con Zod
    const validatedData = ContactoFormSchema.parse(body);

    // Sanitizar inputs
    const mensaje = sanitizeInput(validatedData.mensaje);

    // Aquí podrías enviar un email o guardar en base de datos
    // Por ahora solo registramos
    console.log('Mensaje de contacto recibido:', {
      nombre: validatedData.nombre,
      email: validatedData.email,
      telefono: validatedData.telefono,
      mensaje,
      ip: getClientIp(req),
      timestamp: new Date()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje recibido correctamente. Nos pondremos en contacto pronto.'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en POST /api/contacto:', error);

    if (error instanceof Error && error.message.includes('Validation')) {
      return NextResponse.json(
        { error: 'Datos inválidos' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
