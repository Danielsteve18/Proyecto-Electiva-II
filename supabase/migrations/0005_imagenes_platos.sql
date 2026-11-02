-- 0005_imagenes_platos.sql · ELE-21
-- Asigna imagen a los 24 platos del seed (0003). Las imágenes viven en
-- public/images/menu/. Idempotente: solo toca platos que aún no tienen imagen.
-- Más adelante (RF-17) el admin podrá reemplazarlas subiendo a Supabase Storage.

update dishes d
set image_url = v.url
from (values
  -- Aperitivos
  ('Chips & Dip',          '/images/menu/aperitivos-1.jpg'),
  ('Garlic Fries',         '/images/menu/aperitivos-2.jpg'),
  ('Caprese Salad',        '/images/menu/aperitivos-3.jpg'),
  ('Bruschetta',           '/images/menu/aperitivos-4.jpg'),
  ('Spring Rolls',         '/images/menu/aperitivos-5.jpg'),
  ('Stuffed Mushrooms',    '/images/menu/aperitivos-6.jpg'),
  -- Platos Principales
  ('Thai Curry',           '/images/menu/main-dishes-1.jpg'),
  ('Grilled Salmon',       '/images/menu/main-dishes-2.jpg'),
  ('Beef Stroganoff',      '/images/menu/main-dishes-3.jpg'),
  ('Chicken Parmesan',     '/images/menu/main-dishes-4.jpg'),
  ('Paella de Mariscos',   '/images/menu/main-dishes-5.jpg'),
  ('Lamb Chops',           '/images/menu/main-dishes-6.jpg'),
  -- Acompañamientos
  ('Kale Salad',           '/images/menu/sides-1.jpg'),
  ('Tortilla Soup',        '/images/menu/sides-2.jpg'),
  ('Baked Potatoes',       '/images/menu/sides-3.jpg'),
  ('Coleslaw',             '/images/menu/sides-4.jpg'),
  ('Steamed Vegetables',   '/images/menu/sides-5.jpg'),
  ('Garlic Rice',          '/images/menu/sides-6.jpg'),
  -- Postres
  ('Tiramisú',             '/images/menu/desserts-1.jpg'),
  ('Chocolate Lava Cake',  '/images/menu/desserts-2.jpg'),
  ('Cheesecake de Fresas', '/images/menu/desserts-3.jpg'),
  ('Apple Pie',            '/images/menu/desserts-4.jpg'),
  ('Crème Brûlée',         '/images/menu/desserts-5.jpg'),
  ('Mango Sorbet',         '/images/menu/desserts-6.jpg')
) as v(name, url)
where d.name = v.name
  and d.image_url is null;
