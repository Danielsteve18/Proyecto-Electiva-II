'use server';

import { createClient } from '@/lib/supabase/server';

export type RegistroState = {
  ok?: boolean;
  needsConfirmation?: boolean;
  error?: string;
} | null;

const MIN_PASSWORD = 8;

export async function registrar(
  _prev: RegistroState,
  formData: FormData,
): Promise<RegistroState> {
  const fullName = String(formData.get('full_name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');

  if (!fullName || !email || !password) {
    return { error: 'Completa todos los campos.' };
  }
  if (password.length < MIN_PASSWORD) {
    return { error: `La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.` };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });

  if (error) {
    switch (error.code) {
      case 'user_already_exists':
      case 'email_exists':
        return { error: 'Este correo ya está registrado.' };
      case 'weak_password':
        return { error: 'La contraseña es muy débil. Usa una más larga y variada.' };
      case 'over_email_send_rate_limit':
        return { error: 'Se enviaron demasiados correos. Intenta de nuevo en unos minutos.' };
      default:
        return { error: 'No pudimos crear tu cuenta. Intenta de nuevo.' };
    }
  }

  // Con "Confirm email" activo, Supabase no devuelve error si el correo ya existe:
  // devuelve un usuario sin identidades.
  if (data.user && data.user.identities?.length === 0) {
    return { error: 'Este correo ya está registrado.' };
  }

  // Sin sesión = el usuario debe confirmar su correo antes de iniciar sesión.
  return { ok: true, needsConfirmation: !data.session };
}
