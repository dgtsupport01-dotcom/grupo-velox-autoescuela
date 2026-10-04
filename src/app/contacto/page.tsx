export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contacto</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Contacto</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">GRUPO VELOX AUTOESCUELA</h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-700">
            <li>+34 608 350 531</li>
            <li>WhatsApp: +34 608 350 531</li>
            <li>Horario: lunes a viernes de 9:00 a 18:00</li>
            <li>Correo electrónico: próximamente</li>
            <li>Dirección física: próximamente</li>
          </ul>
          <a href="https://wa.me/34608350531" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400">
            Hablar por WhatsApp
          </a>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 md:col-span-2">
              Nombre y apellidos
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Correo electrónico
              <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Teléfono
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
            </label>
            <label className="block text-sm font-medium text-slate-700 md:col-span-2">
              Mensaje
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
            </label>
          </div>

          <button type="button" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
}
