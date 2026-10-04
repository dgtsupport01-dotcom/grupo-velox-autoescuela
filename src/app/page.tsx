import Link from 'next/link';

const services = [
  {
    title: 'Inscribirse para obtener un nuevo permiso de conducir',
    description: 'Solicita tu inscripción para iniciar tu procedimiento con orientación clara y documentación correcta.',
    button: 'Inscribirme para un nuevo permiso',
    href: '/nuevo-permiso'
  },
  {
    title: 'Inscribirse para canjear el permiso de conducir extranjero',
    description: 'Revisa tu situación, presenta la información necesaria y recibe orientación sobre el siguiente paso.',
    button: 'Solicitar el canje',
    href: '/solicitud-canje'
  }
];

const steps = [
  'Completa el formulario',
  'Revisión de la información',
  'Orientación y procedimiento',
  'Seguimiento de tu solicitud'
];

const reasons = [
  'Acompañamiento personalizado',
  'Proceso claro y transparente',
  'Atención al cliente',
  'Verificación de la documentación',
  'Comunicación directa',
  'Seguimiento del expediente'
];

const faq = [
  {
    question: '¿Qué es el canje de un permiso extranjero?',
    answer:
      'El canje implica la tramitación y valoración de un permiso extranjero conforme a las normativas y autoridades competentes en España. La elegibilidad y el procedimiento dependen de cada caso concreto.'
  },
  {
    question: '¿Qué documentos necesito?',
    answer:
      'Normalmente, se requiere el permiso original, documento de identidad o pasaporte, NIE o DNI, así como otros documentos que puedan ser requeridos según la autoridad competente y la normativa aplicable.'
  },
  {
    question: '¿Puedo solicitar el canje de cualquier permiso extranjero?',
    answer:
      'No siempre es posible. La elegibilidad depende del país, el tipo de permiso, la normativa vigente y la normativa de la autoridad competente en España.'
  },
  {
    question: '¿Cuánto cuesta el servicio?',
    answer:
      'Los precios indicados corresponden a los servicios que ofrecemos. Los posibles gastos oficiales o administrativos se comunicarán por separado cuando correspondan.'
  },
  {
    question: '¿Cuánto tarda el procedimiento?',
    answer:
      'El tiempo final depende del tipo de trámite, la documentación aportada y la evolución de la gestión ante las autoridades correspondientes.'
  },
  {
    question: '¿Cómo puedo enviar mis documentos?',
    answer:
      'Podrás adjuntarlos a través del formulario o seguir los indicaciones del equipo una vez revisada tu solicitud y documentación.'
  },
  {
    question: '¿Cómo puedo contactar con Grupo Velox Autoescuela?',
    answer:
      'Puedes contactarnos por teléfono o WhatsApp en +34 608 350 531 o mediante el formulario de contacto del sitio.'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-sky-300 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100">
                Grupo Velox Autoescuela
              </p>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                Gestión y acompañamiento para tus trámites de permiso de conducir en España
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                Solicita tu nuevo permiso de conducir o inicia el proceso de canje de tu permiso extranjero con el acompañamiento de Grupo Velox Autoescuela.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/nuevo-permiso" className="rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-amber-300">
                  Obtener un nuevo permiso
                </Link>
                <Link href="/solicitud-canje" className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10">
                  Canjear mi permiso extranjero
                </Link>
                <a href="https://wa.me/34608350531" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-400 bg-emerald-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-400">
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm">
              <div className="rounded-2xl bg-slate-950/40 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Trámites</p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4">
                    <p className="text-lg font-semibold">Canje de permiso extranjero</p>
                    <p className="mt-1 text-sm text-slate-200">Evaluación y orientación para tu caso concreto.</p>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
                    <p className="text-lg font-semibold">Nuevo permiso de conducir</p>
                    <p className="mt-1 text-sm text-slate-200">Inscripción y apoyo en la documentación inicial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Servicios</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Solicita el servicio que te corresponde</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-base text-slate-600">{service.description}</p>
              <Link href={service.href} className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700">
                {service.button}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Cómo funciona</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Proceso simple y transparente</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-lg font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Por qué elegirnos</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Apoyo claro para cada trámite</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">✓</div>
              <p className="text-lg font-semibold text-slate-900">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Tarifas</p>
              <h2 className="mt-3 text-3xl font-bold">Tarifas</h2>
              <p className="mt-4 text-slate-300">
                Los precios indicados corresponden a los servicios ofrecidos. Los posibles gastos oficiales o administrativos que puedan aplicarse se comunicarán por separado cuando proceda.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Canje</p>
                <p className="mt-4 text-4xl font-bold">510 €</p>
                <Link href="/solicitud-canje" className="mt-6 inline-flex rounded-full bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-300">
                  Solicitar el canje
                </Link>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Nuevo permiso</p>
                <p className="mt-4 text-4xl font-bold">320 €</p>
                <Link href="/nuevo-permiso" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                  Solicitar nuevo permiso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contacto</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">GRUPO VELOX AUTOESCUELA</h2>
              <ul className="mt-6 space-y-3 text-lg text-slate-700">
                <li>+34 608 350 531</li>
                <li>Horario: Lunes a viernes, de 9:00 a 18:00</li>
                <li>Correo electrónico: disponible próximamente</li>
                <li>Dirección física: disponible próximamente</li>
              </ul>
              <a href="https://wa.me/34608350531" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400">
                Hablar por WhatsApp
              </a>
            </div>

            <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                  Nombre y apellidos
                  <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none ring-0 transition focus:border-sky-400" placeholder="Tu nombre" />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Correo electrónico
                  <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" placeholder="correo@ejemplo.com" />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Teléfono
                  <input className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" placeholder="+34 ..." />
                </label>

                <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                  Mensaje
                  <textarea rows={5} className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none transition focus:border-sky-400" placeholder="Cuéntanos tu caso o consulta" />
                </label>
              </div>

              <button type="button" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
