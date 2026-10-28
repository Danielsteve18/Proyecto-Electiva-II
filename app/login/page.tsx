import { LoginForm } from '@/components/forms/login-form';

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-sm p-6">
      <h1 className="mb-4 text-2xl font-bold">Iniciar sesión</h1>
      <LoginForm />
    </main>
  );
}
