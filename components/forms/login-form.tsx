'use client';

import { useActionState } from 'react';
import { login } from '@/app/login/actions';
const inputClass =
  'rounded-md border border-input bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input name="email" type="email" placeholder="Correo" required className={inputClass} />
      <input name="password" type="password" placeholder="Contraseña" required className={inputClass} />
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-60">
        {pending ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  );
}
