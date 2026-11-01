'use client';

import { useActionState } from 'react';
import { login } from '@/app/login/actions';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { AuthField } from '@/components/auth/AuthField';
import { AuthSubmit } from '@/components/auth/AuthSubmit';

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && <AuthAlert type="error">{state.error}</AuthAlert>}

      <AuthField
        id="email"
        name="email"
        label="Correo electrónico"
        type="email"
        icon="fa-envelope"
        placeholder="correo@ejemplo.com"
        autoComplete="email"
        invalidMessage="Escribe un correo válido, por ejemplo nombre@correo.com"
        keepValue
      />
      <AuthField
        id="password"
        name="password"
        label="Contraseña"
        type="password"
        icon="fa-lock"
        placeholder="Ingresa tu contraseña"
        autoComplete="current-password"
        invalidMessage="Escribe tu contraseña"
      />

      <AuthSubmit pending={pending} label="Iniciar sesión" pendingLabel="Entrando…" />
    </form>
  );
}
