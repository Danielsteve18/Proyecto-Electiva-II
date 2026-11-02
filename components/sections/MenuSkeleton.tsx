/** Esqueleto de carga de /menu: 2 secciones con 4 tarjetas "fantasma". */
export function MenuSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-live="polite">
      <span className="sr-only">Cargando el menú…</span>

      {/* Círculos de categorías */}
      <div className="mx-auto flex max-w-[1200px] animate-pulse flex-wrap justify-center gap-x-8 gap-y-10 px-[15px] pt-[60px] min-[993px]:pt-[90px]">
        {[0, 1, 2, 3].map((c) => (
          <div key={c} className="flex flex-col items-center gap-4">
            <div className="h-[110px] w-[110px] rounded-full bg-white/10 min-[769px]:h-[150px] min-[769px]:w-[150px]" />
            <div className="h-4 w-24 rounded bg-white/10" />
          </div>
        ))}
      </div>

      {[0, 1].map((s) => (
        <section key={s} className="px-[15px] py-[50px] min-[993px]:py-[70px]">
          <div className="mx-auto max-w-[1200px] animate-pulse">
            <div className="h-4 w-32 rounded bg-white/10" />
            <div className="mb-10 mt-3 h-9 w-64 rounded bg-white/10" />

            <div className="grid gap-[30px] min-[993px]:grid-cols-2">
              {[0, 1, 2, 3].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-5 rounded-[15px] bg-[var(--color-secondary)] p-5"
                >
                  <div className="h-[110px] w-[110px] shrink-0 rounded-full bg-white/10" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-2/3 rounded bg-white/10" />
                    <div className="h-4 w-full rounded bg-white/10" />
                    <div className="h-4 w-4/5 rounded bg-white/10" />
                  </div>
                  <div className="h-10 w-20 shrink-0 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
