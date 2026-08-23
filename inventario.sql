-- ============================================================================
-- INVENTARIO REAL — 23 de agosto de 2026
-- Lo que hay en casa el día de arrancar: lo comprado hoy en Lidl más lo que ya
-- estaba. Ejecutar DESPUÉS de semilla.sql.
--
-- Los básicos secos (legumbre, arroz, quinoa, especias) llevan una cantidad
-- estimada a propósito: el menú consume tan poco que el número exacto no cambia
-- ninguna decisión. Se corrigen en el ajuste mensual de despensa.
--
-- NO están: huevos, lácteos ni charcutería. Están a cero de verdad, y por eso
-- son la mayor parte de la compra del sábado 29.
-- ============================================================================

insert into pantry (household_id, ingredient_id, cantidad, unidad, caducidad, es_basico, origen, nota)
select '11111111-1111-1111-1111-111111111111', i.id, v.g, 'g', v.cad::date, true, 'ticket'::origen_t, v.nota
from (values
  ('Merluza congelada', 970::numeric, '2027-02-23', 'comprado en Lidl el 23/08'),
  ('Atún al natural', 480::numeric, '2028-08-23', '6 latas de 80 g'),
  ('Almendras crudas', 400::numeric, '2027-02-23', null),
  ('Lentejas de bote', 800::numeric, '2028-08-23', '2 botes'),
  ('Nueces', 200::numeric, '2027-02-23', null),
  ('Leche de avena', 2000::numeric, '2027-02-23', '2 briks de 1 L'),
  ('Tomate triturado', 2000::numeric, '2028-08-23', '5 botes'),
  ('Pan integral', 800::numeric, '2026-09-06', 'pan de molde'),
  ('Pan de centeno', 400::numeric, '2026-09-13', '50 % centeno'),
  ('Garbanzos de bote', 400::numeric, '2028-08-23', null),
  ('Alubias de bote', 800::numeric, '2028-08-23', '1 bote blanco + 1 de alubia roja'),
  ('Pasta integral', 500::numeric, '2027-08-23', 'macarrones'),
  ('Salsa de soja', 250::numeric, '2028-02-23', null),
  ('Aceite de oliva', 3000::numeric, '2027-08-23', 'garrafa de 3 L'),
  ('Copos de avena', 1400::numeric, '2027-02-23', null),
  ('Harina de avena', 400::numeric, '2027-02-23', 'copos molidos'),
  ('Lentejas pardina', 500::numeric, '2028-08-23', 'seca'),
  ('Quinoa', 500::numeric, '2028-08-23', null),
  ('Semillas de chía', 250::numeric, '2028-08-23', null),
  ('Arroz integral', 1000::numeric, '2028-08-23', 'es arroz blanco: se gasta primero'),
  ('Judías verdes congeladas', 800::numeric, '2028-08-23', '2 botes, no congeladas'),
  ('Ajo', 350::numeric, '2026-11-23', '7 cabezas'),
  ('Cebolla', 1000::numeric, '2026-10-23', 'blanca y roja'),
  ('Canela', 50::numeric, '2028-08-23', null),
  ('Comino', 50::numeric, '2028-08-23', null),
  ('Pimentón', 50::numeric, '2028-08-23', null),
  ('Vinagre de Jerez', 500::numeric, '2029-08-23', null),
  ('Brócoli', 1000::numeric, '2027-02-23', 'congelado'),
  ('Pimiento', 800::numeric, '2027-02-23', 'a dados, congelado'),
  ('Contramuslo de pollo', 650::numeric, '2027-02-23', '~6-7 filetes'),
  ('Salmón', 350::numeric, '2026-11-23', '~4 escalopines'),
  ('Filete de ternera', 700::numeric, '2027-02-23', 'filetes · puede ser aguja de cerdo'),
  ('Frutos rojos congelados', 400::numeric, '2027-05-23', null),
  ('Melocotón', 450::numeric, '2027-02-23', 'mix con mango, congelado')
) as v(nombre, g, cad, nota) join ingredients i on i.nombre = v.nombre;
