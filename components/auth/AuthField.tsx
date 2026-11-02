'use client';

import { useState } from 'react';

type AuthFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  /** Clase de Font Awesome del ícono izquierdo, p. ej. "fa-envelope". */
  icon: string;
  placeholder?: string;
  autoComplete?: string;
  minLength?: number;
  /** Mensaje rojo que aparece cuando el campo es inválido. */
  invalidMessage: string;
  /** Ayuda gris que se ve mientras el campo no es inválido. */
  help?: string;
  /** Conserva lo escrito si el formulario se limpia tras un error. */
  keepValue?: boolean;
};

/**
 * Campo con ícono, ojito para la contraseña y validación visual:
 * borde rojo + mensaje cuando el navegador lo marca como inválido
 * (:user-invalid, solo después de que la persona lo toca o envía).
 */
export function AuthField({
  id,
  name,
  label,
  type = 'text',
  icon,
  placeholder,
  autoComplete,
  minLength,
  invalidMessage,
  help,
  keepValue = false,
}: AuthFieldProps) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const isPassword = type === 'password';

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-[var(--color-light)]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={isPassword && visible ? 'text' : type}
          required
          placeholder={placeholder}
          autoComplete={autoComplete}
          minLength={minLength}
          aria-describedby={`${id}-mensaje`}
          {...(keepValue
            ? { defaultValue: value, onChange: (e) => setValue(e.target.value) }
            : {})}
          className={`peer block h-[54px] w-full rounded-xl border border-white/10 bg-white/5 pl-[45px] text-base text-[var(--color-light)] transition-colors duration-300 placeholder:text-[var(--text-color)]/60 focus:border-[var(--color-primary)] focus:outline-none focus:ring-[3px] focus:ring-[var(--color-primary)]/25 user-invalid:border-[#ff6b7a] user-invalid:ring-[3px] user-invalid:ring-[#ff6b7a]/20 ${
            isPassword ? 'pr-[52px]' : 'pr-4'
          }`}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-0 flex h-[54px] items-center text-[var(--text-color)] peer-focus:text-[var(--color-primary)] peer-user-invalid:text-[#ff6b7a]"
        >
          <i className={`fa-solid ${icon}`} />
        </span>

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            aria-pressed={visible}
            className="absolute right-2 top-0 flex h-[54px] w-10 cursor-pointer items-center justify-center border-none bg-transparent text-[var(--text-color)] transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            <i
              className={`fa-solid ${visible ? 'fa-eye-slash' : 'fa-eye'}`}
              aria-hidden="true"
            />
          </button>
        )}

        <p
          id={`${id}-mensaje`}
          className="mt-2 hidden text-sm text-[#ff6b7a] peer-user-invalid:block"
        >
          {invalidMessage}
        </p>
        {help && (
          <p className="mt-2 text-sm text-[var(--text-color)] peer-user-invalid:hidden">
            {help}
          </p>
        )}
      </div>
    </div>
  );
}
