import { RegistroForm } from '@/components/forms/registro-form';

export const metadata = { title: 'Crear cuenta' };

export default function RegistroPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-4">
      <h1 className="text-2xl font-semibold text-foreground">Crear cuenta</h1>
      <RegistroForm />
    </main>
  );
}
