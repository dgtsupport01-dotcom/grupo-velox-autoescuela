export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Administración</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Panel de gestión</h1>
        </div>
        <button className="rounded-full border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700">
          Cerrar sesión
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nuevas solicitudes</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">18</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Canjes</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">9</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nuevos permisos</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">7</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Documentos pendientes</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">5</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Solicitudes</h2>
          <div className="flex gap-3">
            <input className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none" placeholder="Buscar expediente" />
            <select className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none">
              <option>Todos</option>
              <option>Nueva solicitud</option>
              <option>En revisión</option>
              <option>Documentos pendientes</option>
              <option>En proceso</option>
              <option>Completada</option>
              <option>No elegible / Rechazada</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="border-b border-slate-200 text-slate-900">
              <tr>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-3">Ana García</td>
                <td className="px-4 py-3">Canje</td>
                <td className="px-4 py-3"><span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">En revisión</span></td>
                <td className="px-4 py-3">04/10/2026</td>
                <td className="px-4 py-3">Ver / editar</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-3">Luis Pérez</td>
                <td className="px-4 py-3">Nuevo permiso</td>
                <td className="px-4 py-3"><span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800">Documentos pendientes</span></td>
                <td className="px-4 py-3">02/10/2026</td>
                <td className="px-4 py-3">Ver / editar</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-3">María López</td>
                <td className="px-4 py-3">Canje</td>
                <td className="px-4 py-3"><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800">Completada</span></td>
                <td className="px-4 py-3">30/09/2026</td>
                <td className="px-4 py-3">Ver / editar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
