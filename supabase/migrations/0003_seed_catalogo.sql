-- 0003_seed_catalogo.sql
-- Seed idempotente de categorías y platos (fuente: referencia/info.md)

insert into categories (name, slug, sort_order) values
                                                    ('Aperitivos',         'aperitivos',         1),
                                                    ('Platos Principales', 'platos-principales', 2),
                                                    ('Acompañamientos',    'acompanamientos',    3),
                                                    ('Postres',            'postres',            4)
    on conflict (slug) do nothing;

insert into dishes (category_id, name, description, price)
select c.id, v.name, v.description, v.price
from (values
          -- Aperitivos
          ('aperitivos', 'Chips & Dip', 'Una combinación perfecta de chips crujientes recién hechos y salsas ricas y llenas de sabor.', 16.00),
          ('aperitivos', 'Garlic Fries', 'Papas fritas doradas y crujientes, sazonadas con ajo fresco y hierbas, servidas con una salsa especial.', 26.00),
          ('aperitivos', 'Caprese Salad', 'Ensalada fresca con rodajas de tomate, mozzarella y albahaca, bañada con aceite de oliva y vinagre balsámico.', 12.00),
          ('aperitivos', 'Bruschetta', 'Pan tostado con tomate fresco, albahaca y un toque de ajo, servido con aceite de oliva.', 14.00),
          ('aperitivos', 'Spring Rolls', 'Rollitos rellenos de vegetales frescos y camarones, servidos con una salsa agridulce.', 18.00),
          ('aperitivos', 'Stuffed Mushrooms', 'Champiñones rellenos de queso crema, ajo y hierbas, gratinados al horno.', 20.00),

          -- Platos Principales
          ('platos-principales', 'Thai Curry', 'Curry tailandés cremoso con leche de coco, vegetales frescos y un toque picante, servido con arroz jazmín.', 22.00),
          ('platos-principales', 'Grilled Salmon', 'Salmón a la parrilla con costra de hierbas, acompañado de puré de papas y espárragos.', 30.00),
          ('platos-principales', 'Beef Stroganoff', 'Trozos de carne de res en salsa cremosa de champiñones y mostaza, servidos con pasta.', 28.00),
          ('platos-principales', 'Chicken Parmesan', 'Pechuga de pollo empanizada con queso parmesano, cubierta de salsa marinara y gratinada.', 24.00),
          ('platos-principales', 'Paella de Mariscos', 'Arroz con mariscos frescos, azafrán y especias, preparado al estilo tradicional español.', 32.00),
          ('platos-principales', 'Lamb Chops', 'Costillas de cordero asadas con romero, servidas con vegetales salteados.', 35.00),

          -- Acompañamientos
          ('acompanamientos', 'Kale Salad', 'Ensalada nutritiva con kale fresco, frutos secos y un aderezo especial.', 10.00),
          ('acompanamientos', 'Tortilla Soup', 'Sopa reconfortante con base de tomate y especias, servida con tiras de tortilla crujiente.', 20.00),
          ('acompanamientos', 'Baked Potatoes', 'Papas al horno con mantequilla de ajo y perejil, acompañadas de crema agria.', 12.00),
          ('acompanamientos', 'Coleslaw', 'Ensalada de col rallada con zanahoria y aderezo cremoso.', 8.00),
          ('acompanamientos', 'Steamed Vegetables', 'Verduras al vapor con un toque de mantequilla y sal marina.', 9.00),
          ('acompanamientos', 'Garlic Rice', 'Arroz salteado con ajo y hierbas frescas.', 11.00),

          -- Postres
          ('postres', 'Tiramisú', 'Postre italiano con capas de bizcocho empapado en café y crema de mascarpone.', 15.00),
          ('postres', 'Chocolate Lava Cake', 'Bizcocho de chocolate con un centro fundido de chocolate caliente, acompañado de helado.', 18.00),
          ('postres', 'Cheesecake de Fresas', 'Tarta de queso cremosa con una capa de fresas frescas y base de galleta.', 14.00),
          ('postres', 'Apple Pie', 'Tarta de manzana horneada con canela y servida con helado de vainilla.', 16.00),
          ('postres', 'Crème Brûlée', 'Crema pastelera con una fina capa de caramelo crujiente.', 17.00),
          ('postres', 'Mango Sorbet', 'Sorbete refrescante de mango con un toque de limón.', 12.00)
     ) as v(slug, name, description, price)
         join categories c on c.slug = v.slug
where not exists (select 1 from dishes d where d.name = v.name);
