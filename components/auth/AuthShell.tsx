import Link from 'next/link';
import type { ReactNode } from 'react';

type AuthShellProps = {
  /** Clase de Font Awesome del ícono superior, p. ej. "fa-user". */
  icon: string;
  title: string;
  subtitle: string;
  /** Contenido de la tarjeta (el formulario). */
  children: ReactNode;
  /** Pregunta del pie, p. ej. "¿No tienes cuenta?". */
  switchText: string;
  switchLabel: string;
  switchHref: string;
};

/**
 * Estructura visual compartida por /login y /registro:
 * fondo oscuro con brillos, título, tarjeta y enlace a la otra página.
 * El header global es `absolute`, por eso el padding superior grande.
 */
export function AuthShell({
  icon,
  title,
  subtitle,
  children,
  switchText,
  switchLabel,
  switchHref,
}: AuthShellProps) {
  return (
    <main className="relative isolate flex flex-1 items-start justify-center overflow-hidden bg-[var(--dark-color-divider)] px-[15px] pb-[80px] pt-[130px] min-[993px]:items-center min-[993px]:pt-[150px]">
      {/* Brillos decorativos de fondo (como el original) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(166,161,130,0.14),transparent_50%),radial-gradient(circle_at_80%_85%,rgba(166,161,130,0.09),transparent_50%)]"
      />

      <div className="w-full max-w-[450px]">
        <div className="mb-8 text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[var(--color-divider)] bg-[var(--color-secondary)] text-[24px] text-[var(--color-primary)]"
          >
            <i className={`fa-solid ${icon}`} />
          </span>
          <h1 className="mb-2 text-[26px] font-bold text-[var(--color-light)] min-[501px]:text-[30px]">
            {title}
          </h1>
          <p className="text-[15px] text-[var(--text-color)]">{subtitle}</p>
        </div>

        <div className="rounded-[18px] border border-white/10 bg-[var(--color-secondary)] p-[26px] shadow-[0_8px_35px_rgba(0,0,0,0.35)] min-[501px]:p-10">
          {children}

          <div className="my-6 flex items-center gap-4 text-sm text-[var(--text-color)] before:h-px before:flex-1 before:bg-white/10 before:content-[''] after:h-px after:flex-1 after:bg-white/10 after:content-['']">
            o
          </div>

          <div className="text-center">
            <p className="mb-2 text-[var(--text-color)]">{switchText}</p>
            <Link
              href={switchHref}
              className="group inline-flex items-center gap-[6px] font-semibold text-[var(--color-primary)] no-underline transition-all duration-300 hover:gap-[10px] hover:text-[var(--color-light)]"
            >
              {switchLabel}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
