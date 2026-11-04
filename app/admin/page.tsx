import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPerfil } from '@/lib/auth';

export const instant = false;

export const metadata: Metadata = { title: 'Panel de administración' };

export default async function AdminPage() {
  const perfil = await getPerfil();
  if (!perfil || perfil.role !== 'admin') notFound();

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Panel de administración</h1>
      <p>Base del panel. La gestión completa llega en ELE-43.</p>
    </main>
  );
}
