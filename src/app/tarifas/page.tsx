export default function TarifasPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Servicios</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Tarifas</h1>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Canje de permiso</p>
          <p className="mt-6 text-5xl font-bold text-slate-900">510 €</p>
          <p className="mt-4 text-slate-600">Servicio de acompañamiento para la revisión de documentación y orientación del procedimiento requerido.</p>
          <a href="/solicitud-canje" className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
            Solicitar el canje
          </a>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Nuevo permiso</p>
          <p className="mt-6 text-5xl font-bold text-slate-900">320 €</p>
          <p className="mt-4 text-slate-600">Servicio de apoyo para la inscripción y la presentación inicial de la documentación necesaria.</p>
          <a href="/nuevo-permiso" className="mt-8 inline-flex rounded-full bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-300">
            Solicitar nuevo permiso
          </a>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        Los precios indicados corresponden a los servicios propuestos. Los posibles gastos oficiales o administrativos deberán comunicarse por separado cuando proceda. No se garantiza la obtención del permiso ni se ofrecen promesas de resultado.
      </div>
    </main>
  );
}
