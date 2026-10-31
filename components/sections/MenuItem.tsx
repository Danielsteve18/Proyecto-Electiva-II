import Image from "next/image";
import { formatPrice } from "@/lib/format";
import type { Plato } from "@/types/menu";

/*
 * Tarjeta de plato de la página /menu (imagen circular, nombre, descripción
 * y precio en píldora, como en el menu.html original).
 * Es provisional: cuando llegue `DishCard` (ELE-22) se puede reemplazar por ella.
 */
export function MenuItem({ dish }: { dish: Plato }) {
  const src = dish.image_url;

  return (
    <article className="flex items-center gap-5 rounded-[15px] bg-[var(--color-secondary)] p-5 max-[576px]:flex-col max-[576px]:text-center">
      {src ? (
        <Image
          src={src}
          alt=""
          width={110}
          height={110}
          sizes="110px"
          // Las imágenes remotas (Supabase Storage, más adelante) no pasan por
          // el optimizador de Next hasta que se configuren en next.config.ts.
          unoptimized={src.startsWith("http")}
          className="h-[110px] w-[110px] shrink-0 rounded-full object-cover"
        />
      ) : (
        // Plato sin imagen: círculo con ícono, para no dejar un hueco
        <div
          aria-hidden="true"
          className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full bg-[var(--dark-color-divider)] text-[32px] text-[var(--color-primary)]"
        >
          <i className="fa-solid fa-utensils" />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold uppercase text-[var(--color-light)]">
          {dish.name}
        </h3>
        {dish.description && (
          <p className="mt-1 text-[15px] leading-normal text-[var(--text-color)]">
            {dish.description}
          </p>
        )}
      </div>

      <span className="ml-auto whitespace-nowrap rounded-full bg-[var(--color-primary)] px-[18px] py-2 font-bold text-[var(--dark-color-divider)] max-[576px]:ml-0">
        {formatPrice(dish.price)}
      </span>
    </article>
  );
}
