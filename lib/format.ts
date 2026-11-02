/**
 * Formatea un precio como en info.md: `$16.00`.
 * Está en un solo lugar para que, si el negocio decide mostrar pesos
 * colombianos (p. ej. `$16.000`), se cambie aquí y en toda la web a la vez.
 */
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(value: number): string {
  return formatter.format(value);
}
