type AuthSubmitProps = {
  pending: boolean;
  label: string;
  pendingLabel: string;
};

/** Botón principal de los formularios de acceso, con estado "enviando". */
export function AuthSubmit({ pending, label, pendingLabel }: AuthSubmitProps) {
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="flex h-[54px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-xl border-none bg-[var(--color-primary)] px-5 text-base font-bold text-[var(--dark-color-divider)] transition-colors duration-300 hover:bg-[var(--color-light)] disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-[var(--color-primary)]"
    >
      {pending && <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />}
      {pending ? pendingLabel : label}
    </button>
  );
}
