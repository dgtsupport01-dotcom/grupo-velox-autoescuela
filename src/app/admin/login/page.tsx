'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error en la autenticación');
        return;
      }

      // Redirigir al dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Error de conexión');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-sky-900 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Panel Administrativo</h1>
          <p className="mt-2 text-slate-300">Grupo Velox Autoescuela</p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-400/50 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <label className="block text-sm font-medium text-white">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-sky-400 disabled:opacity-50"
              placeholder="admin@grupoveloxautoescuela.es"
            />
          </label>

          <label className="block text-sm font-medium text-white">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-sky-400 disabled:opacity-50"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 disabled:opacity-50"
          >
            {loading ? 'Autenticando...' : 'Acceder al panel'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Credenciales de prueba:<br />
          <code className="text-xs">admin@grupoveloxautoescuela.es</code>
        </p>
      </div>
    </div>
  );
}
