import { NextRequest, NextResponse } from 'next/server';
import { NuevoPermisoFormSchema } from '@/lib/validation';
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
    const validatedData = NuevoPermisoFormSchema.parse(body);

    // Sanitizar inputs
    const sanitizedData = {
      ...validatedData,
      nombre: sanitizeInput(validatedData.nombre),
      apellido: sanitizeInput(validatedData.apellido),
      email: validatedData.email.toLowerCase(),
      direccion: sanitizeInput(validatedData.direccion)
    };

    // Verificar si el usuario ya existe
    let user = await prisma.user.findUnique({
      where: { nie_dni: sanitizedData.nie_dni }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          nombre: sanitizedData.nombre,
          apellido: sanitizedData.apellido,
          email: sanitizedData.email,
          telefono: sanitizedData.telefono,
          whatsapp: sanitizedData.whatsapp || sanitizedData.telefono,
          fecha_nacimiento: new Date(sanitizedData.fecha_nacimiento),
          direccion: sanitizedData.direccion,
          nie_dni: sanitizedData.nie_dni
        }
      });
    }

    // Crear permiso
    await prisma.permiso.create({
      data: {
        user_id: user.id,
        numero_permiso: sanitizedData.nie_dni,
        fecha_expedicion: new Date(),
        fecha_caducidad: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        pais_emision: 'España',
        categorias: sanitizedData.categoria_solicitada,
        tipo_solicitud: 'nuevo'
      }
    });

    // Crear solicitud
    const solicitud = await prisma.solicitud.create({
      data: {
        user_id: user.id,
        tipo_solicitud: 'nuevo',
        estado: 'nueva_solicitud',
        consentimiento_datos: true,
        consentimiento_tratamiento: true,
        ip_solicitud: getClientIp(req)
      }
    });

    // Registrar en logs
    await prisma.registroAcceso.create({
      data: {
        solicitud_id: solicitud.id,
        accion: 'creacion',
        detalles: `Solicitud de nuevo permiso creada por ${user.nombre} ${user.apellido}`,
        ip_origen: getClientIp(req)
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inscripción recibida correctamente',
        solicitud_id: solicitud.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en POST /api/solicitudes/nuevo-permiso:', error);

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
