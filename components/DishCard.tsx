import Image from 'next/image';

type Dish = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  categories?: { name: string; slug: string } | null;
};

export function DishCard({ dish, oferta }: { dish: Dish; oferta?: number }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
      {/* Contenedor con fallback gris bg-[#aeb0b4] */}
      <div className="relative h-44 w-full bg-[#aeb0b4]">
        {dish.image_url && (
          <Image
            src={dish.image_url}
            alt={dish.name}
            fill
            className="object-cover"
          />
        )}
        {oferta != null && (
          <span className="absolute left-3 top-3 rounded-full bg-[#a6a182] px-3 py-1 text-xs font-bold text-white">
            OFERTA
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-[#1f2120]">{dish.name}</h3>
        <p className="line-clamp-2 text-sm text-gray-600">{dish.description}</p>
        <p className="text-lg font-bold text-[#a6a182]">
          {oferta != null ? (
            <>
              <s className="mr-2 text-sm text-gray-400">
                ${dish.price.toLocaleString('es-CO')}
              </s>
              ${oferta.toLocaleString('es-CO')}
            </>
          ) : (
            `$${dish.price.toLocaleString('es-CO')}`
          )}
        </p>
      </div>
    </article>
  );
}