import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';

export async function withAdminAuth(req: NextRequest) {
  const adminAuth = await verifyAdminToken();

  if (!adminAuth) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }

  return adminAuth;
}

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
}
