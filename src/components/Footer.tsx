export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">GRUPO VELOX AUTOESCUELA</h3>
          <p className="mt-3 text-sm text-slate-300">
            Acompañamiento profesional para trámites de permiso de conducir en España.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Enlaces</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/solicitud-canje" className="hover:text-white">Solicitud de canje</a></li>
            <li><a href="/nuevo-permiso" className="hover:text-white">Nuevo permiso</a></li>
            <li><a href="/tarifas" className="hover:text-white">Tarifas</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Legales</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/aviso-legal" className="hover:text-white">Aviso legal</a></li>
            <li><a href="/politica-privacidad" className="hover:text-white">Política de privacidad</a></li>
            <li><a href="/politica-cookies" className="hover:text-white">Política de cookies</a></li>
            <li><a href="/terminos-condiciones" className="hover:text-white">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © 2026 Grupo Velox Autoescuela. Todos los derechos reservados.
      </div>
    </footer>
  );
}
