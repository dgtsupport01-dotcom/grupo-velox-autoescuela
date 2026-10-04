import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || 'dev-secret-key-min-32-chars-length'
);

export async function createAdminToken(adminId: string, email: string) {
  const token = await new SignJWT({ id: adminId, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400 // 24 horas
  });

  return token;
}

export async function verifyAdminToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as { id: string; email: string };
  } catch (err) {
    return null;
  }
}

export async function clearAdminToken() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
}
