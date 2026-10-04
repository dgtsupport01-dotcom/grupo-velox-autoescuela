import { NextRequest, NextResponse } from 'next/server';
import { CanjeFormSchema } from '@/lib/validation';
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
    const validatedData = CanjeFormSchema.parse(body);

    // Sanitizar inputs
    const sanitizedData = {
      ...validatedData,
      nombre: sanitizeInput(validatedData.nombre),
      apellido: sanitizeInput(validatedData.apellido),
      email: validatedData.email.toLowerCase(),
      direccion: sanitizeInput(validatedData.direccion),
      nie_dni: sanitizeInput(validatedData.nie_dni)
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
        numero_permiso: sanitizedData.numero_permiso,
        fecha_expedicion: new Date(sanitizedData.fecha_expedicion),
        fecha_caducidad: new Date(sanitizedData.fecha_caducidad),
        pais_emision: sanitizedData.pais_emision,
        categorias: sanitizedData.categorias,
        tipo_solicitud: 'canje'
      }
    });

    // Crear solicitud
    const solicitud = await prisma.solicitud.create({
      data: {
        user_id: user.id,
        tipo_solicitud: 'canje',
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
        detalles: `Solicitud de canje creada por ${user.nombre} ${user.apellido}`,
        ip_origen: getClientIp(req)
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud de canje recibida correctamente',
        solicitud_id: solicitud.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en POST /api/solicitudes/canje:', error);

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
