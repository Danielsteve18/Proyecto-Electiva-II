import type { ReactNode } from 'react';

type AuthAlertProps = {
  type: 'error' | 'success';
  title?: string;
  children: ReactNode;
};

const styles = {
  error: {
    box: 'border-[#d93636]/40 bg-[#d93636]/15 text-[#ff6b7a]',
    icon: 'fa-circle-xmark',
    role: 'alert' as const,
  },
  success: {
    box: 'border-[#8fae56]/40 bg-[#8fae56]/15 text-[#b5d27a]',
    icon: 'fa-circle-check',
    role: 'status' as const,
  },
};

/** Mensaje de error (rojo) o de éxito (verde) con ícono, como en el original. */
export function AuthAlert({ type, title, children }: AuthAlertProps) {
  const s = styles[type];

  return (
    <div
      role={s.role}
      className={`flex items-start gap-3 rounded-[10px] border px-4 py-3 ${s.box}`}
    >
      <i className={`fa-solid ${s.icon} mt-[2px] text-[20px]`} aria-hidden="true" />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <p>{children}</p>
      </div>
    </div>
  );
}
