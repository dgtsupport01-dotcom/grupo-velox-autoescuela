'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface SolicitudDetalle {
  id: string;
  tipo_solicitud: string;
  estado: string;
  comentario_admin: string;
  notas_internas: string;
  fecha_creacion: string;
  user: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    whatsapp: string;
    direccion: string;
    nie_dni: string;
    permisos: any[];
  };
  logs: any[];
}

export default function SolicitudDetallePage() {
  const router = useRouter();
  const params = useParams();
  const [solicitud, setSolicitud] = useState<SolicitudDetalle | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [estado, setEstado] = useState('');
  const [comentario, setComentario] = useState('');
  const [notas, setNotas] = useState('');

  useEffect(() => {
    const fetchSolicitud = async () => {
      try {
        const response = await fetch(`/api/admin/solicitudes/${params.id}`, {
          credentials: 'include'
        });
        if (!response.ok) throw new Error('Error fetching');
        const data = await response.json();
        setSolicitud(data);
        setEstado(data.estado);
        setComentario(data.comentario_admin || '');
        setNotas(data.notas_internas || '');
      } catch (error) {
        console.error('Error:', error);
        router.push('/admin/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchSolicitud();
  }, [params.id, router]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/solicitudes/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          estado,
          comentario_admin: comentario,
          notas_internas: notas
        })
      });

      if (response.ok) {
        alert('Solicitud actualizada correctamente');
        router.push('/admin/dashboard');
      }
    } catch (error) {
      alert('Error al guardar');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  if (!solicitud) return <div className="flex items-center justify-center h-screen">Solicitud no encontrada</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/admin/dashboard" className="text-sky-600 hover:text-sky-700">← Volver</Link>
          <h1 className="text-2xl font-bold text-slate-900">Detalles de solicitud</h1>
          <div></div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Información del cliente */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Información del cliente</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-600">Nombre completo</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.nombre} {solicitud.user.apellido}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Teléfono</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.telefono}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">NIE/DNI</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.nie_dni}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Dirección</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.direccion}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">WhatsApp</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{solicitud.user.whatsapp}</p>
                </div>
              </div>
            </div>

            {/* Datos del permiso */}
            {solicitud.user.permisos.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-slate-900">Información del permiso</h2>
                <div className="mt-4 space-y-4">
                  {solicitud.user.permisos.map((permiso) => (
                    <div key={permiso.id} className="rounded-2xl border border-slate-200 p-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-sm text-slate-600">Número de permiso</p>
                          <p className="font-medium text-slate-900">{permiso.numero_permiso}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">País de emisión</p>
                          <p className="font-medium text-slate-900">{permiso.pais_emision}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Categorías</p>
                          <p className="font-medium text-slate-900">{permiso.categorias}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Fecha de caducidad</p>
                          <p className="font-medium text-slate-900">{new Date(permiso.fecha_caducidad).toLocaleDateString('es-ES')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Panel de gestión */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Gestión</h2>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  Estado
                  <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-sky-400"
                  >
                    <option value="nueva_solicitud">Nueva solicitud</option>
                    <option value="en_revision">En revisión</option>
                    <option value="documentos_pendientes">Documentos pendientes</option>
                    <option value="en_proceso">En proceso</option>
                    <option value="completada">Completada</option>
                    <option value="no_elegible">No elegible / Rechazada</option>
                  </select>
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Comentario para el cliente
                  <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-sky-400"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Notas internas
                  <textarea
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-sky-400"
                  />
                </label>

                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="w-full rounded-full bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-700 disabled:opacity-50"
                >
                  {saving ? 'Guardando...' : 'Guardar cambios'}
                </button>
              </div>
            </div>

            {/* Historial */}
            {solicitud.logs.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Historial</h2>
                <div className="space-y-3 text-sm">
                  {solicitud.logs.map((log) => (
                    <div key={log.id} className="rounded-2xl border border-slate-200 p-3">
                      <p className="font-medium text-slate-900">{log.accion}</p>
                      <p className="text-slate-600">{log.detalles}</p>
                      <p className="text-xs text-slate-500 mt-1">{new Date(log.timestamp).toLocaleString('es-ES')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
