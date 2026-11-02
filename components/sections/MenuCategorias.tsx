import Image from "next/image";
import type { Categoria } from "@/types/menu";

export type CategoriaConImagen = Categoria & { image: string | null };

/**
 * Introducción del menú + círculos de categorías (como en el menu.html original).
 * Cada círculo muestra la foto de un plato de esa categoría y lleva a su sección.
 */
export function MenuCategorias({
  categorias,
}: {
  categorias: CategoriaConImagen[];
}) {
  return (
    <section
      aria-labelledby="menu-especial"
      className="px-[15px] pt-[60px] min-[993px]:pt-[90px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <span className="flex items-center gap-[10px] text-sm font-extrabold uppercase tracking-[1px] text-[var(--color-primary)] before:block before:h-2 before:w-2 before:rounded-full before:bg-[var(--color-primary)] before:content-['']">
          Prueba lo mejor que te sorprenda
        </span>
        <h2
          id="menu-especial"
          className="mt-3 text-[34px] font-extrabold uppercase leading-[1.1] tracking-[-1px] text-[var(--color-light)] min-[993px]:text-[48px]"
        >
          Menú <span className="text-[var(--color-primary)]">especial</span>
        </h2>
        <p className="mt-4 max-w-[760px] text-base leading-normal text-[var(--text-color)] min-[769px]:text-lg">
          Sabores auténticos, ingredientes frescos y una presentación
          impecable. Cada platillo es una obra maestra diseñada para tu
          paladar.
        </p>

        <nav aria-label="Categorías del menú" className="w-full">
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10 min-[769px]:gap-x-12">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <a
                  href={`#${categoria.slug}`}
                  className="group flex w-[130px] flex-col items-center gap-4 no-underline min-[769px]:w-[160px]"
                >
                  <span className="relative block h-[110px] w-[110px] overflow-hidden rounded-full border-2 border-transparent bg-[var(--color-secondary)] transition-colors duration-300 group-hover:border-[var(--color-primary)] min-[769px]:h-[150px] min-[769px]:w-[150px]">
                    {categoria.image ? (
                      <Image
                        src={categoria.image}
                        alt=""
                        fill
                        sizes="(min-width: 769px) 150px, 110px"
                        unoptimized={categoria.image.startsWith("http")}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center text-[32px] text-[var(--color-primary)]"
                      >
                        <i className="fa-solid fa-utensils" />
                      </span>
                    )}
                  </span>
                  <span className="text-base font-medium leading-tight text-[var(--color-light)] transition-colors duration-300 group-hover:text-[var(--color-primary)] min-[769px]:text-lg">
                    {categoria.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
