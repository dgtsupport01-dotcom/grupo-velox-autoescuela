'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Solicitud {
  id: string;
  tipo_solicitud: string;
  estado: string;
  fecha_creacion: string;
  user: {
    nombre: string;
    apellido: string;
    email: string;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);
  const [estado, setEstado] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/me', { credentials: 'include' });
        if (!response.ok) {
          router.push('/admin/login');
          return;
        }
        const data = await response.json();
        setAdmin(data.admin);
      } catch (error) {
        router.push('/admin/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        if (estado) params.append('estado', estado);
        if (search) params.append('search', search);

        const response = await fetch(`/api/admin/solicitudes?${params}`, {
          credentials: 'include'
        });

        if (!response.ok) throw new Error('Error fetching solicitudes');

        const data = await response.json();
        setSolicitudes(data.solicitudes);
      } catch (error) {
        console.error('Error fetching solicitudes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (admin) {
      fetchSolicitudes();
    }
  }, [admin, estado, search, page]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    router.push('/admin/login');
  };

  if (!admin) return <div className="flex items-center justify-center h-screen">Cargando...</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Panel de Administración</h1>
            <p className="text-sm text-slate-600">Bienvenido, {admin.nombre}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Total solicitudes</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">{solicitudes.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nuevas</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {solicitudes.filter((s) => s.estado === 'nueva_solicitud').length}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">En revisión</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {solicitudes.filter((s) => s.estado === 'en_revision').length}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Completadas</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {solicitudes.filter((s) => s.estado === 'completada').length}
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Buscar por nombre, email o NIE/DNI..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2 outline-none focus:border-sky-400"
          />
          <select
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 outline-none focus:border-sky-400"
          >
            <option value="">Todos los estados</option>
            <option value="nueva_solicitud">Nueva solicitud</option>
            <option value="en_revision">En revisión</option>
            <option value="documentos_pendientes">Documentos pendientes</option>
            <option value="en_proceso">En proceso</option>
            <option value="completada">Completada</option>
            <option value="no_elegible">No elegible / Rechazada</option>
          </select>
        </div>

        {/* Tabla */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">Cargando solicitudes...</div>
          ) : solicitudes.length === 0 ? (
            <div className="p-8 text-center text-slate-600">No hay solicitudes para mostrar</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Cliente</th>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Email</th>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Tipo</th>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Estado</th>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Fecha</th>
                    <th className="px-6 py-3 text-left font-semibold text-slate-900">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitudes.map((solicitud) => (
                    <tr key={solicitud.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900">
                          {solicitud.user.nombre} {solicitud.user.apellido}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{solicitud.user.email}</td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          solicitud.tipo_solicitud === 'canje'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {solicitud.tipo_solicitud === 'canje' ? 'Canje' : 'Nuevo permiso'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          solicitud.estado === 'nueva_solicitud' ? 'bg-green-100 text-green-800' :
                          solicitud.estado === 'en_revision' ? 'bg-yellow-100 text-yellow-800' :
                          solicitud.estado === 'documentos_pendientes' ? 'bg-orange-100 text-orange-800' :
                          solicitud.estado === 'en_proceso' ? 'bg-blue-100 text-blue-800' :
                          solicitud.estado === 'completada' ? 'bg-emerald-100 text-emerald-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {solicitud.estado.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        {new Date(solicitud.fecha_creacion).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/solicitud/${solicitud.id}`}
                          className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-200"
                        >
                          Ver detalles
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
