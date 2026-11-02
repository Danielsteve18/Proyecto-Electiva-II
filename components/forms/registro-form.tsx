'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { registrar, type RegistroState } from '@/app/registro/actions';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { AuthField } from '@/components/auth/AuthField';
import { AuthSubmit } from '@/components/auth/AuthSubmit';

export function RegistroForm() {
  const [state, formAction, pending] = useActionState<RegistroState, FormData>(
    registrar,
    null,
  );

  if (state?.ok) {
    return (
      <div className="flex flex-col gap-6">
        <AuthAlert type="success" title="¡Cuenta creada!">
          {state.needsConfirmation
            ? 'Revisa tu correo para confirmarla antes de iniciar sesión.'
            : 'Ya puedes iniciar sesión.'}
        </AuthAlert>
        <Link
          href="/login"
          className="flex h-[54px] w-full items-center justify-center gap-[10px] rounded-xl bg-[var(--color-primary)] px-5 text-base font-bold text-[var(--dark-color-divider)] no-underline transition-colors duration-300 hover:bg-[var(--color-light)]"
        >
          Ir a iniciar sesión
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && <AuthAlert type="error">{state.error}</AuthAlert>}

      <AuthField
        id="full_name"
        name="full_name"
        label="Nombre completo"
        type="text"
        icon="fa-user"
        placeholder="Tu nombre y apellido"
        autoComplete="name"
        invalidMessage="Escribe tu nombre completo"
        keepValue
      />
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
        placeholder="Crea una contraseña segura"
        autoComplete="new-password"
        minLength={8}
        invalidMessage="La contraseña debe tener al menos 8 caracteres"
        help="Mínimo 8 caracteres"
      />

      <AuthSubmit
        pending={pending}
        label="Crear cuenta"
        pendingLabel="Creando cuenta…"
      />
    </form>
  );
}
