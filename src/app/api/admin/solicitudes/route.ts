import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/lib/middleware';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const adminAuth = await withAdminAuth(req);
    if (adminAuth instanceof NextResponse) return adminAuth;

    // Obtener parámetros de consulta
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const estado = searchParams.get('estado');
    const tipo = searchParams.get('tipo');
    const search = searchParams.get('search');

    const skip = (page - 1) * limit;

    // Construir filtro
    const where: any = {};
    if (estado) where.estado = estado;
    if (tipo) where.tipo_solicitud = tipo;
    if (search) {
      where.OR = [
        { user: { nombre: { contains: search, mode: 'insensitive' } } },
        { user: { apellido: { contains: search, mode: 'insensitive' } } },
        { user: { email: { contains: search, mode: 'insensitive' } } },
        { user: { nie_dni: { contains: search, mode: 'insensitive' } } }
      ];
    }

    // Obtener solicitudes con paginación
    const solicitudes = await prisma.solicitud.findMany({
      where,
      include: {
        user: true,
        logs: {
          orderBy: { timestamp: 'desc' },
          take: 3
        }
      },
      orderBy: { fecha_creacion: 'desc' },
      skip,
      take: limit
    });

    // Contar total
    const total = await prisma.solicitud.count({ where });

    return NextResponse.json({
      solicitudes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error en GET /api/admin/solicitudes:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
