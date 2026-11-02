import type { Metadata } from 'next';
import { AuthShell } from '@/components/auth/AuthShell';
import { LoginForm } from '@/components/forms/login-form';

export const metadata: Metadata = { title: 'Iniciar sesión' };

export default function LoginPage() {
  return (
    <AuthShell
      icon="fa-user"
      title="Bienvenido de nuevo"
      subtitle="Ingresa tus credenciales para continuar"
      switchText="¿No tienes cuenta?"
      switchLabel="Crear cuenta nueva"
      switchHref="/registro"
    >
      <LoginForm />
    </AuthShell>
  );
}
