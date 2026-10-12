import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase con la llave SECRETA (service role).
 *
 * Salta todas las políticas RLS, así que solo debe usarse en el servidor para
 * operaciones privilegiadas (subir imágenes, aprobar testimonios, gestionar
 * usuarios, etc.). El guard `server-only` impide importarlo desde el cliente.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
