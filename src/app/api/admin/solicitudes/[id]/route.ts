import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/lib/middleware';
import prisma from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const adminAuth = await withAdminAuth(req);
    if (adminAuth instanceof NextResponse) return adminAuth;

    const solicitud = await prisma.solicitud.findUnique({
      where: { id: params.id },
      include: {
        user: {
          include: {
            permisos: true,
            documentos: true
          }
        },
        logs: {
          orderBy: { timestamp: 'desc' }
        }
      }
    });

    if (!solicitud) {
      return NextResponse.json(
        { error: 'Solicitud no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(solicitud);
  } catch (error) {
    console.error('Error en GET /api/admin/solicitudes/[id]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const adminAuth = await withAdminAuth(req);
    if (adminAuth instanceof NextResponse) return adminAuth;

    const body = await req.json();
    const { estado, comentario_admin, notas_internas } = body;

    // Validar estado
    const estadosValidos = ['nueva_solicitud', 'en_revision', 'documentos_pendientes', 'en_proceso', 'completada', 'no_elegible'];
    if (estado && !estadosValidos.includes(estado)) {
      return NextResponse.json(
        { error: 'Estado inválido' },
        { status: 400 }
      );
    }

    // Actualizar solicitud
    const solicitud = await prisma.solicitud.update({
      where: { id: params.id },
      data: {
        estado: estado || undefined,
        comentario_admin: comentario_admin || undefined,
        notas_internas: notas_internas || undefined
      }
    });

    // Registrar en logs
    await prisma.registroAcceso.create({
      data: {
        solicitud_id: params.id,
        admin_id: adminAuth.id,
        accion: 'actualizacion_estado',
        detalles: `Estado actualizado a: ${estado}. ${comentario_admin ? `Comentario: ${comentario_admin}` : ''}`
      }
    });

    return NextResponse.json({
      success: true,
      solicitud
    });
  } catch (error) {
    console.error('Error en PUT /api/admin/solicitudes/[id]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
