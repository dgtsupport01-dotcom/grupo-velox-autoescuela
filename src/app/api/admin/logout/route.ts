import { NextRequest, NextResponse } from 'next/server';
import { clearAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    await clearAdminToken();

    return NextResponse.json(
      { success: true, message: 'Sesión cerrada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en POST /api/admin/logout:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
