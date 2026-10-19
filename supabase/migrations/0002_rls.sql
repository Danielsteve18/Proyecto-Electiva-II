-- 0002_rls.sql — ELE-9: políticas RLS del esquema
-- Regla: el público lee catálogo/contenido, el admin escribe, cada usuario ve lo suyo.

-- ===== Funciones auxiliares (security definer: leen profiles sin disparar RLS) =====
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
select exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
);
$$;

create or replace function public.my_role()
returns text language sql stable security definer set search_path = public as $$
select p.role from public.profiles p where p.id = auth.uid();
$$;

-- ===== profiles: cada quien ve y edita lo suyo; admin todo =====
alter table profiles enable row level security;

drop policy if exists "perfil_select" on profiles;
create policy "perfil_select" on profiles for select
                                                       using (id = auth.uid() or public.is_admin());

drop policy if exists "perfil_insert" on profiles;
create policy "perfil_insert" on profiles for insert
  with check (id = auth.uid() and role = 'cliente');

drop policy if exists "perfil_update" on profiles;
create policy "perfil_update" on profiles for update
                                                                   using (id = auth.uid() or public.is_admin())
                                              with check (public.is_admin() or (id = auth.uid() and role = public.my_role()));

drop policy if exists "perfil_delete_admin" on profiles;
create policy "perfil_delete_admin" on profiles for delete
using (public.is_admin());

-- ===== categories =====
alter table categories enable row level security;
drop policy if exists "categorias_lectura_publica" on categories;
create policy "categorias_lectura_publica" on categories for select using (true);
drop policy if exists "categorias_admin_total" on categories;
create policy "categorias_admin_total" on categories for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== dishes =====
alter table dishes enable row level security;
drop policy if exists "platos_lectura_publica" on dishes;
create policy "platos_lectura_publica" on dishes for select using (true);
drop policy if exists "platos_admin_total" on dishes;
create policy "platos_admin_total" on dishes for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== daily_offers =====
alter table daily_offers enable row level security;
drop policy if exists "ofertas_lectura_publica" on daily_offers;
create policy "ofertas_lectura_publica" on daily_offers for select using (true);
drop policy if exists "ofertas_admin_total" on daily_offers;
create policy "ofertas_admin_total" on daily_offers for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== schedule =====
alter table schedule enable row level security;
drop policy if exists "horarios_lectura_publica" on schedule;
create policy "horarios_lectura_publica" on schedule for select using (true);
drop policy if exists "horarios_admin_total" on schedule;
create policy "horarios_admin_total" on schedule for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== posts: el público solo ve los publicados =====
alter table posts enable row level security;
drop policy if exists "posts_lectura" on posts;
create policy "posts_lectura" on posts for select
                                                    using (published or public.is_admin());
drop policy if exists "posts_admin_total" on posts;
create policy "posts_admin_total" on posts for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== testimonials: el público solo ve los aprobados =====
alter table testimonials enable row level security;
drop policy if exists "testimonios_lectura" on testimonials;
create policy "testimonios_lectura" on testimonials for select
                                                                 using (approved or public.is_admin());
drop policy if exists "testimonios_admin_total" on testimonials;
create policy "testimonios_admin_total" on testimonials for all
  using (public.is_admin()) with check (public.is_admin());

-- ===== reservations: autenticado crea, ve y cancela las suyas; admin todo =====
alter table reservations enable row level security;

drop policy if exists "reservas_select" on reservations;
create policy "reservas_select" on reservations for select
                                                             using (user_id = auth.uid() or public.is_admin());

-- El backlog (ELE-30) admite reservas de invitados: user_id null = invitado,
-- autenticada con user_id = auth.uid(). Arquitectura: "reserva con o sin cuenta".
drop policy if exists "reservas_insert" on reservations;
create policy "reservas_insert" on reservations for insert
  with check (user_id is null or user_id = auth.uid());

drop policy if exists "reservas_update_admin" on reservations;
create policy "reservas_update_admin" on reservations for update
                                                                               using (public.is_admin()) with check (public.is_admin());

drop policy if exists "reservas_cancelar_propia" on reservations;
create policy "reservas_cancelar_propia" on reservations for update
                                                                      using (user_id = auth.uid() and status = 'pendiente')
                                                             with check (user_id = auth.uid() and status = 'cancelada');

drop policy if exists "reservas_delete_admin" on reservations;
create policy "reservas_delete_admin" on reservations for delete
using (public.is_admin());

-- ===== contact_messages: autenticado envía; solo admin lee y gestiona =====
alter table contact_messages enable row level security;
drop policy if exists "contacto_insert" on contact_messages;
create policy "contacto_insert" on contact_messages for insert
  with check (auth.uid() is not null);
drop policy if exists "contacto_admin_total" on contact_messages;
create policy "contacto_admin_total" on contact_messages for all
  using (public.is_admin()) with check (public.is_admin());
