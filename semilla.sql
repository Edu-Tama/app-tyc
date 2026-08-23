-- ============================================================================
-- SEMILLA — App T&C
-- Generado automáticamente desde el modelo validado. No editar a mano:
-- si cambia el recetario, se vuelve a generar.
-- 96 ingredientes · 100 recetas
-- Ejecutar DESPUÉS de schema.sql
-- ============================================================================

insert into households (id, nombre, presupuesto_mensual)
values ('11111111-1111-1111-1111-111111111111', 'Casa T&C', 225.00);

-- ── INGREDIENTES ──────────────────────────────────────────────────────────
insert into ingredients (nombre, categoria, seccion_super, unidad_base, kcal_100,
  proteina_100, carbos_100, grasa_100, fibra_100, ig_orientativo, precio_ref_kg, congelable,
  peso_ud, escalado_def) values
  ('Pan integral', 'despensa', 'Despensa', 'g', 250, 9, 41, 3.5, 7, 55, 2.2, false, null, 'proporcional'),
  ('Pan de centeno', 'despensa', 'Despensa', 'g', 240, 8, 45, 1.7, 8, 50, 3, false, null, 'proporcional'),
  ('Pan del día anterior', 'despensa', 'Despensa', 'g', 270, 8, 52, 3, 3, 70, 1.8, false, null, 'proporcional'),
  ('Tomate maduro', 'verdura', 'Frutería', 'g', 18, 0.9, 3.9, 0.2, 1.2, 30, 1.6, false, null, 'proporcional'),
  ('Tomate', 'verdura', 'Frutería', 'g', 18, 0.9, 3.9, 0.2, 1.2, 30, 1.6, false, null, 'proporcional'),
  ('Tomate triturado', 'despensa', 'Despensa', 'g', 30, 1.3, 5, 0.2, 1.4, 35, 1.2, false, null, 'proporcional'),
  ('Pavo en lonchas', 'proteina', 'Charcutería', 'g', 110, 18, 1.5, 3, 0, 0, 9, false, null, 'proporcional'),
  ('Pavo en tiras', 'proteina', 'Carnicería', 'g', 110, 22, 0, 2, 0, 0, 8.5, false, null, 'proporcional'),
  ('Pavo picado', 'proteina', 'Carnicería', 'g', 120, 21, 0, 4, 0, 0, 8, false, null, 'proporcional'),
  ('Jamón serrano', 'proteina', 'Charcutería', 'g', 240, 30, 0.3, 12, 0, 0, 14, false, null, 'proporcional'),
  ('Aceite de oliva', 'despensa', 'Despensa', 'g', 900, 0, 0, 100, 0, 0, 9, false, null, 'fijo'),
  ('Aceite de oliva virgen', 'despensa', 'Despensa', 'g', 900, 0, 0, 100, 0, 0, 10, false, null, 'fijo'),
  ('Vinagre de Jerez', 'despensa', 'Despensa', 'g', 20, 0, 0.4, 0, 0, 0, 2, false, null, 'fijo'),
  ('Salsa de soja', 'despensa', 'Despensa', 'g', 60, 6, 5, 0, 0, 0, 4, false, null, 'fijo'),
  ('Ajo', 'verdura', 'Frutería', 'g', 149, 6, 33, 0.5, 2.1, 30, 6, false, null, 'fijo'),
  ('Canela', 'despensa', 'Despensa', 'g', 0, 0, 0, 0, 0, 0, 20, false, null, 'fijo'),
  ('Comino', 'despensa', 'Despensa', 'g', 0, 0, 0, 0, 0, 0, 20, false, null, 'fijo'),
  ('Comino y pimentón', 'despensa', 'Despensa', 'g', 0, 0, 0, 0, 0, 0, 20, false, null, 'fijo'),
  ('Pimentón', 'despensa', 'Despensa', 'g', 0, 0, 0, 0, 0, 0, 20, false, null, 'fijo'),
  ('Huevo', 'lacteo', 'Lácteos y huevos', 'ud', 143, 12.6, 0.7, 9.5, 0, 0, 3.2, false, 60, 'unidad'),
  ('Clara de huevo', 'lacteo', 'Lácteos y huevos', 'g', 48, 11, 0.7, 0.2, 0, 0, 3.5, false, null, 'proporcional'),
  ('Champiñones', 'verdura', 'Frutería', 'g', 22, 3, 3.3, 0.3, 1, 15, 3.5, false, null, 'proporcional'),
  ('Queso fresco', 'lacteo', 'Lácteos y huevos', 'g', 100, 12, 3, 5, 0, 0, 6, false, null, 'proporcional'),
  ('Queso fresco batido', 'lacteo', 'Lácteos y huevos', 'g', 45, 8, 4, 0.2, 0, 0, 2.4, false, null, 'proporcional'),
  ('Queso rallado ligero', 'lacteo', 'Lácteos y huevos', 'g', 300, 25, 2, 20, 0, 0, 8, false, null, 'fijo'),
  ('Skyr natural', 'lacteo', 'Lácteos y huevos', 'g', 60, 10, 4, 0.2, 0, 0, 5.5, false, null, 'proporcional'),
  ('Yogur natural', 'lacteo', 'Lácteos y huevos', 'ud', 61, 3.5, 4.7, 3.3, 0, 0, 1.6, false, 125, 'unidad'),
  ('Copos de avena', 'despensa', 'Despensa', 'g', 380, 13, 59, 7, 10, 55, 1.6, false, null, 'proporcional'),
  ('Melocotón', 'verdura', 'Frutería', 'ud', 39, 0.9, 9.5, 0.3, 1.5, 42, 1.9, false, 180, 'unidad'),
  ('Plátano', 'verdura', 'Frutería', 'ud', 89, 1.1, 23, 0.3, 2.6, 51, 1.6, false, 110, 'unidad'),
  ('Pera', 'verdura', 'Frutería', 'ud', 57, 0.4, 15, 0.1, 3.1, 38, 1.8, false, 180, 'unidad'),
  ('Higos frescos', 'verdura', 'Frutería', 'ud', 74, 0.8, 19, 0.3, 2.9, 35, 4.8, false, 55, 'proporcional'),
  ('Sandía', 'verdura', 'Frutería', 'g', 30, 0.6, 7.6, 0.2, 0.4, 72, 0.9, false, null, 'proporcional'),
  ('Uvas', 'verdura', 'Frutería', 'g', 69, 0.7, 17, 0.2, 0.9, 53, 2.1, false, null, 'proporcional'),
  ('Nueces', 'despensa', 'Despensa', 'g', 654, 15, 14, 65, 6.7, 15, 9, false, null, 'proporcional'),
  ('Almendras crudas', 'despensa', 'Despensa', 'g', 579, 21, 22, 50, 12, 15, 11, false, null, 'proporcional'),
  ('Crema de cacahuete', 'despensa', 'Despensa', 'g', 600, 25, 20, 50, 6, 14, 7, false, null, 'proporcional'),
  ('Pepino', 'verdura', 'Frutería', 'g', 15, 0.7, 3.6, 0.1, 0.5, 15, 1.8, false, null, 'proporcional'),
  ('Pimiento verde', 'verdura', 'Frutería', 'g', 20, 1, 4.6, 0.2, 1.7, 15, 2.2, false, null, 'proporcional'),
  ('Pimiento rojo', 'verdura', 'Frutería', 'g', 31, 1, 6, 0.3, 2.1, 15, 2.6, false, null, 'proporcional'),
  ('Pimiento', 'verdura', 'Frutería', 'g', 26, 1, 5, 0.3, 1.9, 15, 2.4, false, null, 'proporcional'),
  ('Cebolla', 'verdura', 'Frutería', 'g', 40, 1.1, 9, 0.1, 1.7, 15, 1.1, false, null, 'proporcional'),
  ('Cebolleta', 'verdura', 'Frutería', 'g', 32, 1.1, 7, 0.2, 2.6, 15, 2, false, null, 'proporcional'),
  ('Berenjena', 'verdura', 'Frutería', 'g', 25, 1, 6, 0.2, 3, 15, 1.8, false, null, 'proporcional'),
  ('Calabacín', 'verdura', 'Frutería', 'g', 17, 1.2, 3.1, 0.3, 1, 15, 1.4, false, null, 'proporcional'),
  ('Patata', 'verdura', 'Frutería', 'g', 77, 2, 17, 0.1, 2.2, 70, 1.2, false, null, 'proporcional'),
  ('Zanahoria', 'verdura', 'Frutería', 'g', 41, 0.9, 9.6, 0.2, 2.8, 35, 1, false, null, 'proporcional'),
  ('Judías verdes congeladas', 'congelado', 'Congelados', 'g', 31, 1.8, 7, 0.2, 3.4, 15, 1.9, true, null, 'proporcional'),
  ('Lentejas pardina', 'despensa', 'Despensa', 'g', 336, 24, 60, 1.1, 11, 29, 2, false, null, 'proporcional'),
  ('Garbanzos de bote', 'despensa', 'Despensa', 'g', 120, 7, 18, 2.6, 5, 28, 1.6, false, null, 'proporcional'),
  ('Alubias de bote', 'despensa', 'Despensa', 'g', 90, 6.5, 15, 0.5, 6, 30, 1.6, false, null, 'proporcional'),
  ('Atún al natural', 'despensa', 'Despensa', 'ud', 100, 23, 0, 1, 0, 0, 9, false, 80, 'unidad'),
  ('Pechuga de pollo', 'proteina', 'Carnicería', 'g', 110, 23, 0, 1.7, 0, 0, 6.5, false, null, 'proporcional'),
  ('Contramuslo de pollo', 'proteina', 'Carnicería', 'g', 170, 19, 0, 10, 0, 0, 4.5, false, null, 'proporcional'),
  ('Ternera picada', 'proteina', 'Carnicería', 'g', 200, 20, 0, 13, 0, 0, 9.5, false, null, 'proporcional'),
  ('Merluza congelada', 'congelado', 'Congelados', 'g', 82, 17, 0, 1.3, 0, 0, 8.5, true, null, 'proporcional'),
  ('Quinoa', 'despensa', 'Despensa', 'g', 368, 14, 64, 6, 7, 53, 5.5, false, null, 'proporcional'),
  ('Frutos rojos congelados', 'congelado', 'Congelados', 'g', 45, 0.9, 8, 0.3, 4, 25, 5, true, null, 'proporcional'),
  ('Harina de avena', 'despensa', 'Despensa', 'g', 380, 13, 60, 7, 10, 45, 3, false, null, 'proporcional'),
  ('Filete de ternera', 'proteina', 'Carnicería', 'g', 130, 21, 0, 5, 0, 0, 12, false, null, 'proporcional'),
  ('Semillas de chía', 'despensa', 'Despensa', 'g', 486, 17, 42, 31, 34, 1, 8, false, null, 'fijo'),
  ('Melón', 'verdura', 'Frutería', 'g', 34, 0.6, 8, 0.2, 0.9, 65, 1.1, false, null, 'proporcional'),
  ('Ciruelas', 'verdura', 'Frutería', 'g', 46, 0.7, 11, 0.3, 1.4, 39, 2.2, false, null, 'proporcional'),
  ('Aguacate', 'verdura', 'Frutería', 'g', 160, 2, 2, 15, 6.7, 15, 5.5, false, null, 'proporcional'),
  ('Requesón', 'lacteo', 'Lácteos y huevos', 'g', 96, 11, 3, 4, 0, 0, 4.5, false, null, 'proporcional'),
  ('Brócoli', 'verdura', 'Frutería', 'g', 34, 2.8, 7, 0.4, 2.6, 15, 2.4, false, null, 'proporcional'),
  ('Calabaza', 'verdura', 'Frutería', 'g', 26, 1, 6.5, 0.1, 1.1, 75, 1.3, false, null, 'proporcional'),
  ('Puerro', 'verdura', 'Frutería', 'g', 61, 1.5, 14, 0.3, 1.8, 30, 1.9, false, null, 'proporcional'),
  ('Boniato', 'verdura', 'Frutería', 'g', 86, 1.6, 20, 0.1, 3, 63, 1.8, false, null, 'proporcional'),
  ('Coles de Bruselas', 'verdura', 'Frutería', 'g', 43, 3.4, 9, 0.3, 3.8, 15, 3.2, false, null, 'proporcional'),
  ('Setas', 'verdura', 'Frutería', 'g', 22, 3.1, 3.3, 0.3, 1, 15, 4.5, false, null, 'proporcional'),
  ('Acelgas', 'verdura', 'Frutería', 'g', 19, 1.8, 3.7, 0.2, 1.6, 15, 1.8, false, null, 'proporcional'),
  ('Coliflor', 'verdura', 'Frutería', 'g', 25, 1.9, 5, 0.3, 2, 15, 1.9, false, null, 'proporcional'),
  ('Espinacas frescas', 'verdura', 'Frutería', 'g', 23, 2.9, 3.6, 0.4, 2.2, 15, 3, false, null, 'proporcional'),
  ('Alcachofa', 'verdura', 'Frutería', 'g', 47, 3.3, 10, 0.2, 5.4, 20, 3.5, false, null, 'proporcional'),
  ('Espárragos trigueros', 'verdura', 'Frutería', 'g', 20, 2.2, 3.9, 0.1, 2.1, 15, 6, false, null, 'proporcional'),
  ('Guisantes', 'congelado', 'Congelados', 'g', 81, 5.4, 14, 0.4, 5.1, 35, 2.2, true, null, 'proporcional'),
  ('Caqui', 'verdura', 'Frutería', 'ud', 70, 0.6, 18, 0.2, 3.6, 50, 2.2, false, 170, 'unidad'),
  ('Granada', 'verdura', 'Frutería', 'g', 83, 1.7, 19, 1.2, 4, 35, 2.8, false, null, 'proporcional'),
  ('Manzana', 'verdura', 'Frutería', 'ud', 52, 0.3, 14, 0.2, 2.4, 36, 1.8, false, 180, 'unidad'),
  ('Naranja', 'verdura', 'Frutería', 'ud', 47, 0.9, 12, 0.1, 2.4, 40, 1.3, false, 200, 'unidad'),
  ('Mandarina', 'verdura', 'Frutería', 'ud', 53, 0.8, 13, 0.3, 1.8, 47, 1.8, false, 90, 'unidad'),
  ('Kiwi', 'verdura', 'Frutería', 'ud', 61, 1.1, 15, 0.5, 3, 50, 2.6, false, 100, 'unidad'),
  ('Fresas', 'verdura', 'Frutería', 'g', 32, 0.7, 7.7, 0.3, 2, 40, 3.5, false, null, 'proporcional'),
  ('Cerezas', 'verdura', 'Frutería', 'g', 63, 1.1, 16, 0.2, 2.1, 22, 6, false, null, 'proporcional'),
  ('Bacalao fresco', 'proteina', 'Pescadería', 'g', 82, 18, 0, 0.7, 0, 0, 12, false, null, 'proporcional'),
  ('Salmón', 'proteina', 'Pescadería', 'g', 208, 20, 0, 13, 0, 0, 14, false, null, 'proporcional'),
  ('Arroz integral', 'despensa', 'Despensa', 'g', 350, 7.5, 72, 2.7, 3.5, 50, 1.8, false, null, 'proporcional'),
  ('Lechuga', 'verdura', 'Frutería', 'g', 15, 1.4, 2.9, 0.2, 1.3, 15, 1.6, false, null, 'proporcional'),
  ('Jamón cocido', 'proteina', 'Charcutería', 'g', 110, 18, 1.5, 3.5, 0, 0, 8, false, null, 'proporcional'),
  ('Lentejas de bote', 'despensa', 'Despensa', 'g', 95, 7, 14, 0.5, 5, 28, 1.8, false, null, 'proporcional'),
  ('Pasta integral', 'despensa', 'Despensa', 'g', 348, 12, 66, 2.5, 8, 45, 1.9, false, null, 'proporcional'),
  ('Café solo', 'despensa', 'Despensa', 'g', 2, 0.1, 0, 0, 0, 0, 12, false, null, 'fijo'),
  ('Leche de avena', 'despensa', 'Despensa', 'g', 45, 0.5, 7, 1.5, 0.8, 60, 1.4, false, null, 'fijo'),
  ('Cerveza', 'despensa', 'Despensa', 'ud', 43, 0.5, 3.6, 0, 0, 0, 1.2, false, 330, 'unidad'),
  ('Aquarius de limón', 'despensa', 'Despensa', 'ud', 24, 0, 6, 0, 0, 0, 1.5, false, 500, 'unidad');

-- ── PRODUCTOS (formato de venta en Mercadona) ─────────────────────────────
insert into products (ingredient_id, nombre_comercial, formato_g, precio_ud)
select i.id, v.nombre, v.formato, round(v.formato * i.precio_ref_kg / 1000.0, 2)
from (values
  ('Pan integral', 500::numeric),
  ('Pan de centeno', 500::numeric),
  ('Pan del día anterior', 500::numeric),
  ('Tomate maduro', 1000::numeric),
  ('Tomate', 1000::numeric),
  ('Tomate triturado', 400::numeric),
  ('Pavo en lonchas', 150::numeric),
  ('Pavo en tiras', 400::numeric),
  ('Pavo picado', 400::numeric),
  ('Jamón serrano', 100::numeric),
  ('Aceite de oliva', 1000::numeric),
  ('Aceite de oliva virgen', 1000::numeric),
  ('Huevo', 720::numeric),
  ('Clara de huevo', 500::numeric),
  ('Champiñones', 250::numeric),
  ('Queso fresco', 250::numeric),
  ('Queso fresco batido', 500::numeric),
  ('Skyr natural', 450::numeric),
  ('Yogur natural', 500::numeric),
  ('Copos de avena', 500::numeric),
  ('Melocotón', 1000::numeric),
  ('Plátano', 1000::numeric),
  ('Pera', 1000::numeric),
  ('Higos frescos', 500::numeric),
  ('Sandía', 3000::numeric),
  ('Uvas', 500::numeric),
  ('Nueces', 200::numeric),
  ('Almendras crudas', 200::numeric),
  ('Crema de cacahuete', 330::numeric),
  ('Pepino', 400::numeric),
  ('Pimiento verde', 500::numeric),
  ('Pimiento rojo', 500::numeric),
  ('Pimiento', 500::numeric),
  ('Cebolla', 1000::numeric),
  ('Cebolleta', 300::numeric),
  ('Berenjena', 500::numeric),
  ('Calabacín', 500::numeric),
  ('Patata', 2000::numeric),
  ('Judías verdes congeladas', 750::numeric),
  ('Lentejas pardina', 500::numeric),
  ('Garbanzos de bote', 400::numeric),
  ('Alubias de bote', 400::numeric),
  ('Atún al natural', 240::numeric),
  ('Pechuga de pollo', 500::numeric),
  ('Contramuslo de pollo', 800::numeric),
  ('Ternera picada', 400::numeric),
  ('Merluza congelada', 400::numeric),
  ('Melón', 2000::numeric),
  ('Ciruelas', 500::numeric),
  ('Aguacate', 400::numeric),
  ('Requesón', 250::numeric),
  ('Brócoli', 500::numeric),
  ('Calabaza', 1000::numeric),
  ('Puerro', 500::numeric),
  ('Boniato', 1000::numeric),
  ('Coles de Bruselas', 500::numeric),
  ('Setas', 250::numeric),
  ('Acelgas', 500::numeric),
  ('Coliflor', 800::numeric),
  ('Espinacas frescas', 300::numeric),
  ('Alcachofa', 500::numeric),
  ('Espárragos trigueros', 250::numeric),
  ('Guisantes', 750::numeric),
  ('Caqui', 1000::numeric),
  ('Granada', 500::numeric),
  ('Manzana', 1000::numeric),
  ('Naranja', 2000::numeric),
  ('Mandarina', 1000::numeric),
  ('Kiwi', 500::numeric),
  ('Fresas', 500::numeric),
  ('Cerezas', 500::numeric),
  ('Lentejas de bote', 400::numeric),
  ('Pasta integral', 500::numeric),
  ('Quinoa', 500::numeric),
  ('Frutos rojos congelados', 400::numeric),
  ('Harina de avena', 500::numeric),
  ('Filete de ternera', 400::numeric),
  ('Semillas de chía', 250::numeric),
  ('Bacalao fresco', 400::numeric),
  ('Salmón', 300::numeric),
  ('Arroz integral', 1000::numeric),
  ('Lechuga', 300::numeric),
  ('Jamón cocido', 200::numeric)
) as v(nombre, formato) join ingredients i on i.nombre = v.nombre;

-- ── RECETAS ──────────────────────────────────────────────────────────────
insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tostada de tomate, aceite y pavo', '{desayuno}', '{sarten}',
   6, 6, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'Tuesta el pan. · Ralla el tomate y extiéndelo con el aceite y una pizca de sal. · Cubre con el pavo.',
   '🍅', 't-verdura', '{"salado","6 minutos"}',
   0, 'tomate de temporada', 'tostada_tomate');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pan integral', 75::numeric, 'g', 'proporcional'),
  ('Tomate maduro', 120::numeric, 'g', 'proporcional'),
  ('Pavo en lonchas', 75::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tostada_tomate') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Revuelto de champiñones y queso fresco', '{desayuno}', '{sarten}',
   8, 8, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Saltea los champiñones 5 min. · Añade los huevos batidos y remueve fuera del fuego. · Desmiga el queso encima y sirve con el pan.',
   '🍳', 't-huevo', '{"salado","alto en proteína"}',
   0, null, 'revuelto_champi');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Champiñones', 100::numeric, 'g', 'proporcional'),
  ('Queso fresco', 50::numeric, 'g', 'proporcional'),
  ('Pan de centeno', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 6::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'revuelto_champi') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Skyr con avena, melocotón y canela', '{desayuno}', '{crudo}',
   5, 5, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'Mezcla el skyr con la avena. · Añade el melocotón en dados y la canela. · En la nevera toda la noche.',
   '🍑', 't-lacteo', '{"dulce","preparable la noche antes"}',
   1, 'melocotón de temporada', 'skyr_melocoton');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Skyr natural', 220::numeric, 'g', 'proporcional'),
  ('Copos de avena', 40::numeric, 'g', 'proporcional'),
  ('Melocotón', 1::numeric, 'ud', 'unidad'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'skyr_melocoton') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortitas de avena y plátano', '{desayuno}', '{sarten}',
   10, 10, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Tritura todo junto. · Cuaja tortitas pequeñas 2 min por cara.',
   '🥞', 't-fruta', '{"dulce","para días de entreno"}',
   1, null, 'tortitas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Plátano', 1::numeric, 'ud', 'unidad'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Clara de huevo', 60::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortitas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Melocotón y nueces', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'Nada que preparar.',
   '🍑', 't-fruta', '{"fruta de agosto"}',
   2, 'melocotón de temporada', 'fruta_nueces');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Melocotón', 1::numeric, 'ud', 'unidad'),
  ('Nueces', 18::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'fruta_nueces') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Higos con queso fresco batido', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{7,8,9}', 'Trocea los higos sobre el queso batido.',
   '🫐', 't-fruta', '{"fruta de agosto","proteína"}',
   1, 'higos de temporada', 'higos_queso');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Higos frescos', 120::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 150::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'higos_queso') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Sandía y almendras', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{6,7,8,9}', 'Cortar y listo.',
   '🍉', 't-fruta', '{"fruta de agosto","hidratante"}',
   2, 'sandía de temporada', 'sandia_almendras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Sandía', 300::numeric, 'g', 'proporcional'),
  ('Almendras crudas', 20::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'sandia_almendras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Uvas y yogur natural', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{8,9,10}', 'Mezclar.',
   '🍇', 't-fruta', '{"fruta de agosto"}',
   1, 'uva de temporada', 'uvas_yogur');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Uvas', 150::numeric, 'g', 'proporcional'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'uvas_yogur') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Plátano con crema de cacahuete', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Untar y comer.',
   '🍌', 't-fruta', '{"pre-entreno"}',
   1, null, 'platano_cacahuete');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Plátano', 1::numeric, 'ud', 'unidad'),
  ('Crema de cacahuete', 18::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'platano_cacahuete') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pera y lonchas de pavo', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Sin preparación.',
   '🍐', 't-fruta', '{"saciante","fácil de llevar"}',
   1, null, 'pera_pavo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pera', 1::numeric, 'ud', 'unidad'),
  ('Pavo en lonchas', 70::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pera_pavo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Melón con jamón', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{6,7,8,9}', 'Cortar el melón y envolverlo con el jamón.',
   '🍈', 't-fruta', '{"fruta de agosto","salado"}',
   1, 'melón de temporada', 'melon_jamon');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Melón', 250::numeric, 'g', 'proporcional'),
  ('Jamón serrano', 40::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'melon_jamon') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ciruelas y almendras', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{7,8,9}', 'Sin preparación.',
   '🫐', 't-fruta', '{"fruta de agosto"}',
   2, 'ciruela de temporada', 'ciruelas_almendras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Ciruelas', 200::numeric, 'g', 'proporcional'),
  ('Almendras crudas', 20::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'ciruelas_almendras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Yogur natural con nueces y canela', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Mezclar.',
   '🥛', 't-lacteo', '{"saciante"}',
   1, null, 'yogur_nueces');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Nueces', 15::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'yogur_nueces') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tomate con requesón y orégano', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'Tomate en rodajas con el requesón encima y un hilo de aceite.',
   '🍅', 't-lacteo', '{"salado","alto en proteína"}',
   1, 'tomate de temporada', 'tomate_requeson');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Requesón', 150::numeric, 'g', 'proporcional'),
  ('Tomate', 100::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 5::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tomate_requeson') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Huevos revueltos con aguacate', '{desayuno}', '{sarten}',
   8, 8, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Revuelve los huevos a fuego suave. · Sirve con el aguacate en láminas sobre el pan tostado.',
   '🥑', 't-huevo', '{"salado","alto en proteína"}',
   0, null, 'huevos_aguacate');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Aguacate', 70::numeric, 'g', 'proporcional'),
  ('Pan integral', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 5::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'huevos_aguacate') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tostada de atún y tomate', '{desayuno}', '{sarten}',
   5, 5, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'Tuesta el pan. · Ralla el tomate encima con el aceite. · Cubre con el atún escurrido.',
   '🐟', 't-pescado', '{"salado","5 minutos"}',
   0, 'tomate de temporada', 'tostada_atun');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pan integral', 70::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Tomate maduro', 100::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tostada_atun') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Gazpacho con pollo a la plancha', '{comida}', '{thermomix,sarten}',
   12, 20, 1, 3, false,
   false, null,
   '{5,6,7,8,9}', 'Tritura tomate, pepino, pimiento y ajo 2 min vel. 10. · Emulsiona con el aceite y el vinagre. · Marca el pollo 4 min por cara. · Enfría el gazpacho 2 h.',
   '🥤', 't-verdura', '{"túper 3 días","el gazpacho aguanta 4 días"}',
   1, 'tomate y pepino de temporada', 'gazpacho_pollo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Tomate maduro', 300::numeric, 'g', 'proporcional'),
  ('Pepino', 60::numeric, 'g', 'proporcional'),
  ('Pimiento verde', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 15::numeric, 'g', 'fijo'),
  ('Vinagre de Jerez', 5::numeric, 'g', 'fijo'),
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Ajo', 3::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'gazpacho_pollo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ensalada templada de lentejas y pimiento', '{comida}', '{olla}',
   12, 35, 1, 3, false,
   true, null,
   '{4,5,6,7,8,9}', 'Cuece las lentejas 25 min y escúrrelas. · Pica el pimiento, la cebolleta y el tomate en crudo. · Mezcla con el aceite y el comino. · Corona con el huevo cocido.',
   '🥗', 't-legumbre', '{"túper 3 días","tanda del domingo","IG bajo"}',
   1, null, 'lentejas_frias');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Lentejas pardina', 85::numeric, 'g', 'proporcional'),
  ('Pimiento rojo', 60::numeric, 'g', 'proporcional'),
  ('Cebolleta', 40::numeric, 'g', 'proporcional'),
  ('Tomate', 80::numeric, 'g', 'proporcional'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Comino', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'lentejas_frias') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pisto de verduras con huevo al horno', '{comida}', '{horno}',
   15, 45, 1, 3, true,
   false, null,
   '{6,7,8,9,10}', 'Pocha la verdura en dados 20 min. · Añade el tomate y cocina 10 min más. · Haz dos huecos, casca los huevos y hornea 8 min a 190°.',
   '🍆', 't-verdura', '{"túper 3 días","congelable"}',
   1, 'berenjena, calabacín y pimiento de temporada', 'pisto_huevo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Berenjena', 150::numeric, 'g', 'proporcional'),
  ('Calabacín', 150::numeric, 'g', 'proporcional'),
  ('Pimiento rojo', 80::numeric, 'g', 'proporcional'),
  ('Cebolla', 60::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 100::numeric, 'g', 'proporcional'),
  ('Patata', 120::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pisto_huevo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Merluza a la airfryer con pisto', '{cena}', '{airfryer}',
   12, 28, 1, 0, false,
   false, 12,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Pisto: pocha la verdura 12 min y añade el tomate. · Merluza a la airfryer 12 min a 180°. · Sirve el lomo sobre el pisto.',
   '🐟', 't-pescado', '{"rápida","cena ligera"}',
   0, null, 'merluza_pisto');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Merluza congelada', 220::numeric, 'g', 'proporcional'),
  ('Patata', 130::numeric, 'g', 'proporcional'),
  ('Calabacín', 100::numeric, 'g', 'proporcional'),
  ('Pimiento', 80::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 80::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'merluza_pisto') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Filete a la plancha con verduras al horno', '{comida}', '{horno}',
   12, 35, 1, 2, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Horno a 200°: patata en rodajas, pimiento y calabacín en tiras, aceite, ajo y pimentón. 30 min. · Los últimos 5 min, filete a la plancha muy fuerte: 2 min por cara y sal al sacarlo. · Deja reposar el filete 3 min antes de cortarlo, o suelta todo el jugo.',
   '🥩', 't-carne', '{"túper 2 días","filete, no picada"}',
   1, 'pimiento y calabacín de temporada', 'filete_plancha_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Filete de ternera', 140::numeric, 'g', 'proporcional'),
  ('Patata', 140::numeric, 'g', 'proporcional'),
  ('Pimiento', 120::numeric, 'g', 'proporcional'),
  ('Calabacín', 100::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'filete_plancha_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Bol de quinoa con pollo y brócoli', '{comida}', '{olla,sarten}',
   12, 30, 1, 3, false,
   true, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Enjuaga la quinoa y cuécela 15 min en el doble de agua. Escurre. · Brócoli al vapor 6 min: que quede firme, si se pasa en el táper llega deshecho. · Pollo en tiras a la sartén fuerte con el ajo; añade el pimiento 3 min. · Mezcla todo con la soja y un chorro de aceite en crudo.',
   '🥗', 't-carne', '{"túper 3 días","tanda del domingo"}',
   1, null, 'quinoa_pollo_brocoli');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Quinoa', 70::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 130::numeric, 'g', 'proporcional'),
  ('Brócoli', 160::numeric, 'g', 'proporcional'),
  ('Pimiento', 80::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Salsa de soja', 8::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'quinoa_pollo_brocoli') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ensalada de quinoa con atún y verduras', '{comida}', '{olla}',
   12, 20, 1, 3, false,
   true, null,
   '{4,5,6,7,8,9,10}', 'Cuece la quinoa 15 min, escúrrela y enfríala bien: en caliente aguada la ensalada. · Pica el tomate, el pepino y la cebolleta en dados pequeños. · Mezcla con el atún escurrido, el aceite y el vinagre.',
   '🥙', 't-pescado', '{"túper 3 días","se come fría","tanda del domingo"}',
   1, null, 'quinoa_atun_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Quinoa', 65::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Tomate', 110::numeric, 'g', 'proporcional'),
  ('Pepino', 80::numeric, 'g', 'proporcional'),
  ('Cebolleta', 30::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 10::numeric, 'g', 'fijo'),
  ('Vinagre de Jerez', 5::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'quinoa_atun_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Brócoli salteado con huevo y jamón', '{cena}', '{sarten}',
   12, 12, 1, 0, false,
   false, 12,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Brócoli al vapor o al microondas 5 min con un dedo de agua. · Sartén fuerte con el ajo y el jamón en tiras; añade el brócoli y saltea 3 min. · Haz un hueco, casca los huevos dentro y remueve hasta que cuajen.',
   '🥦', 't-huevo', '{"lista en 12 min"}',
   0, null, 'brocoli_huevo_jamon');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Brócoli', 220::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Jamón serrano', 35::numeric, 'g', 'proporcional'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Pan de centeno', 40::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'brocoli_huevo_jamon') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Yogur con frutos rojos y chía', '{snack}', '{sarten}',
   3, 3, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Saca los frutos rojos del congelador un rato antes, o al microondas 30 s. · Yogur, frutos rojos, chía y nueces por encima.',
   '🫐', 't-lacteo', '{"3 minutos","para llevar"}',
   1, null, 'yogur_frutos_chia');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Frutos rojos congelados', 100::numeric, 'g', 'proporcional'),
  ('Semillas de chía', 10::numeric, 'g', 'fijo'),
  ('Nueces', 12::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'yogur_frutos_chia') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Avena de la noche anterior con frutos rojos y chía', '{desayuno}', '{sarten}',
   5, 5, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'La noche antes: avena, skyr, bebida de avena y chía al táper. A la nevera. · Pon los frutos rojos encima, aún congelados: se descongelan solos durante la noche. · Se come frío, sin calentar.',
   '🥣', 't-lacteo', '{"dulce","se deja hecho","para llevar"}',
   1, null, 'avena_noche_frutos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Skyr natural', 120::numeric, 'g', 'proporcional'),
  ('Leche de avena', 70::numeric, 'g', 'fijo'),
  ('Frutos rojos congelados', 110::numeric, 'g', 'proporcional'),
  ('Semillas de chía', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'avena_noche_frutos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortitas de harina de avena con frutos rojos', '{desayuno}', '{sarten}',
   12, 12, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Bate los huevos con el yogur y la harina de avena hasta que no queden grumos. · Sartén a fuego medio-bajo con una gota de aceite: tres o cuatro tortitas pequeñas, 2 min por cara. · Frutos rojos calentados 40 s en el microondas por encima, y canela.',
   '🥞', 't-lacteo', '{"dulce","fin de semana"}',
   1, null, 'tortitas_harina_avena');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Harina de avena', 60::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Frutos rojos congelados', 90::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 5::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortitas_harina_avena') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pollo al horno con pimientos y patata', '{comida}', '{horno}',
   12, 50, 1, 3, false,
   true, null,
   '{5,6,7,8,9,10}', 'Horno a 200°. Patata en rodajas finas en la base. · Pollo encima con ajo y pimentón. 30 min. · Añade los pimientos en tiras los últimos 15 min.',
   '🍗', 't-carne', '{"túper 3 días","tanda del domingo"}',
   1, 'pimiento de temporada', 'pollo_pimientos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Contramuslo de pollo', 170::numeric, 'g', 'proporcional'),
  ('Pimiento', 170::numeric, 'g', 'proporcional'),
  ('Patata', 135::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pollo_pimientos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Chili de ternera y alubias', '{comida}', '{olla}',
   15, 40, 1, 3, true,
   true, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Sofríe cebolla y pimiento 8 min. · Añade la carne y dórala. · Especias, tomate y alubias escurridas. 20 min.',
   '🌶', 't-carne', '{"túper 3 días","congelable","tanda del domingo"}',
   1, null, 'chili');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Ternera picada', 150::numeric, 'g', 'proporcional'),
  ('Alubias de bote', 150::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 100::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Pimiento', 50::numeric, 'g', 'proporcional'),
  ('Comino y pimentón', 3::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'chili') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ensalada de garbanzos, pepino y atún', '{comida}', '{crudo}',
   8, 8, 1, 3, false,
   false, 8,
   '{5,6,7,8,9}', 'Escurre y enjuaga los garbanzos. · Pica la verdura en dados. · Mezcla con el atún y aliña.',
   '🫘', 't-legumbre', '{"8 minutos","túper 3 días","sin encender el fuego"}',
   1, 'pepino y tomate de temporada', 'garbanzos_atun');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Garbanzos de bote', 180::numeric, 'g', 'proporcional'),
  ('Pepino', 100::numeric, 'g', 'proporcional'),
  ('Tomate', 100::numeric, 'g', 'proporcional'),
  ('Cebolleta', 30::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'garbanzos_atun') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de calabacín y pollo a la plancha', '{cena}', '{thermomix,sarten}',
   10, 25, 1, 0, true,
   false, 8,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Trocea y cuece 20 min a 100° vel. 1. · Tritura 1 min vel. 8 con el queso batido. · Marca el pollo 4 min por cara. · Sirve la crema con el pollo encima.',
   '🥣', 't-verdura', '{"lista en 8 min","congelable","judías verdes trituradas"}',
   0, null, 'crema_calabacin');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Calabacín', 300::numeric, 'g', 'proporcional'),
  ('Judías verdes congeladas', 100::numeric, 'g', 'proporcional'),
  ('Cebolla', 40::numeric, 'g', 'proporcional'),
  ('Patata', 110::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_calabacin') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Berenjenas rellenas de pavo', '{cena}', '{horno}',
   15, 45, 1, 0, true,
   false, null,
   '{6,7,8,9,10}', 'Hornea las berenjenas partidas 20 min a 200°. · Vacía la pulpa y saltéala con la cebolla y el pavo. · Añade el tomate, rellena y gratina 8 min.',
   '🍆', 't-verdura', '{"congelable"}',
   0, 'berenjena de temporada', 'berenjenas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Berenjena', 250::numeric, 'g', 'proporcional'),
  ('Patata', 90::numeric, 'g', 'proporcional'),
  ('Pavo picado', 160::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 80::numeric, 'g', 'proporcional'),
  ('Queso rallado ligero', 20::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'berenjenas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortilla de calabacín y atún', '{cena}', '{sarten}',
   10, 15, 1, 0, false,
   false, 15,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Saltea el calabacín rallado 5 min. · Bate huevos y claras con el atún escurrido. · Cuaja 4 min por cada lado.',
   '🍳', 't-huevo', '{"15 minutos","cena rápida"}',
   0, null, 'tortilla_calabacin');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Clara de huevo', 80::numeric, 'g', 'proporcional'),
  ('Calabacín', 150::numeric, 'g', 'proporcional'),
  ('Pan integral', 40::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortilla_calabacin') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Salmorejo con huevo y jamón', '{cena}', '{thermomix}',
   10, 12, 1, 3, false,
   false, 5,
   '{5,6,7,8,9}', 'Tritura tomate, pan y ajo 2 min. · Emulsiona con el aceite hasta que espese. · Sirve muy frío con el huevo cocido y el jamón picado.',
   '🍅', 't-verdura', '{"sin fuego","aguanta 3 días"}',
   0, 'tomate de temporada', 'salmorejo_huevo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Tomate maduro', 350::numeric, 'g', 'proporcional'),
  ('Pan del día anterior', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 15::numeric, 'g', 'fijo'),
  ('Ajo', 2::numeric, 'g', 'fijo'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Jamón serrano', 35::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'salmorejo_huevo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Salteado de pavo con verduras de temporada', '{cena}', '{sarten}',
   12, 18, 1, 2, false,
   false, 18,
   '{5,6,7,8,9}', 'Saltea la verdura a fuego fuerte 6 min. · Añade el pavo y dóralo 5 min. · Termina con la soja fuera del fuego.',
   '🥘', 't-carne', '{"18 minutos","túper 2 días"}',
   0, 'calabacín y pimiento de temporada', 'pavo_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pavo en tiras', 170::numeric, 'g', 'proporcional'),
  ('Patata', 140::numeric, 'g', 'proporcional'),
  ('Calabacín', 120::numeric, 'g', 'proporcional'),
  ('Pimiento', 100::numeric, 'g', 'proporcional'),
  ('Cebolleta', 50::numeric, 'g', 'proporcional'),
  ('Salsa de soja', 8::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pavo_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Porridge de avena con manzana y canela', '{desayuno}', '{olla}',
   8, 8, 1, 0, false,
   false, null,
   '{9,10,11,12,1,2}', 'Cuece la avena con la bebida de avena 5 min. · Añade la manzana en dados y la canela. · Termina con las nueces.',
   '🍎', 't-lacteo', '{"dulce","caliente"}',
   1, 'manzana de temporada', 'porridge_manzana');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Leche de avena', 200::numeric, 'g', 'fijo'),
  ('Manzana', 1::numeric, 'ud', 'unidad'),
  ('Canela', 1::numeric, 'g', 'fijo'),
  ('Nueces', 12::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'porridge_manzana') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Revuelto de setas y jamón', '{desayuno}', '{sarten}',
   9, 9, 1, 0, false,
   false, null,
   '{9,10,11,12}', 'Saltea las setas 6 min a fuego fuerte. · Añade el jamón y los huevos batidos. · Sirve con el pan tostado.',
   '🍄', 't-huevo', '{"salado","alto en proteína"}',
   0, 'setas de temporada', 'revuelto_setas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Setas', 120::numeric, 'g', 'proporcional'),
  ('Jamón serrano', 30::numeric, 'g', 'proporcional'),
  ('Pan de centeno', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 6::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'revuelto_setas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de calabaza y puerro con pollo', '{cena}', '{thermomix,sarten}',
   10, 30, 1, 0, true,
   false, 8,
   '{9,10,11,12,1}', 'Cuece calabaza, puerro y patata 20 min. · Tritura con el queso batido. · Marca el pollo y sírvelo encima.',
   '🎃', 't-verdura', '{"congelable","lista en 8 min"}',
   0, 'calabaza de temporada', 'crema_calabaza');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Calabaza', 300::numeric, 'g', 'proporcional'),
  ('Puerro', 80::numeric, 'g', 'proporcional'),
  ('Patata', 80::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_calabaza') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Lentejas con calabaza y zanahoria', '{comida}', '{olla}',
   12, 40, 1, 3, true,
   true, null,
   '{9,10,11,12,1,2}', 'Sofríe cebolla y zanahoria 8 min. · Añade pimentón, tomate y calabaza. · Incorpora las lentejas y cuece 30 min.',
   '🍲', 't-legumbre', '{"túper 3 días","congelable","tanda del domingo","IG bajo"}',
   1, 'calabaza de temporada', 'lentejas_calabaza');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Lentejas pardina', 85::numeric, 'g', 'proporcional'),
  ('Calabaza', 120::numeric, 'g', 'proporcional'),
  ('Zanahoria', 70::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 60::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'lentejas_calabaza') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pollo al horno con boniato y coles', '{comida}', '{horno}',
   12, 50, 1, 3, false,
   true, null,
   '{9,10,11,12,1,2}', 'Horno a 200°. Boniato en rodajas en la base. · Pollo encima con ajo y pimentón, 30 min. · Añade las coles partidas los últimos 15 min.',
   '🍠', 't-carne', '{"túper 3 días","tanda del domingo"}',
   1, 'boniato y coles de temporada', 'pollo_boniato');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Contramuslo de pollo', 170::numeric, 'g', 'proporcional'),
  ('Boniato', 160::numeric, 'g', 'proporcional'),
  ('Coles de Bruselas', 150::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pollo_boniato') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Merluza al horno con puerros y patata', '{cena}', '{horno}',
   12, 35, 1, 0, false,
   false, null,
   '{9,10,11,12,1,2,3}', 'Patata en rodajas al horno 20 min. · Añade el puerro en juliana y la merluza encima. · 15 min más a 190°.',
   '🐟', 't-pescado', '{"ligera"}',
   0, 'puerro de temporada', 'merluza_puerros');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Merluza congelada', 220::numeric, 'g', 'proporcional'),
  ('Puerro', 120::numeric, 'g', 'proporcional'),
  ('Patata', 140::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'merluza_puerros') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Garbanzos con espinacas y huevo', '{comida}', '{sarten}',
   12, 25, 1, 3, false,
   false, null,
   '{9,10,11,12,1,2,3}', 'Dora el ajo, añade las espinacas 4 min. · Incorpora garbanzos, tomate y comino, 8 min. · Corona con el huevo cocido.',
   '🫘', 't-legumbre', '{"túper 3 días","25 minutos","IG bajo"}',
   1, null, 'garbanzos_espinacas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Garbanzos de bote', 180::numeric, 'g', 'proporcional'),
  ('Espinacas frescas', 150::numeric, 'g', 'proporcional'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Tomate triturado', 60::numeric, 'g', 'proporcional'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Comino', 1::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'garbanzos_espinacas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortilla de acelgas y queso', '{cena}', '{sarten}',
   12, 18, 1, 0, false,
   false, 18,
   '{9,10,11,12,1,2,3}', 'Cuece las acelgas 8 min y escúrrelas bien. · Bate huevos y claras con el queso. · Cuaja 4 min por lado.',
   '🍳', 't-huevo', '{"18 minutos","cena rápida"}',
   0, 'acelga de temporada', 'tortilla_acelgas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Clara de huevo', 80::numeric, 'g', 'proporcional'),
  ('Acelgas', 180::numeric, 'g', 'proporcional'),
  ('Queso fresco', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortilla_acelgas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Salteado de pavo con coliflor', '{cena}', '{sarten}',
   12, 20, 1, 2, false,
   false, 20,
   '{9,10,11,12,1,2,3}', 'Saltea la coliflor en floretes pequeños 8 min. · Añade el pavo y dora 5 min. · Termina con la soja.',
   '🥘', 't-carne', '{"20 minutos","túper 2 días"}',
   0, 'coliflor de temporada', 'pavo_coliflor');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pavo en tiras', 170::numeric, 'g', 'proporcional'),
  ('Coliflor', 220::numeric, 'g', 'proporcional'),
  ('Cebolleta', 50::numeric, 'g', 'proporcional'),
  ('Salsa de soja', 8::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pavo_coliflor') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Sopa de pollo y verduras', '{comida}', '{olla}',
   12, 45, 1, 3, true,
   false, null,
   '{10,11,12,1,2,3}', 'Cuece el pollo con la verdura 30 min. · Añade el arroz los últimos 15 min. · Desmenuza el pollo y devuélvelo a la olla.',
   '🍜', 't-carne', '{"túper 3 días","congelable","reconforta"}',
   1, null, 'sopa_pollo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Zanahoria', 80::numeric, 'g', 'proporcional'),
  ('Puerro', 80::numeric, 'g', 'proporcional'),
  ('Patata', 120::numeric, 'g', 'proporcional'),
  ('Arroz integral', 30::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'sopa_pollo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Albóndigas de pavo con tomate', '{comida}', '{olla}',
   18, 40, 1, 3, true,
   true, null,
   '{9,10,11,12,1,2,3,4,5}', 'Mezcla el pavo con el huevo y el pan remojado. · Forma bolas y dóralas. · Cuece 20 min en la salsa de tomate.',
   '🍅', 't-carne', '{"túper 3 días","congelable","tanda del domingo"}',
   1, null, 'albondigas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pavo picado', 170::numeric, 'g', 'proporcional'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Pan integral', 25::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 150::numeric, 'g', 'proporcional'),
  ('Cebolla', 60::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'albondigas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Caqui con yogur y nueces', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{10,11,12}', 'Trocear y mezclar.',
   '🟠', 't-fruta', '{"fruta de otoño"}',
   1, 'caqui de temporada', 'caqui_yogur');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Caqui', 1::numeric, 'ud', 'unidad'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Nueces', 12::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'caqui_yogur') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Manzana con queso fresco', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{9,10,11,12,1,2,3,4}', 'Manzana en gajos con el queso.',
   '🍎', 't-fruta', '{"saciante","alto en proteína"}',
   1, null, 'manzana_queso');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Manzana', 1::numeric, 'ud', 'unidad'),
  ('Queso fresco', 120::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'manzana_queso') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Granada con skyr', '{snack}', '{crudo}',
   3, 3, 1, 0, false,
   false, null,
   '{10,11,12}', 'Desgranar y mezclar.',
   '🔴', 't-fruta', '{"fruta de otoño","alto en proteína"}',
   1, 'granada de temporada', 'granada_skyr');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Granada', 120::numeric, 'g', 'proporcional'),
  ('Skyr natural', 150::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'granada_skyr') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Cocido ligero de garbanzos y verduras', '{comida}', '{olla}',
   15, 60, 1, 3, true,
   true, null,
   '{12,1,2,3}', 'Cuece el pollo con la verdura 40 min. · Añade los garbanzos escurridos 10 min. · Sirve con el jamón picado por encima.',
   '🍲', 't-legumbre', '{"túper 3 días","congelable","tanda del domingo"}',
   1, null, 'cocido_ligero');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Garbanzos de bote', 180::numeric, 'g', 'proporcional'),
  ('Zanahoria', 80::numeric, 'g', 'proporcional'),
  ('Puerro', 70::numeric, 'g', 'proporcional'),
  ('Patata', 110::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 130::numeric, 'g', 'proporcional'),
  ('Jamón serrano', 20::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'cocido_ligero') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Guiso de ternera con verduras', '{comida}', '{olla}',
   18, 75, 1, 3, true,
   false, null,
   '{11,12,1,2,3}', 'Dora la carne y reserva. · Pocha la verdura 10 min y añade el tomate. · Devuelve la carne, cubre con agua y cuece 45 min.',
   '🥩', 't-carne', '{"túper 3 días","congelable","mejor al día siguiente"}',
   1, null, 'guiso_ternera');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Ternera picada', 150::numeric, 'g', 'proporcional'),
  ('Zanahoria', 90::numeric, 'g', 'proporcional'),
  ('Cebolla', 70::numeric, 'g', 'proporcional'),
  ('Patata', 130::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 80::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'guiso_ternera') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Bacalao al horno con verduras', '{cena}', '{horno}',
   12, 35, 1, 0, false,
   false, null,
   '{11,12,1,2,3,4}', 'Patata y verdura al horno 20 min a 200°. · Coloca el bacalao encima. · 12 min más a 180°.',
   '🐟', 't-pescado', '{"ligera","alto en proteína"}',
   0, null, 'bacalao_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Bacalao fresco', 200::numeric, 'g', 'proporcional'),
  ('Puerro', 100::numeric, 'g', 'proporcional'),
  ('Pimiento', 100::numeric, 'g', 'proporcional'),
  ('Patata', 130::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'bacalao_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de puerro y patata con huevo', '{cena}', '{thermomix}',
   10, 30, 1, 0, true,
   false, 8,
   '{11,12,1,2,3}', 'Cuece puerro, patata y cebolla 20 min. · Tritura con el queso batido. · Sirve con los huevos cocidos partidos.',
   '🥣', 't-verdura', '{"congelable","lista en 8 min"}',
   0, 'puerro de temporada', 'crema_puerro');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Puerro', 200::numeric, 'g', 'proporcional'),
  ('Patata', 130::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_puerro') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Alcachofas salteadas con jamón y huevo', '{cena}', '{sarten}',
   15, 25, 1, 0, false,
   false, null,
   '{11,12,1,2,3,4}', 'Limpia y saltea las alcachofas 12 min. · Añade el jamón 2 min. · Termina con los huevos revueltos por encima.',
   '🌿', 't-verdura', '{"25 minutos"}',
   0, 'alcachofa de temporada', 'alcachofas_jamon');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Alcachofa', 250::numeric, 'g', 'proporcional'),
  ('Jamón serrano', 40::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'alcachofas_jamon') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Salmón al horno con brócoli', '{cena}', '{horno}',
   10, 28, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Patata al horno 18 min. · Añade salmón y brócoli. · 10 min más a 190°.',
   '🐟', 't-pescado', '{"omega 3","ligera"}',
   0, null, 'salmon_brocoli');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Salmón', 150::numeric, 'g', 'proporcional'),
  ('Brócoli', 200::numeric, 'g', 'proporcional'),
  ('Patata', 110::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 8::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'salmon_brocoli') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Avena con naranja y canela', '{desayuno}', '{crudo}',
   5, 5, 1, 0, false,
   false, null,
   '{12,1,2,3,4}', 'Mezcla el skyr con la avena. · Añade la naranja en gajos y la canela.',
   '🍊', 't-lacteo', '{"dulce","preparable la noche antes"}',
   1, 'naranja de temporada', 'avena_naranja');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Skyr natural', 220::numeric, 'g', 'proporcional'),
  ('Copos de avena', 45::numeric, 'g', 'proporcional'),
  ('Naranja', 1::numeric, 'ud', 'unidad'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'avena_naranja') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Naranja y almendras', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{12,1,2,3,4}', 'Pelar y comer.',
   '🍊', 't-fruta', '{"fruta de invierno"}',
   2, 'naranja de temporada', 'naranja_almendras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Naranja', 1::numeric, 'ud', 'unidad'),
  ('Almendras crudas', 22::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'naranja_almendras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Mandarinas con queso fresco', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{11,12,1,2,3}', 'Sin preparación.',
   '🍊', 't-fruta', '{"fruta de invierno","proteína"}',
   1, 'mandarina de temporada', 'mandarinas_queso');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Mandarina', 3::numeric, 'ud', 'unidad'),
  ('Queso fresco', 100::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'mandarinas_queso') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Kiwi con yogur natural', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{11,12,1,2,3,4,5}', 'Trocear y mezclar.',
   '🥝', 't-fruta', '{"fibra","digestivo"}',
   1, null, 'kiwi_yogur');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Kiwi', 2::numeric, 'ud', 'unidad'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'kiwi_yogur') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Espárragos trigueros con huevo', '{cena}', '{sarten}',
   12, 18, 1, 0, false,
   false, 18,
   '{3,4,5,6}', 'Saltea los espárragos 8 min. · Añade el jamón y los huevos. · Sirve con el pan tostado.',
   '🌱', 't-verdura', '{"18 minutos","ligera"}',
   0, 'espárrago de temporada', 'esparragos_huevo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Espárragos trigueros', 250::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Jamón serrano', 30::numeric, 'g', 'proporcional'),
  ('Pan integral', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'esparragos_huevo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Guisantes con jamón y huevo', '{comida}', '{sarten}',
   12, 25, 1, 2, false,
   false, null,
   '{3,4,5,6}', 'Pocha la cebolleta y añade la patata en dados. · Incorpora los guisantes y cuece 12 min. · Añade el jamón y el huevo cocido.',
   '🟢', 't-legumbre', '{"túper 2 días","IG bajo"}',
   1, 'guisante de temporada', 'guisantes_jamon');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Guisantes', 220::numeric, 'g', 'proporcional'),
  ('Jamón cocido', 70::numeric, 'g', 'proporcional'),
  ('Cebolleta', 50::numeric, 'g', 'proporcional'),
  ('Huevo', 1::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo'),
  ('Patata', 100::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'guisantes_jamon') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ensalada de pollo, espinacas y fresas', '{comida}', '{sarten}',
   12, 20, 1, 2, false,
   false, 12,
   '{3,4,5,6}', 'Marca el pollo y córtalo en tiras. · Mezcla espinacas, fresas y nueces. · Aliña y añade el pollo templado.',
   '🍓', 't-carne', '{"túper 2 días","fresca"}',
   1, 'fresa de temporada', 'ensalada_pollo_fresas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Espinacas frescas', 100::numeric, 'g', 'proporcional'),
  ('Fresas', 120::numeric, 'g', 'proporcional'),
  ('Nueces', 15::numeric, 'g', 'proporcional'),
  ('Pan integral', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'ensalada_pollo_fresas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Merluza con espárragos y patata', '{cena}', '{horno}',
   12, 30, 1, 0, false,
   false, null,
   '{3,4,5,6}', 'Patata al horno 20 min. · Añade espárragos y merluza. · 12 min más a 190°.',
   '🐟', 't-pescado', '{"ligera"}',
   0, 'espárrago de temporada', 'merluza_esparragos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Merluza congelada', 220::numeric, 'g', 'proporcional'),
  ('Espárragos trigueros', 180::numeric, 'g', 'proporcional'),
  ('Patata', 130::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'merluza_esparragos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortilla de espárragos trigueros', '{cena}', '{sarten}',
   12, 18, 1, 0, false,
   false, 18,
   '{3,4,5,6}', 'Saltea los espárragos troceados 8 min. · Bate huevos y claras. · Cuaja 4 min por lado con el queso.',
   '🍳', 't-huevo', '{"18 minutos"}',
   0, 'espárrago de temporada', 'tortilla_esparragos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Clara de huevo', 80::numeric, 'g', 'proporcional'),
  ('Espárragos trigueros', 200::numeric, 'g', 'proporcional'),
  ('Queso fresco', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 8::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortilla_esparragos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Arroz integral con pollo y verduras', '{comida}', '{olla}',
   12, 40, 1, 3, false,
   true, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Sofríe la verdura 8 min. · Añade el pollo en dados y dora. · Incorpora el arroz y agua, 30 min.',
   '🍚', 't-carne', '{"túper 3 días","tanda del domingo"}',
   1, null, 'arroz_pollo_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Arroz integral', 70::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 160::numeric, 'g', 'proporcional'),
  ('Pimiento', 80::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Guisantes', 60::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'arroz_pollo_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Fresas con skyr', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{3,4,5,6}', 'Trocear y mezclar.',
   '🍓', 't-fruta', '{"fruta de primavera","alto en proteína"}',
   1, 'fresa de temporada', 'fresas_skyr');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Fresas', 200::numeric, 'g', 'proporcional'),
  ('Skyr natural', 150::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'fresas_skyr') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Cerezas y almendras', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{5,6,7}', 'Sin preparación.',
   '🍒', 't-fruta', '{"fruta de primavera"}',
   2, 'cereza de temporada', 'cerezas_almendras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Cerezas', 180::numeric, 'g', 'proporcional'),
  ('Almendras crudas', 20::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'cerezas_almendras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Lentejas de bote con verduras y atún', '{comida}', '{crudo}',
   10, 10, 1, 3, false,
   false, 10,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Enjuaga y escurre las lentejas. · Pica la verdura en dados pequeños. · Mezcla con el atún, el aceite y el comino.',
   '🥗', 't-legumbre', '{"10 minutos","túper 3 días","sin encender el fuego","IG bajo"}',
   1, null, 'lentejas_bote_atun');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Lentejas de bote', 220::numeric, 'g', 'proporcional'),
  ('Tomate', 100::numeric, 'g', 'proporcional'),
  ('Cebolleta', 40::numeric, 'g', 'proporcional'),
  ('Pimiento', 60::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo'),
  ('Comino', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'lentejas_bote_atun') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pollo a la plancha con verduras salteadas', '{comida}', '{sarten}',
   18, 18, 1, 2, false,
   false, 18,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Saltea la verdura en dados 10 min. · Marca el pollo 4 min por cara. · Junta todo un minuto y reparte en tápers.',
   '🍗', 't-carne', '{"18 minutos","túper 2 días","alto en proteína"}',
   1, null, 'pollo_plancha_verduras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pechuga de pollo', 180::numeric, 'g', 'proporcional'),
  ('Calabacín', 120::numeric, 'g', 'proporcional'),
  ('Pimiento', 100::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Patata', 120::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pollo_plancha_verduras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pasta integral con atún y tomate', '{comida}', '{olla}',
   20, 20, 1, 2, false,
   false, 20,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Cuece la pasta 12 min. · Sofríe cebolla y ajo, añade el tomate 6 min. · Mezcla con el atún escurrido y la pasta.',
   '🍝', 't-pescado', '{"20 minutos","túper 2 días"}',
   1, null, 'pasta_atun_tomate');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pasta integral', 70::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 150::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo'),
  ('Ajo', 4::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pasta_atun_tomate') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ensalada de pollo, aguacate y lechuga', '{comida}', '{sarten}',
   15, 15, 1, 2, false,
   false, 15,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Marca el pollo y córtalo en tiras. · Mezcla lechuga, tomate y aguacate. · Aliña y sirve con el pan tostado.',
   '🥗', 't-carne', '{"15 minutos","túper 2 días"}',
   1, null, 'ensalada_lechuga_pollo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pechuga de pollo', 170::numeric, 'g', 'proporcional'),
  ('Lechuga', 120::numeric, 'g', 'proporcional'),
  ('Aguacate', 60::numeric, 'g', 'proporcional'),
  ('Tomate', 100::numeric, 'g', 'proporcional'),
  ('Pan integral', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'ensalada_lechuga_pollo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de champiñones y puerro con pollo', '{cena}', '{thermomix,sarten}',
   12, 28, 1, 0, true,
   false, 8,
   '{1,2,3,4,9,10,11,12}', 'Saltea champiñones y setas 8 min. · Cuece con puerro y patata 15 min y tritura con el queso. · Marca el pollo y sírvelo encima.',
   '🍄', 't-verdura', '{"congelable","lista en 8 min"}',
   0, null, 'crema_champi');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Champiñones', 250::numeric, 'g', 'proporcional'),
  ('Setas', 100::numeric, 'g', 'proporcional'),
  ('Puerro', 80::numeric, 'g', 'proporcional'),
  ('Patata', 90::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 160::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_champi') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pasta integral con pollo y brócoli', '{comida}', '{olla}',
   20, 22, 1, 2, false,
   false, 22,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Cuece la pasta y el brócoli juntos los últimos 5 min. · Saltea el pollo con el ajo. · Mezcla todo con el queso rallado.',
   '🍝', 't-carne', '{"22 minutos","túper 2 días"}',
   1, null, 'pasta_pollo_brocoli');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pasta integral', 65::numeric, 'g', 'proporcional'),
  ('Pechuga de pollo', 160::numeric, 'g', 'proporcional'),
  ('Brócoli', 150::numeric, 'g', 'proporcional'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Aceite de oliva virgen', 12::numeric, 'g', 'fijo'),
  ('Queso rallado ligero', 15::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pasta_pollo_brocoli') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de brócoli con huevo', '{cena}', '{thermomix}',
   10, 25, 1, 0, true,
   false, 8,
   '{1,2,3,4,10,11,12}', 'Cuece brócoli, patata y puerro 18 min. · Tritura con el queso batido. · Sirve con los huevos cocidos partidos.',
   '🥦', 't-verdura', '{"congelable","lista en 8 min"}',
   0, null, 'crema_brocoli');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Brócoli', 280::numeric, 'g', 'proporcional'),
  ('Patata', 110::numeric, 'g', 'proporcional'),
  ('Puerro', 60::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_brocoli') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Lentejas de bote con salmón y verduras', '{comida}', '{sarten}',
   15, 18, 1, 2, false,
   false, 18,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Marca el salmón 3 min por cara y desmígalo. · Saltea la verdura 6 min. · Mezcla con las lentejas escurridas.',
   '🐟', 't-pescado', '{"18 minutos","túper 2 días","omega 3"}',
   1, null, 'salmon_lentejas');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Lentejas de bote', 200::numeric, 'g', 'proporcional'),
  ('Salmón', 120::numeric, 'g', 'proporcional'),
  ('Cebolleta', 40::numeric, 'g', 'proporcional'),
  ('Pimiento', 70::numeric, 'g', 'proporcional'),
  ('Aceite de oliva virgen', 10::numeric, 'g', 'fijo'),
  ('Comino', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'salmon_lentejas') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Garbanzos con bacalao y espinacas', '{comida}', '{olla}',
   15, 30, 1, 3, true,
   true, null,
   '{1,2,3,4,11,12}', 'Sofríe el ajo con el pimentón y el tomate. · Añade garbanzos y espinacas, 8 min. · Incorpora el bacalao en tacos 5 min más.',
   '🐟', 't-pescado', '{"túper 3 días","congelable","tanda del domingo"}',
   1, null, 'bacalao_garbanzos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Garbanzos de bote', 170::numeric, 'g', 'proporcional'),
  ('Bacalao fresco', 150::numeric, 'g', 'proporcional'),
  ('Espinacas frescas', 120::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 80::numeric, 'g', 'proporcional'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'bacalao_garbanzos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Coliflor al horno con pavo y queso', '{cena}', '{horno}',
   12, 40, 1, 2, true,
   false, null,
   '{1,2,3,4,10,11,12}', 'Asa la coliflor en floretes 20 min a 200°. · Saltea el pavo con la cebolla y el tomate. · Junta, cubre con el queso y gratina 8 min.',
   '🧀', 't-carne', '{"congelable","túper 2 días"}',
   0, null, 'coliflor_pavo_horno');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Coliflor', 280::numeric, 'g', 'proporcional'),
  ('Pavo picado', 150::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 90::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Queso rallado ligero', 20::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'coliflor_pavo_horno') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Boniato relleno de atún y queso', '{comida}', '{horno}',
   10, 45, 1, 3, false,
   false, null,
   '{9,10,11,12,1,2}', 'Asa el boniato entero 40 min a 200°. · Ábrelo y mezcla la pulpa con el atún y la cebolleta. · Rellena y gratina 5 min con el queso.',
   '🍠', 't-pescado', '{"túper 3 días","se come frío o caliente"}',
   1, null, 'boniato_relleno');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Boniato', 260::numeric, 'g', 'proporcional'),
  ('Atún al natural', 1::numeric, 'ud', 'unidad'),
  ('Cebolleta', 40::numeric, 'g', 'proporcional'),
  ('Queso rallado ligero', 20::numeric, 'g', 'fijo'),
  ('Aceite de oliva virgen', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'boniato_relleno') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Coles de Bruselas con jamón cocido y huevo', '{cena}', '{sarten}',
   15, 22, 1, 0, false,
   false, 22,
   '{10,11,12,1,2,3}', 'Cuece las coles 8 min y saltéalas con el ajo. · Añade el jamón en dados. · Termina con los huevos revueltos por encima.',
   '🥬', 't-verdura', '{"22 minutos"}',
   0, null, 'coles_jamon_huevo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Coles de Bruselas', 250::numeric, 'g', 'proporcional'),
  ('Jamón cocido', 70::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Ajo', 5::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'coles_jamon_huevo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Acelgas con garbanzos', '{comida}', '{sarten}',
   12, 25, 1, 3, false,
   false, 25,
   '{10,11,12,1,2,3,4}', 'Cuece las acelgas 8 min y escúrrelas. · Dora el ajo con el pimentón. · Añade acelgas y garbanzos, 6 min. Corona con el huevo.',
   '🌿', 't-legumbre', '{"túper 3 días","IG bajo","25 minutos"}',
   1, null, 'acelgas_garbanzos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Acelgas', 250::numeric, 'g', 'proporcional'),
  ('Garbanzos de bote', 170::numeric, 'g', 'proporcional'),
  ('Ajo', 6::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo'),
  ('Huevo', 1::numeric, 'ud', 'unidad')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'acelgas_garbanzos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Alcachofas al horno con pollo', '{comida}', '{horno}',
   15, 45, 1, 2, false,
   true, null,
   '{11,12,1,2,3,4}', 'Limpia las alcachofas y pártelas por la mitad. · Todo a la bandeja con ajo y pimentón. · 40 min a 200°, dándole la vuelta a mitad.',
   '🌿', 't-carne', '{"túper 2 días","tanda del domingo"}',
   1, null, 'alcachofas_pollo_horno');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Alcachofa', 220::numeric, 'g', 'proporcional'),
  ('Contramuslo de pollo', 160::numeric, 'g', 'proporcional'),
  ('Patata', 120::numeric, 'g', 'proporcional'),
  ('Ajo', 6::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo'),
  ('Pimentón', 2::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'alcachofas_pollo_horno') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Pisto con alubias', '{comida}', '{olla}',
   15, 35, 1, 3, true,
   true, null,
   '{6,7,8,9,10}', 'Pocha la verdura en dados 18 min. · Añade el tomate y cocina 8 min. · Incorpora las alubias escurridas 5 min.',
   '🫘', 't-legumbre', '{"túper 3 días","congelable","tanda del domingo","IG bajo"}',
   1, null, 'pisto_alubias');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Alubias de bote', 180::numeric, 'g', 'proporcional'),
  ('Calabacín', 120::numeric, 'g', 'proporcional'),
  ('Berenjena', 110::numeric, 'g', 'proporcional'),
  ('Pimiento', 90::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 110::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'pisto_alubias') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tortilla de pimientos', '{cena}', '{sarten}',
   12, 18, 1, 0, false,
   false, 18,
   '{5,6,7,8,9,10}', 'Pocha los pimientos con la cebolla 12 min. · Bate huevos y claras. · Cuaja 4 min por lado.',
   '🫑', 't-huevo', '{"18 minutos"}',
   0, 'pimiento de temporada', 'tortilla_pimientos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Clara de huevo', 80::numeric, 'g', 'proporcional'),
  ('Pimiento rojo', 100::numeric, 'g', 'proporcional'),
  ('Pimiento verde', 80::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tortilla_pimientos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Crema de judías verdes y patata con pavo', '{cena}', '{thermomix,sarten}',
   10, 28, 1, 0, true,
   false, 8,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Cuece las judías con la patata y la cebolla 20 min. · Tritura con el queso batido. · Marca el pavo y sírvelo encima.',
   '🥣', 't-verdura', '{"congelable","lista en 8 min","judías verdes trituradas"}',
   0, null, 'crema_judias');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Judías verdes congeladas', 260::numeric, 'g', 'proporcional'),
  ('Patata', 110::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Queso fresco batido', 60::numeric, 'g', 'proporcional'),
  ('Pavo en tiras', 160::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'crema_judias') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Sopa de ajo con huevo', '{cena}', '{olla}',
   12, 20, 1, 0, false,
   false, 20,
   '{11,12,1,2,3}', 'Dora el ajo en láminas y añade el pimentón fuera del fuego. · Añade el pan y el agua, 10 min. · Casca los huevos dentro y cuaja 3 min.',
   '🍜', 't-huevo', '{"20 minutos","aprovecha el pan del día anterior"}',
   0, null, 'sopa_ajo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pan del día anterior', 70::numeric, 'g', 'proporcional'),
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Jamón serrano', 30::numeric, 'g', 'proporcional'),
  ('Ajo', 8::numeric, 'g', 'fijo'),
  ('Pimentón', 3::numeric, 'g', 'fijo'),
  ('Aceite de oliva', 12::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'sopa_ajo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Porridge de avena con pera y nueces', '{desayuno}', '{olla}',
   8, 8, 1, 0, false,
   false, null,
   '{9,10,11,12,1,2,3}', 'Cuece la avena con la bebida de avena 5 min. · Añade la pera en dados. · Termina con las nueces y la canela.',
   '🍐', 't-lacteo', '{"dulce","caliente"}',
   1, null, 'porridge_pera');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Leche de avena', 200::numeric, 'g', 'fijo'),
  ('Pera', 1::numeric, 'ud', 'unidad'),
  ('Nueces', 12::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'porridge_pera') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Avena de la noche anterior con plátano y cacahuete', '{desayuno}', '{sarten}',
   5, 5, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'La noche antes: mezcla la avena, el yogur y la bebida de avena en el táper. · A la nevera hasta la mañana siguiente. · Por la mañana añade el plátano en rodajas y la crema de cacahuete. · Se come frío: no hace falta microondas.',
   '🥣', 't-lacteo', '{"dulce","se deja hecho","para llevar"}',
   1, null, 'avena_noche_platano');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Leche de avena', 80::numeric, 'g', 'fijo'),
  ('Plátano', 1::numeric, 'ud', 'unidad'),
  ('Crema de cacahuete', 15::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'avena_noche_platano') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Avena de la noche anterior con melocotón y almendras', '{desayuno}', '{sarten}',
   5, 5, 1, 0, false,
   false, null,
   '{5,6,7,8,9}', 'La noche antes: avena, skyr y bebida de avena al táper, a la nevera. · Por la mañana corta el melocotón encima y añade las almendras. · Se come frío, con cuchara y sin calentar.',
   '🍑', 't-lacteo', '{"dulce","se deja hecho","para llevar"}',
   1, null, 'avena_noche_melocoton');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Copos de avena', 55::numeric, 'g', 'proporcional'),
  ('Skyr natural', 125::numeric, 'g', 'proporcional'),
  ('Leche de avena', 70::numeric, 'g', 'fijo'),
  ('Melocotón', 1::numeric, 'ud', 'unidad'),
  ('Almendras crudas', 15::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'avena_noche_melocoton') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Bol de skyr con higos y nueces', '{desayuno}', '{sarten}',
   4, 4, 1, 0, false,
   false, null,
   '{7,8,9,10}', 'Skyr al táper con los copos de avena. · Encima los higos partidos y las nueces. · Canela por encima.',
   '🫐', 't-lacteo', '{"dulce","4 minutos","para llevar"}',
   1, null, 'bol_skyr_higos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Skyr natural', 180::numeric, 'g', 'proporcional'),
  ('Higos frescos', 2::numeric, 'ud', 'unidad'),
  ('Nueces', 15::numeric, 'g', 'proporcional'),
  ('Copos de avena', 30::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'bol_skyr_higos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Batido de plátano y cacahuete', '{snack}', '{thermomix}',
   3, 3, 1, 0, false,
   false, null,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Todo a la batidora 30 segundos.',
   '🥤', 't-lacteo', '{"pre-entreno","3 minutos"}',
   1, null, 'batido_platano');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Leche de avena', 200::numeric, 'g', 'fijo'),
  ('Plátano', 1::numeric, 'ud', 'unidad'),
  ('Crema de cacahuete', 15::numeric, 'g', 'proporcional'),
  ('Canela', 1::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'batido_platano') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Macedonia de sandía, melón y uvas', '{snack}', '{crudo}',
   4, 4, 1, 0, false,
   false, null,
   '{6,7,8,9}', 'Trocear y mezclar. Mejor muy fría.',
   '🍉', 't-fruta', '{"fruta de verano","muy hidratante"}',
   1, 'fruta de verano', 'macedonia_verano');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Sandía', 180::numeric, 'g', 'proporcional'),
  ('Melón', 150::numeric, 'g', 'proporcional'),
  ('Uvas', 80::numeric, 'g', 'proporcional'),
  ('Almendras crudas', 15::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'macedonia_verano') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Melón con pavo', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{6,7,8,9}', 'Cortar y envolver.',
   '🍈', 't-fruta', '{"fruta de verano","proteína"}',
   1, 'melón de temporada', 'melon_pavo');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Melón', 220::numeric, 'g', 'proporcional'),
  ('Pavo en lonchas', 70::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'melon_pavo') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Granada y kiwi con queso batido', '{snack}', '{crudo}',
   4, 4, 1, 0, false,
   false, null,
   '{10,11,12,1,2}', 'Desgranar, trocear y mezclar.',
   '🥝', 't-fruta', '{"fruta de invierno","alto en proteína","fibra"}',
   1, 'granada y kiwi de temporada', 'granada_kiwi_queso');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Granada', 90::numeric, 'g', 'proporcional'),
  ('Kiwi', 1::numeric, 'ud', 'unidad'),
  ('Queso fresco batido', 150::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'granada_kiwi_queso') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Mandarinas y almendras', '{snack}', '{crudo}',
   1, 1, 1, 0, false,
   false, null,
   '{11,12,1,2,3}', 'Pelar y comer.',
   '🍊', 't-fruta', '{"fruta de invierno"}',
   2, 'mandarina de temporada', 'mandarina_almendras');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Mandarina', 3::numeric, 'ud', 'unidad'),
  ('Almendras crudas', 20::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'mandarina_almendras') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Compota de manzana y pera con canela', '{snack}', '{olla}',
   5, 20, 1, 0, false,
   false, null,
   '{9,10,11,12,1,2,3}', 'Cuece la fruta troceada 15 min con la canela. · Tritura ligeramente y sirve con el yogur.',
   '🍎', 't-fruta', '{"sin azúcar añadido","aguanta 4 días"}',
   1, null, 'compota_manzana_pera');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Manzana', 1::numeric, 'ud', 'unidad'),
  ('Pera', 1::numeric, 'ud', 'unidad'),
  ('Canela', 2::numeric, 'g', 'fijo'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'compota_manzana_pera') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Caqui con granada y queso fresco', '{snack}', '{crudo}',
   3, 3, 1, 0, false,
   false, null,
   '{10,11,12}', 'Trocear y montar.',
   '🟠', 't-fruta', '{"fruta de otoño","proteína"}',
   1, 'caqui y granada de temporada', 'caqui_granada');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Caqui', 1::numeric, 'ud', 'unidad'),
  ('Granada', 60::numeric, 'g', 'proporcional'),
  ('Queso fresco', 90::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'caqui_granada') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Cerezas con yogur y almendras', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{5,6,7}', 'Mezclar.',
   '🍒', 't-fruta', '{"fruta de primavera"}',
   1, 'cereza de temporada', 'cerezas_yogur');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Cerezas', 150::numeric, 'g', 'proporcional'),
  ('Yogur natural', 1::numeric, 'ud', 'unidad'),
  ('Almendras crudas', 15::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'cerezas_yogur') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Ciruelas con requesón', '{snack}', '{crudo}',
   2, 2, 1, 0, false,
   false, null,
   '{7,8,9}', 'Trocear sobre el requesón.',
   '🫐', 't-fruta', '{"fruta de verano","alto en proteína"}',
   1, 'ciruela de temporada', 'ciruelas_requeson');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Ciruelas', 180::numeric, 'g', 'proporcional'),
  ('Requesón', 120::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'ciruelas_requeson') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Tosta de requesón e higos', '{desayuno}', '{sarten}',
   5, 5, 1, 0, false,
   false, null,
   '{7,8,9}', 'Tuesta el pan. · Extiende el requesón y coloca los higos. · Termina con las nueces.',
   '🫐', 't-lacteo', '{"dulce","5 minutos"}',
   0, 'higos de temporada', 'tosta_requeson_higos');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Pan de centeno', 60::numeric, 'g', 'proporcional'),
  ('Requesón', 120::numeric, 'g', 'proporcional'),
  ('Higos frescos', 100::numeric, 'g', 'proporcional'),
  ('Nueces', 10::numeric, 'g', 'proporcional')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'tosta_requeson_higos') r;

insert into recipes (household_id, nombre, momentos, metodo, min_activos, min_totales,
  raciones_base, aguanta_tupper_dias, congelable, apta_batch, lista_en_min, meses, instrucciones,
  emoji, tipo, tags, transportable, temporada_nota, clave) values
  ('11111111-1111-1111-1111-111111111111', 'Huevos al plato con aguacate y tomate', '{cena}', '{horno}',
   12, 20, 1, 0, false,
   false, 20,
   '{1,2,3,4,5,6,7,8,9,10,11,12}', 'Pocha la cebolla con el tomate 10 min. · Casca los huevos encima y hornea 8 min a 190°. · Sirve con el aguacate y el pan.',
   '🥑', 't-huevo', '{"20 minutos"}',
   0, null, 'huevos_aguacate_cena');
insert into recipe_ingredients (recipe_id, ingredient_id, cantidad, unidad, escalado)
select r.id, i.id, v.cant, v.uni, v.esc::escalado_t from (values
  ('Huevo', 2::numeric, 'ud', 'unidad'),
  ('Aguacate', 70::numeric, 'g', 'proporcional'),
  ('Tomate triturado', 120::numeric, 'g', 'proporcional'),
  ('Cebolla', 50::numeric, 'g', 'proporcional'),
  ('Pan integral', 40::numeric, 'g', 'proporcional'),
  ('Aceite de oliva', 10::numeric, 'g', 'fijo')
) as v(nombre, cant, uni, esc)
join ingredients i on i.nombre = v.nombre
cross join (select id from recipes where clave = 'huevos_aguacate_cena') r;

