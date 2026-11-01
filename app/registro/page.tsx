import { AuthShell } from '@/components/auth/AuthShell';
import { RegistroForm } from '@/components/forms/registro-form';

export const metadata = { title: 'Crear cuenta' };

export default function RegistroPage() {
  return (
    <AuthShell
      icon="fa-user-plus"
      title="Crear nueva cuenta"
      subtitle="Completa el formulario para registrarte"
      switchText="¿Ya tienes cuenta?"
      switchLabel="Iniciar sesión"
      switchHref="/login"
    >
      <RegistroForm />
    </AuthShell>
  );
}
