import Link from 'next/link';

const fields = [
  'Nombre y apellidos',
  'Fecha de nacimiento',
  'Número de teléfono / WhatsApp',
  'Correo electrónico',
  'Dirección de residencia',
  'Número del permiso',
  'Fecha de expedición',
  'Fecha de caducidad',
  'Categorías autorizadas',
  'País de expedición'
];

export default function SolicitudCanjePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Trámite</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Solicitud de canje de permiso de conducir extranjero</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Te acompañamos durante las diferentes etapas de tu solicitud de canje de permiso de conducir en España. Completa el siguiente formulario para que podamos revisar tu información y orientarte sobre los siguientes pasos.
        </p>
      </div>

      <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="block text-sm font-medium text-slate-700">
              {field}
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" />
            </label>
          ))}

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Permiso de conducir extranjero
            <input type="file" className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-6 text-sm text-slate-600" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Documento de identidad o pasaporte
            <input type="file" className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-6 text-sm text-slate-600" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            NIE o DNI
            <input type="file" className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-6 text-sm text-slate-600" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Otros documentos necesarios
            <input type="file" className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-6 text-sm text-slate-600" />
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Firma digital
            <input type="text" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" placeholder="Firma del solicitante" />
          </label>

          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <label className="flex items-start gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-600" />
              <span>
                Autorizo a Grupo Velox Autoescuela a tratar la información proporcionada para estudiar mi solicitud y contactar conmigo en relación con mi procedimiento.
              </span>
            </label>
            <label className="mt-4 flex items-start gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-600" />
              <span>
                Confirmo que la información facilitada es exacta y que he revisado los datos introducidos.
              </span>
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">No se promueve la falsificación ni la manipulación de documentos.</p>
          <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
            Enviar mi solicitud
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
          Solicitud recibida correctamente. Nuestro equipo revisará la información proporcionada y se pondrá en contacto contigo para indicarte los siguientes pasos.
        </div>
      </form>
    </main>
  );
}
