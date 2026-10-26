import { requireUser } from '@/lib/auth';

export default async function MisReservasPage() {
  const user = await requireUser();

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Mis reservas</h1>
      <p>Sesión iniciada como {user.email}</p>
    </main>
  );
}
