'use client';

import { useActionState } from 'react';
import { registrar, type RegistroState } from '@/app/registro/actions';

const inputClass =
  'rounded-md border border-input bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export function RegistroForm() {
  const [state, formAction, pending] = useActionState<RegistroState, FormData>(
    registrar,
    null,
  );

  if (state?.ok) {
    return (
      <p role="status" className="text-foreground">
        {state.needsConfirmation
          ? 'Cuenta creada. Revisa tu correo para confirmarla antes de iniciar sesión.'
          : 'Cuenta creada. Ya puedes iniciar sesión.'}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-foreground">
        Nombre completo
        <input
          name="full_name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-foreground">
        Correo electrónico
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-foreground">
        Contraseña
        <input
          name="password"
          type="password"
          required
          autoComplete="new-password"
          className={inputClass}
        />
      </label>

      {state?.error && (
        <p role="alert" className="text-destructive">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-60"
      >
        {pending ? 'Creando cuenta…' : 'Crear cuenta'}
      </button>
    </form>
  );
}
