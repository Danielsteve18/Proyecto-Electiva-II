import { getCategorias, getPlatos } from "@/lib/data/menu";
import { MenuItem } from "@/components/sections/MenuItem";
import { MenuCategorias } from "@/components/sections/MenuCategorias";
import type { Categoria, Plato } from "@/types/menu";

/**
 * Lee categorías y platos de Supabase y los muestra agrupados por categoría.
 * Si la consulta falla lanza un error y Next muestra `app/menu/error.tsx`.
 */
export async function MenuList() {
  const [categoriasData, platosData] = await Promise.all([
    getCategorias(),
    getPlatos(),
  ]);
  const categorias = (categoriasData ?? []) as Categoria[];
  const platos = (platosData ?? []) as unknown as Plato[];

  const secciones = categorias
    .map((categoria) => ({
      categoria,
      platos: platos.filter((p) => p.categories?.slug === categoria.slug),
    }))
    .filter((s) => s.platos.length > 0);

  // Para cada categoría, la foto del primer plato que tenga imagen
  const categoriasConImagen = secciones.map(({ categoria, platos }) => ({
    ...categoria,
    image: platos.find((p) => p.image_url)?.image_url ?? null,
  }));

  if (secciones.length === 0) {
    return (
      <p className="mx-auto max-w-[1200px] px-[15px] py-[100px] text-center text-lg text-[var(--text-color)]">
        Por ahora no hay platos disponibles. ¡Vuelve pronto!
      </p>
    );
  }

  return (
    <>
      <MenuCategorias categorias={categoriasConImagen} />

      {secciones.map(({ categoria, platos }) => (
        <section
          key={categoria.id}
          id={categoria.slug}
          aria-labelledby={`titulo-${categoria.slug}`}
          className="px-[15px] py-[50px] min-[993px]:py-[70px]"
        >
          <div className="mx-auto max-w-[1200px]">
            <span className="flex items-center gap-[10px] text-sm font-extrabold uppercase tracking-[1px] text-[var(--color-primary)] before:block before:h-2 before:w-2 before:rounded-full before:bg-[var(--color-primary)] before:content-['']">
              Menú &amp; precios
            </span>
            <h2
              id={`titulo-${categoria.slug}`}
              className="mb-10 mt-2 text-2xl font-extrabold uppercase tracking-[-1px] text-[var(--color-light)] min-[769px]:text-[34px] min-[993px]:text-[42px]"
            >
              {categoria.name}
            </h2>

            <div className="grid gap-[30px] min-[993px]:grid-cols-2">
              {platos.map((plato) => (
                <MenuItem key={plato.id} dish={plato} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
