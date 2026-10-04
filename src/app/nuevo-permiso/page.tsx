export default function NuevoPermisoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Trámite</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Inscripción para obtener un nuevo permiso de conducir</h1>
      </div>

      <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Nombre y apellidos
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Fecha de nacimiento
            <input type="date" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Teléfono
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            WhatsApp
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Correo electrónico
            <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Dirección de residencia
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            NIE/DNI
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Tipo de permiso
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Categoría solicitada
            <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Información adicional
            <textarea rows={5} className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
          </label>
        </div>

        <button type="submit" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
          Enviar inscripción
        </button>
      </form>
    </main>
  );
}
