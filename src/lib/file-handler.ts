import crypto from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'private', 'uploads');
const ALLOWED_TYPES = (process.env.ALLOWED_FILE_TYPES || 'pdf,jpg,jpeg,png').split(',');
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '5242880'); // 5MB por defecto

export async function ensureUploadsDir() {
  try {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
  } catch (err) {
    console.error('Error creando directorio de uploads:', err);
  }
}

export function validateFile(
  filename: string,
  mimetype: string,
  size: number
): { valid: boolean; error?: string } {
  const ext = filename.split('.').pop()?.toLowerCase();

  if (!ext || !ALLOWED_TYPES.includes(ext)) {
    return { valid: false, error: 'Tipo de archivo no permitido' };
  }

  if (size > MAX_FILE_SIZE) {
    return { valid: false, error: 'Archivo demasiado grande' };
  }

  const mimeTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!mimeTypes.includes(mimetype)) {
    return { valid: false, error: 'MIME type no permitido' };
  }

  return { valid: true };
}

export function generateSecureFilename(originalFilename: string): string {
  const hash = crypto.randomBytes(16).toString('hex');
  const ext = originalFilename.split('.').pop();
  return `${hash}.${ext}`;
}

export function generateFileHash(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

export async function saveFile(
  buffer: Buffer,
  filename: string,
  subdirectory = ''
): Promise<string> {
  await ensureUploadsDir();

  const dir = subdirectory ? path.join(UPLOADS_DIR, subdirectory) : UPLOADS_DIR;
  await fs.mkdir(dir, { recursive: true });

  const filepath = path.join(dir, filename);
  await fs.writeFile(filepath, buffer);

  return path.relative(UPLOADS_DIR, filepath);
}

export async function deleteFile(relativePath: string): Promise<boolean> {
  try {
    const filepath = path.join(UPLOADS_DIR, relativePath);
    await fs.unlink(filepath);
    return true;
  } catch (err) {
    console.error('Error eliminando archivo:', err);
    return false;
  }
}

export async function getFileBuffer(relativePath: string): Promise<Buffer | null> {
  try {
    const filepath = path.join(UPLOADS_DIR, relativePath);
    return await fs.readFile(filepath);
  } catch (err) {
    console.error('Error leyendo archivo:', err);
    return null;
  }
}
