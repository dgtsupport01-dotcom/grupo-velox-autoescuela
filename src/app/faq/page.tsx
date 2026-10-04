const faq = [
  {
    question: '¿Qué es el canje de un permiso extranjero?',
    answer: 'El canje consiste en la valoración y tramitación de un permiso extranjero conforme a la normativa y a las autoridades competentes en España.'
  },
  {
    question: '¿Qué documentos necesito?',
    answer: 'Normalmente se suele requerir el permiso original, documento de identidad o pasaporte, NIE o DNI y otra documentación según el caso.'
  },
  {
    question: '¿Puedo solicitar el canje de cualquier permiso extranjero?',
    answer: 'No siempre. La elegibilidad depende del país, del tipo de permiso, de la normativa vigente y de la autoridad competente.'
  },
  {
    question: '¿Cuánto cuesta el servicio?',
    answer: 'Los precios se indican en el apartado de tarifas. Los gastos administrativos u oficiales, si corresponden, se comunicarán por separado.'
  },
  {
    question: '¿Cuánto tarda el procedimiento?',
    answer: 'El tiempo depende del tipo de solicitud, la documentación aportada y los plazos de las autoridades competentes.'
  },
  {
    question: '¿Cómo puedo enviar mis documentos?',
    answer: 'Se pueden adjuntar a través del formulario o seguir las indicaciones del equipo tras la revisión inicial.'
  },
  {
    question: '¿Cómo puedo contactar con Grupo Velox Autoescuela?',
    answer: 'Puedes llamarnos por teléfono o WhatsApp al +34 608 350 531 o utilizar el formulario de contacto.'
  }
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">FAQ</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Preguntas frecuentes</h1>
      </div>

      <div className="mt-12 space-y-5">
        {faq.map((item) => (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
            <p className="mt-3 text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
