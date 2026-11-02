import Image from "next/image";

/** Banner superior de /menu (equivale al `hero-banner` del sitio original). */
export function MenuHero() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden px-[15px] pb-16 pt-[140px] min-[993px]:min-h-[480px]">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Capa oscura para que el texto se lea sobre la foto */}
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[15px]">
        <span className="flex items-center gap-[10px] text-sm font-extrabold uppercase tracking-[1px] text-[var(--color-primary)] before:block before:h-2 before:w-2 before:rounded-full before:bg-[var(--color-primary)] before:content-['']">
          Nuestro menú
        </span>
        <h1 className="max-w-[900px] text-[34px] font-extrabold uppercase leading-[1.1] tracking-[-1px] text-[var(--color-light)] [text-shadow:1px_1px_1px_rgba(0,0,0,0.3)] min-[993px]:text-[60px]">
          Prueba lo mejor que te{" "}
          <span className="text-[var(--color-primary)]">sorprenda</span>
        </h1>
        <p className="max-w-[640px] text-lg leading-normal text-[var(--text-color)]">
          Descubre nuestro menú especial: cada plato combina sabores auténticos,
          ingredientes frescos y una presentación impecable.
        </p>
      </div>
    </section>
  );
}
