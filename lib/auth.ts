import { createClient } from "@/lib/supabase/server";

export async function getPerfil() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, role")
    .eq("id", user.id)
    .maybeSingle();
  return data;
}

export async function isAdmin() {
  const perfil = await getPerfil();
  return perfil?.role === "admin";
}

// Guard: úsalo en la primera línea de cada Server Action de administración
export async function requireAdmin() {
  if (!(await isAdmin())) throw new Error("No autorizado");
}
