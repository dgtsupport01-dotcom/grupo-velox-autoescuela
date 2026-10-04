export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>"'`]/g, '')
    .trim()
    .substring(0, 255);
}

export function generateCSRFToken(): string {
  const crypto = require('crypto');
  return crypto.randomBytes(32).toString('hex');
}

export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken;
}

export async function hashPassword(password: string): Promise<string> {
  const bcryptjs = require('bcryptjs');
  return bcryptjs.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  const bcryptjs = require('bcryptjs');
  return bcryptjs.compare(password, hash);
}
