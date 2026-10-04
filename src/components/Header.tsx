import Link from 'next/link';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Canje', href: '/solicitud-canje' },
  { label: 'Nuevo permiso', href: '/nuevo-permiso' },
  { label: 'Tarifas', href: '/tarifas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900">
          GRUPO VELOX
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/admin" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-700">
            Panel admin
          </Link>
          <a href="https://wa.me/34608350531" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
