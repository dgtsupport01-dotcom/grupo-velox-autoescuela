import { z } from 'zod';

export const CanjeFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres').max(100),
  fecha_nacimiento: z.string().refine((date) => !isNaN(Date.parse(date)), 'Fecha inválida'),
  telefono: z.string().regex(/^\+?[0-9]{7,15}$/, 'Teléfono inválido'),
  whatsapp: z.string().optional(),
  email: z.string().email('Email inválido'),
  direccion: z.string().min(5, 'Dirección requerida').max(255),
  numero_permiso: z.string().min(5, 'Número de permiso inválido'),
  fecha_expedicion: z.string().refine((date) => !isNaN(Date.parse(date)), 'Fecha inválida'),
  fecha_caducidad: z.string().refine((date) => !isNaN(Date.parse(date)), 'Fecha inválida'),
  categorias: z.string().min(1, 'Categorías requeridas'),
  pais_emision: z.string().min(2, 'País requerido'),
  consentimiento_datos: z.boolean().refine((val) => val === true, 'Consentimiento requerido'),
  consentimiento_tratamiento: z.boolean().refine((val) => val === true, 'Consentimiento requerido')
});

export const NuevoPermisoFormSchema = z.object({
  nombre: z.string().min(2).max(100),
  apellido: z.string().min(2).max(100),
  fecha_nacimiento: z.string().refine((date) => !isNaN(Date.parse(date)), 'Fecha inválida'),
  telefono: z.string().regex(/^\+?[0-9]{7,15}$/),
  whatsapp: z.string().optional(),
  email: z.string().email(),
  direccion: z.string().min(5).max(255),
  nie_dni: z.string().min(5).max(20),
  tipo_permiso: z.string().min(1),
  categoria_solicitada: z.string().min(1),
  informacion_adicional: z.string().optional(),
  consentimiento_datos: z.boolean().refine((val) => val === true),
  consentimiento_tratamiento: z.boolean().refine((val) => val === true)
});

export const LoginAdminSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Contraseña inválida')
});

export const ContactoFormSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  telefono: z.string().regex(/^\+?[0-9]{7,15}$/),
  mensaje: z.string().min(10).max(1000)
});
