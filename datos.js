/* CAPA DE DATOS — App T&C */
/* ╔══════════════════════════════════════════════════════════════════╗
   ║  CAPA DE DATOS                                                   ║
   ║  Todo lo que hay entre estas marcas es lo ÚNICO que cambiará el   ║
   ║  día que conectemos Supabase: estas mismas funciones pasarán a    ║
   ║  hacer consultas en vez de leer los objetos de ejemplo.          ║
   ║  El resto de la app no se toca.                                  ║
   ╚══════════════════════════════════════════════════════════════════╝ */

/* ── MODELO (generado y validado aparte) ── */
// nombre: [kcal/100, proteína/100, sección, peso_ud (si aplica), modo por defecto]
const ING = {
  'Pan integral':          [250, 9,   'Despensa',   null, 'p'],
  'Pan de centeno':        [240, 8,   'Despensa',   null, 'p'],
  'Pan del día anterior':  [270, 8,   'Despensa',   null, 'p'],
  'Tomate':                [18,  0.9, 'Frutería',   null, 'p'],
  'Tomate triturado':      [30,  1.3, 'Despensa',   null, 'p'],
  'Pavo en lonchas':       [110, 18,  'Charcutería',null, 'p'],
  'Pavo en tiras':         [110, 22,  'Carnicería', null, 'p'],
  'Pavo picado':           [120, 21,  'Carnicería', null, 'p'],
  'Jamón serrano':         [240, 30,  'Charcutería',null, 'p'],
  'Aceite de oliva':       [900, 0,   'Despensa',   null, 'f'],
    'Vinagre de Jerez':      [20,  0,   'Despensa',   null, 'f'],
  'Salsa de soja':         [60,  6,   'Despensa',   null, 'f'],
  'Ajo':                   [149, 6,   'Frutería',   null, 'f'],
  'Canela':                [0,   0,   'Despensa',   null, 'f'],
  'Comino':                [0,   0,   'Despensa',   null, 'f'],
  'Comino y pimentón':     [0,   0,   'Despensa',   null, 'f'],
  'Pimentón':              [0,   0,   'Despensa',   null, 'f'],
  'Huevo':                 [143, 12.6,'Lácteos y huevos', 60, 'u'],
  'Clara de huevo':        [48,  11,  'Lácteos y huevos', null,'p'],
  'Champiñones':           [22,  3,   'Frutería',   null, 'p'],
  'Queso fresco':          [100, 12,  'Lácteos y huevos', null,'p'],
  'Queso fresco batido':   [45,  8,   'Lácteos y huevos', null,'p'],
  'Queso rallado ligero':  [300, 25,  'Lácteos y huevos', null,'f'],
  'Skyr natural':          [60,  10,  'Lácteos y huevos', null,'p'],
  'Yogur natural':         [61,  3.5, 'Lácteos y huevos', 125, 'u'],
  'Copos de avena':        [380, 13,  'Despensa',   null, 'p'],
  'Melocotón':             [39,  0.9, 'Frutería',   180, 'u'],
  'Plátano':               [89,  1.1, 'Frutería',   110, 'u'],
  'Pera':                  [57,  0.4, 'Frutería',   180, 'u'],
  'Higos frescos':         [74,  0.8, 'Frutería',   55,   'p'],
  'Sandía':                [30,  0.6, 'Frutería',   null, 'p'],
  'Uvas':                  [69,  0.7, 'Frutería',   null, 'p'],
  'Nueces':                [654, 15,  'Despensa',   null, 'p'],
  'Almendras crudas':      [579, 21,  'Despensa',   null, 'p'],
  'Crema de cacahuete':    [600, 25,  'Despensa',   null, 'p'],
  'Pepino':                [15,  0.7, 'Frutería',   null, 'p'],
  'Pimiento':              [26,  1,   'Frutería',   null, 'p'],
  'Cebolla':               [40,  1.1, 'Frutería',   null, 'p'],
  'Cebolleta':             [32,  1.1, 'Frutería',   null, 'p'],
  'Berenjena':             [25,  1,   'Frutería',   null, 'p'],
  'Calabacín':             [17,  1.2, 'Frutería',   null, 'p'],
  'Patata':                [77,  2,   'Frutería',   null, 'p'],
  'Zanahoria':             [41,  0.9, 'Frutería',   null, 'p'],
  'Judías verdes congeladas':[31,1.8, 'Congelados', null, 'p'],
  'Lentejas pardina':      [336, 24,  'Despensa',   null, 'p'],
  'Garbanzos de bote':     [120, 7,   'Despensa',   null, 'p'],
  'Alubias de bote':       [90,  6.5, 'Despensa',   null, 'p'],
  'Atún al natural':       [100, 23,  'Despensa',   80,  'u'],
  'Pechuga de pollo':      [110, 23,  'Carnicería', null, 'p'],
  'Contramuslo de pollo':  [170, 19,  'Carnicería', null, 'p'],
  'Ternera picada':        [200, 20,  'Carnicería', null, 'p'],
  'Merluza congelada':     [82,  17,  'Congelados', null, 'p'],
  'Quinoa':                [368, 14,  'Despensa',   null, 'p'],
  'Frutos rojos congelados':[45,  0.9, 'Congelados', null, 'p'],
  'Harina de avena':       [380, 13,  'Despensa',   null, 'p'],
  'Filete de ternera':     [130, 21,  'Carnicería', null, 'p'],
  'Semillas de chía':      [486, 17,  'Despensa',   null, 'f'],
  'Melón':                 [34,  0.6, 'Frutería',   null, 'p'],
  'Ciruelas':              [46,  0.7, 'Frutería',   null, 'p'],
  'Aguacate':              [160, 2,   'Frutería',   null, 'p'],
  'Requesón':              [96,  11,  'Lácteos y huevos', null,'p'],
  'Brócoli':               [34,  2.8, 'Frutería',   null, 'p', 7,   0.4, 2.6, 15],
  'Calabaza':              [26,  1,   'Frutería',   null, 'p', 6.5, 0.1, 1.1, 75],
  'Puerro':                [61,  1.5, 'Frutería',   null, 'p', 14,  0.3, 1.8, 30],
  'Boniato':               [86,  1.6, 'Frutería',   null, 'p', 20,  0.1, 3,   63],
  'Coles de Bruselas':     [43,  3.4, 'Frutería',   null, 'p', 9,   0.3, 3.8, 15],
  'Setas':                 [22,  3.1, 'Frutería',   null, 'p', 3.3, 0.3, 1,   15],
  'Acelgas':               [19,  1.8, 'Frutería',   null, 'p', 3.7, 0.2, 1.6, 15],
  'Coliflor':              [25,  1.9, 'Frutería',   null, 'p', 5,   0.3, 2,   15],
  'Espinacas frescas':     [23,  2.9, 'Frutería',   null, 'p', 3.6, 0.4, 2.2, 15],
  'Alcachofa':             [47,  3.3, 'Frutería',   null, 'p', 10,  0.2, 5.4, 20],
  'Espárragos trigueros':  [20,  2.2, 'Frutería',   null, 'p', 3.9, 0.1, 2.1, 15],
  'Guisantes':             [81,  5.4, 'Congelados', null, 'p', 14,  0.4, 5.1, 35],
  'Caqui':                 [70,  0.6, 'Frutería',   170,  'u', 18,  0.2, 3.6, 50],
  'Granada':               [83,  1.7, 'Frutería',   null, 'p', 19,  1.2, 4,   35],
  'Manzana':               [52,  0.3, 'Frutería',   180,  'u', 14,  0.2, 2.4, 36],
  'Naranja':               [47,  0.9, 'Frutería',   200,  'u', 12,  0.1, 2.4, 40],
  'Mandarina':             [53,  0.8, 'Frutería',   90,   'u', 13,  0.3, 1.8, 47],
  'Kiwi':                  [61,  1.1, 'Frutería',   100,  'u', 15,  0.5, 3,   50],
  'Fresas':                [32,  0.7, 'Frutería',   null, 'p', 7.7, 0.3, 2,   40],
  'Cerezas':               [63,  1.1, 'Frutería',   null, 'p', 16,  0.2, 2.1, 22],
  'Bacalao fresco':        [82,  18,  'Pescadería', null, 'p', 0,   0.7, 0,   0],
  'Salmón':                [208, 20,  'Pescadería', null, 'p', 0,   13,  0,   0],
  'Arroz integral':        [350, 7.5, 'Despensa',   null, 'p', 72,  2.7, 3.5, 50],
  'Lechuga':               [15,  1.4, 'Frutería',   null, 'p', 2.9, 0.2, 1.3, 15],
  'Jamón cocido':          [110, 18,  'Charcutería',null, 'p', 1.5, 3.5, 0,   0],
  'Lentejas de bote':      [95,  7,   'Despensa',   null, 'p', 14,  0.5, 5,   28],
  'Pasta integral':        [348, 12,  'Despensa',   null, 'p', 66,  2.5, 8,   45],
  'Café solo':             [2,   0.1, 'Despensa',   null, 'f'],
  'Leche de avena':        [45,  0.5, 'Despensa',   null, 'f'],
  'Cerveza':               [43,  0.5, 'Despensa',   330, 'u'],
  'Aquarius de limón':     [24,  0,   'Despensa',   500, 'u']
};


/* carbohidratos, grasa, fibra e índice glucémico (posiciones 5-8 del array) */
const MACROS = {
  'Quinoa':[64,6,7,53], 'Frutos rojos congelados':[8,0.3,4,25], 'Harina de avena':[60,7,10,45],
  'Filete de ternera':[0,5,0,0], 'Semillas de chía':[42,31,34,1],
 'Pan integral':[41,3.5,7,55],'Pan de centeno':[45,1.7,8,50],'Pan del día anterior':[52,3,3,70],
 'Tomate':[3.9,0.2,1.2,30],'Tomate triturado':[5,0.2,1.4,35],
 'Pavo en lonchas':[1.5,3,0,0],'Pavo en tiras':[0,2,0,0],'Pavo picado':[0,4,0,0],'Jamón serrano':[0.3,12,0,0],
 'Aceite de oliva':[0,100,0,0],'Vinagre de Jerez':[0.4,0,0,0],
 'Salsa de soja':[5,0,0,0],'Ajo':[33,0.5,2.1,30],'Canela':[0,0,0,0],'Comino':[0,0,0,0],
 'Comino y pimentón':[0,0,0,0],'Pimentón':[0,0,0,0],'Huevo':[0.7,9.5,0,0],'Clara de huevo':[0.7,0.2,0,0],
 'Champiñones':[3.3,0.3,1,15],'Queso fresco':[3,5,0,0],'Queso fresco batido':[4,0.2,0,0],
 'Queso rallado ligero':[2,20,0,0],'Skyr natural':[4,0.2,0,0],'Yogur natural':[4.7,3.3,0,0],
 'Copos de avena':[59,7,10,55],'Melocotón':[9.5,0.3,1.5,42],'Plátano':[23,0.3,2.6,51],'Pera':[15,0.1,3.1,38],
 'Higos frescos':[19,0.3,2.9,35],'Sandía':[7.6,0.2,0.4,72],'Uvas':[17,0.2,0.9,53],'Nueces':[14,65,6.7,15],
 'Almendras crudas':[22,50,12,15],'Crema de cacahuete':[20,50,6,14],'Pepino':[3.6,0.1,0.5,15],
 'Pimiento':[5,0.3,1.9,15],
 'Cebolla':[9,0.1,1.7,15],'Cebolleta':[7,0.2,2.6,15],'Berenjena':[6,0.2,3,15],'Calabacín':[3.1,0.3,1,15],
 'Patata':[17,0.1,2.2,70],'Zanahoria':[9.6,0.2,2.8,35],'Judías verdes congeladas':[7,0.2,3.4,15],
 'Lentejas pardina':[60,1.1,11,29],'Garbanzos de bote':[18,2.6,5,28],'Alubias de bote':[15,0.5,6,30],
 'Atún al natural':[0,1,0,0],'Pechuga de pollo':[0,1.7,0,0],'Contramuslo de pollo':[0,10,0,0],
 'Ternera picada':[0,13,0,0],'Merluza congelada':[0,1.3,0,0],'Melón':[8,0.2,0.9,65],'Ciruelas':[11,0.3,1.4,39],
 'Aguacate':[2,15,6.7,15],'Requesón':[3,4,0,0],'Café solo':[0,0,0,0],'Leche de avena':[7,1.5,0.8,60],
 'Cerveza':[3.6,0,0,0],'Aquarius de limón':[6,0,0,0]};
for (const n in MACROS) if (ING[n]) ING[n].push(...MACROS[n]);

// receta: ingredientes = [nombre, cantidad para 1 ración de Cristina, unidad]
const R = {
  tostada_tomate:{n:'Tostada de tomate, aceite y pavo', e:'🍅', t:'t-verdura', mom:'desayuno',
    act:6, tot:6, metodo:'Tostadora', temp:'tomate de temporada', tags:['salado','6 minutos'],
    ing:[['Pan integral',75],['Tomate',120],['Pavo en lonchas',75],['Aceite de oliva',8]],
    pasos:['Tuesta el pan.','Ralla el tomate y extiéndelo con el aceite y una pizca de sal.','Cubre con el pavo.']},
  revuelto_champi:{n:'Revuelto de champiñones y queso fresco', e:'🍳', t:'t-huevo', mom:'desayuno',
    act:8, tot:8, metodo:'Sartén', tags:['salado','alto en proteína'],
    ing:[['Huevo',2,'ud'],['Champiñones',100],['Queso fresco',50],['Pan de centeno',50],['Aceite de oliva',6]],
    pasos:['Saltea los champiñones 5 min.','Añade los huevos batidos y remueve fuera del fuego.','Desmiga el queso encima y sirve con el pan.']},
  skyr_melocoton:{n:'Skyr con avena, melocotón y canela', e:'🍑', t:'t-lacteo', mom:'desayuno',
    act:5, tot:5, metodo:'Sin cocción', temp:'melocotón de temporada', tags:['dulce','preparable la noche antes'],
    ing:[['Skyr natural',220],['Copos de avena',40],['Melocotón',1,'ud'],['Canela',1]],
    pasos:['Mezcla el skyr con la avena.','Añade el melocotón en dados y la canela.','En la nevera toda la noche.']},
  tortitas:{n:'Tortitas de avena y plátano', e:'🥞', t:'t-fruta', mom:'desayuno',
    act:10, tot:10, metodo:'Sartén', tags:['dulce','para días de entreno'],
    ing:[['Copos de avena',55],['Plátano',1,'ud'],['Huevo',1,'ud'],['Clara de huevo',60],['Canela',1]],
    pasos:['Tritura todo junto.','Cuaja tortitas pequeñas 2 min por cara.']},

  fruta_nueces:{n:'Melocotón y nueces', e:'🍑', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', temp:'melocotón de temporada', tags:['fruta de agosto'],
    ing:[['Melocotón',1,'ud'],['Nueces',18]], pasos:['Nada que preparar.']},
  higos_queso:{n:'Higos con queso fresco batido', e:'🫐', t:'t-fruta', mom:'snack',
    act:2, tot:2, metodo:'Sin cocción', temp:'higos de temporada', tags:['fruta de agosto','proteína'],
    ing:[['Higos frescos',120],['Queso fresco batido',150]], pasos:['Trocea los higos sobre el queso batido.']},
  sandia_almendras:{n:'Sandía y almendras', e:'🍉', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', temp:'sandía de temporada', tags:['fruta de agosto','hidratante'],
    ing:[['Sandía',300],['Almendras crudas',20]], pasos:['Cortar y listo.']},
  uvas_yogur:{n:'Uvas y yogur natural', e:'🍇', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', temp:'uva de temporada', tags:['fruta de agosto'],
    ing:[['Uvas',150],['Yogur natural',1,'ud']], pasos:['Mezclar.']},
  platano_cacahuete:{n:'Plátano con crema de cacahuete', e:'🍌', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', tags:['pre-entreno'],
    ing:[['Plátano',1,'ud'],['Crema de cacahuete',18]], pasos:['Untar y comer.']},
  pera_pavo:{n:'Pera y lonchas de pavo', e:'🍐', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', tags:['saciante','fácil de llevar'],
    ing:[['Pera',1,'ud'],['Pavo en lonchas',70]], pasos:['Sin preparación.']},

  melon_jamon:{n:'Melón con jamón', e:'🍈', t:'t-fruta', mom:'snack',
    act:2, tot:2, metodo:'Sin cocción', temp:'melón de temporada', tags:['fruta de agosto','salado'],
    ing:[['Melón',250],['Jamón serrano',40]], pasos:['Cortar el melón y envolverlo con el jamón.']},
  ciruelas_almendras:{n:'Ciruelas y almendras', e:'🫐', t:'t-fruta', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', temp:'ciruela de temporada', tags:['fruta de agosto'],
    ing:[['Ciruelas',200],['Almendras crudas',20]], pasos:['Sin preparación.']},
  yogur_nueces:{n:'Yogur natural con nueces y canela', e:'🥛', t:'t-lacteo', mom:'snack',
    act:1, tot:1, metodo:'Sin cocción', tags:['saciante'],
    ing:[['Yogur natural',1,'ud'],['Nueces',15],['Canela',1]], pasos:['Mezclar.']},
  tomate_requeson:{n:'Tomate con requesón y orégano', e:'🍅', t:'t-lacteo', mom:'snack',
    act:2, tot:2, metodo:'Sin cocción', temp:'tomate de temporada', tags:['salado','alto en proteína'],
    ing:[['Requesón',150],['Tomate',100],['Aceite de oliva',5]], pasos:['Tomate en rodajas con el requesón encima y un hilo de aceite.']},
  huevos_aguacate:{n:'Huevos revueltos con aguacate', e:'🥑', t:'t-huevo', mom:'desayuno',
    act:8, tot:8, metodo:'Sartén', tags:['salado','alto en proteína'],
    ing:[['Huevo',2,'ud'],['Aguacate',70],['Pan integral',50],['Aceite de oliva',5]],
    pasos:['Revuelve los huevos a fuego suave.','Sirve con el aguacate en láminas sobre el pan tostado.']},
  tostada_atun:{n:'Tostada de atún y tomate', e:'🐟', t:'t-pescado', mom:'desayuno',
    act:5, tot:5, metodo:'Tostadora', temp:'tomate de temporada', tags:['salado','5 minutos'],
    ing:[['Pan integral',70],['Atún al natural',1,'ud'],['Tomate',100],['Aceite de oliva',8]],
    pasos:['Tuesta el pan.','Ralla el tomate encima con el aceite.','Cubre con el atún escurrido.']},
  gazpacho_pollo:{n:'Gazpacho con pollo a la plancha', e:'🥤', t:'t-verdura', mom:'comida',
    act:12, tot:20, metodo:'Thermomix + sartén', temp:'tomate y pepino de temporada',
    tags:['túper 3 días','el gazpacho aguanta 4 días'], tupper:3,
    ing:[['Tomate',300],['Pepino',60],['Pimiento',40],['Aceite de oliva',15],
         ['Vinagre de Jerez',5],['Pechuga de pollo',170],['Ajo',3]],
    pasos:['Tritura tomate, pepino, pimiento y ajo 2 min vel. 10.','Emulsiona con el aceite y el vinagre.','Marca el pollo 4 min por cara.','Enfría el gazpacho 2 h.']},
  lentejas_frias:{n:'Ensalada templada de lentejas y pimiento', e:'🥗', t:'t-legumbre', mom:'comida',
    act:12, tot:35, metodo:'Olla', tags:['túper 3 días','tanda del domingo','IG bajo'], tupper:3, batch:true,
    ing:[['Lentejas pardina',85],['Pimiento',60],['Cebolleta',40],['Tomate',80],
         ['Huevo',1,'ud'],['Aceite de oliva',10],['Comino',1]],
    pasos:['Cuece las lentejas 25 min y escúrrelas.','Pica el pimiento, la cebolleta y el tomate en crudo.','Mezcla con el aceite y el comino.','Corona con el huevo cocido.']},
  pisto_huevo:{n:'Pisto de verduras con huevo al horno', e:'🍆', t:'t-verdura', mom:'comida',
    act:15, tot:45, metodo:'Horno', temp:'berenjena, calabacín y pimiento de temporada',
    tags:['túper 3 días','congelable'], tupper:3,
    ing:[['Berenjena',150],['Calabacín',150],['Pimiento',80],['Cebolla',60],
         ['Tomate triturado',100],['Patata',120],['Huevo',2,'ud'],['Aceite de oliva',12]],
    pasos:['Pocha la verdura en dados 20 min.','Añade el tomate y cocina 10 min más.','Haz dos huecos, casca los huevos y hornea 8 min a 190°.']},
  merluza_pisto:{n:'Merluza a la airfryer con pisto', e:'🐟', t:'t-pescado', mom:'cena',
    act:12, tot:28, metodo:'Airfryer', tags:['rápida','cena ligera'], lista:12,
    ing:[['Merluza congelada',220],['Patata',130],['Calabacín',100],['Pimiento',80],['Cebolla',50],
         ['Tomate triturado',80],['Aceite de oliva',10]],
    pasos:['Pisto: pocha la verdura 12 min y añade el tomate.','Merluza a la airfryer 12 min a 180°.','Sirve el lomo sobre el pisto.']},
  filete_plancha_verduras:{n:'Filete a la plancha con verduras al horno', e:'🥩', t:'t-carne', mom:'comida',
    act:12, tot:35, metodo:'Plancha y horno', temp:'pimiento y calabacín de temporada',
    tags:['túper 2 días','filete, no picada'], tupper:2,
    ing:[['Filete de ternera',140],['Patata',140],['Pimiento',120],['Calabacín',100],
         ['Aceite de oliva',10],['Ajo',5],['Pimentón',2]],
    pasos:['Horno a 200°: patata en rodajas, pimiento y calabacín en tiras, aceite, ajo y pimentón. 30 min.',
      'Los últimos 5 min, filete a la plancha muy fuerte: 2 min por cara y sal al sacarlo.',
      'Deja reposar el filete 3 min antes de cortarlo, o suelta todo el jugo.']},
  quinoa_pollo_brocoli:{n:'Bol de quinoa con pollo y brócoli', e:'🥗', t:'t-carne', mom:'comida',
    act:12, tot:30, metodo:'Olla y sartén', tags:['túper 3 días','tanda del domingo'], tupper:3, batch:true,
    ing:[['Quinoa',70],['Pechuga de pollo',130],['Brócoli',160],['Pimiento',80],
         ['Aceite de oliva',10],['Salsa de soja',8],['Ajo',4]],
    pasos:['Enjuaga la quinoa y cuécela 15 min en el doble de agua. Escurre.',
      'Brócoli al vapor 6 min: que quede firme, si se pasa en el táper llega deshecho.',
      'Pollo en tiras a la sartén fuerte con el ajo; añade el pimiento 3 min.',
      'Mezcla todo con la soja y un chorro de aceite en crudo.']},
  quinoa_atun_verduras:{n:'Ensalada de quinoa con atún y verduras', e:'🥙', t:'t-pescado', mom:'comida',
    meses:[4,5,6,7,8,9,10], act:12, tot:20, metodo:'Olla',
    tags:['túper 3 días','se come fría','tanda del domingo'], tupper:3, batch:true,
    ing:[['Quinoa',65],['Atún al natural',1,'ud'],['Tomate',110],['Pepino',80],
         ['Cebolleta',30],['Aceite de oliva',10],['Vinagre de Jerez',5]],
    pasos:['Cuece la quinoa 15 min, escúrrela y enfríala bien: en caliente aguada la ensalada.',
      'Pica el tomate, el pepino y la cebolleta en dados pequeños.',
      'Mezcla con el atún escurrido, el aceite y el vinagre.']},
  brocoli_huevo_jamon:{n:'Brócoli salteado con huevo y jamón', e:'🥦', t:'t-huevo', mom:'cena',
    act:12, tot:12, metodo:'Sartén', tags:['lista en 12 min'], lista:12,
    ing:[['Brócoli',220],['Huevo',2,'ud'],['Jamón serrano',35],['Ajo',5],
         ['Aceite de oliva',10],['Pan de centeno',40]],
    pasos:['Brócoli al vapor o al microondas 5 min con un dedo de agua.',
      'Sartén fuerte con el ajo y el jamón en tiras; añade el brócoli y saltea 3 min.',
      'Haz un hueco, casca los huevos dentro y remueve hasta que cuajen.']},
  yogur_frutos_chia:{n:'Yogur con frutos rojos y chía', e:'🫐', t:'t-lacteo', mom:'snack',
    act:3, tot:3, metodo:'Sin fuego', tags:['3 minutos','para llevar'],
    ing:[['Yogur natural',1,'ud'],['Frutos rojos congelados',100],['Semillas de chía',10],['Nueces',12]],
    pasos:['Saca los frutos rojos del congelador un rato antes, o al microondas 30 s.',
      'Yogur, frutos rojos, chía y nueces por encima.']},
  avena_noche_frutos:{n:'Avena de la noche anterior con frutos rojos y chía', e:'🥣', t:'t-lacteo', mom:'desayuno',
    act:5, tot:5, metodo:'Sin fuego', tags:['dulce','se deja hecho','para llevar'],
    ing:[['Copos de avena',55],['Skyr natural',120],['Leche de avena',70],
         ['Frutos rojos congelados',110],['Semillas de chía',10]],
    pasos:['La noche antes: avena, skyr, bebida de avena y chía al táper. A la nevera.',
      'Pon los frutos rojos encima, aún congelados: se descongelan solos durante la noche.',
      'Se come frío, sin calentar.']},
  tortitas_harina_avena:{n:'Tortitas de harina de avena con frutos rojos', e:'🥞', t:'t-lacteo', mom:'desayuno',
    act:12, tot:12, metodo:'Sartén', tags:['dulce','fin de semana'],
    ing:[['Harina de avena',60],['Huevo',2,'ud'],['Yogur natural',1,'ud'],
         ['Frutos rojos congelados',90],['Canela',1],['Aceite de oliva',5]],
    pasos:['Bate los huevos con el yogur y la harina de avena hasta que no queden grumos.',
      'Sartén a fuego medio-bajo con una gota de aceite: tres o cuatro tortitas pequeñas, 2 min por cara.',
      'Frutos rojos calentados 40 s en el microondas por encima, y canela.']},
  pollo_pimientos:{n:'Pollo al horno con pimientos y patata', e:'🍗', t:'t-carne', mom:'comida',
    act:12, tot:50, metodo:'Horno', temp:'pimiento de temporada',
    tags:['túper 3 días','tanda del domingo'], tupper:3, batch:true,
    ing:[['Contramuslo de pollo',170],['Pimiento',170],['Patata',135],
         ['Aceite de oliva',10],['Ajo',5],['Pimentón',2]],
    pasos:['Horno a 200°. Patata en rodajas finas en la base.','Pollo encima con ajo y pimentón. 30 min.','Añade los pimientos en tiras los últimos 15 min.']},
  chili:{n:'Chili de ternera y alubias', e:'🌶', t:'t-carne', mom:'comida',
    act:15, tot:40, metodo:'Olla', tags:['túper 3 días','congelable','tanda del domingo'], tupper:3, batch:true,
    ing:[['Ternera picada',150],['Alubias de bote',150],['Tomate triturado',100],
         ['Cebolla',50],['Pimiento',50],['Comino y pimentón',3],['Aceite de oliva',8]],
    pasos:['Sofríe cebolla y pimiento 8 min.','Añade la carne y dórala.','Especias, tomate y alubias escurridas. 20 min.']},
  garbanzos_atun:{n:'Ensalada de garbanzos, pepino y atún', e:'🫘', t:'t-legumbre', mom:'comida',
    act:8, tot:8, metodo:'Sin cocción', temp:'pepino y tomate de temporada',
    tags:['8 minutos','túper 3 días','sin encender el fuego'], tupper:3, lista:8,
    ing:[['Garbanzos de bote',180],['Pepino',100],['Tomate',100],['Cebolleta',30],
         ['Atún al natural',1,'ud'],['Aceite de oliva',10]],
    pasos:['Escurre y enjuaga los garbanzos.','Pica la verdura en dados.','Mezcla con el atún y aliña.']},
  crema_calabacin:{n:'Crema de calabacín y pollo a la plancha', e:'🥣', t:'t-verdura', mom:'cena',
    act:10, tot:25, metodo:'Thermomix + sartén', tags:['lista en 8 min','congelable','judías verdes trituradas'], lista:8,
    ing:[['Calabacín',300],['Judías verdes congeladas',100],['Cebolla',40],['Patata',110],
         ['Queso fresco batido',60],['Pechuga de pollo',170],['Aceite de oliva',8]],
    pasos:['Trocea y cuece 20 min a 100° vel. 1.','Tritura 1 min vel. 8 con el queso batido.','Marca el pollo 4 min por cara.','Sirve la crema con el pollo encima.'],
    nota:'Las judías verdes van trituradas: así entran sin problema en la dieta de Cristina.'},
  berenjenas:{n:'Berenjenas rellenas de pavo', e:'🍆', t:'t-verdura', mom:'cena',
    act:15, tot:45, metodo:'Horno', temp:'berenjena de temporada', tags:['congelable'],
    ing:[['Berenjena',250],['Patata',90],['Pavo picado',160],['Cebolla',50],['Tomate triturado',80],
         ['Queso rallado ligero',20],['Aceite de oliva',8]],
    pasos:['Hornea las berenjenas partidas 20 min a 200°.','Vacía la pulpa y saltéala con la cebolla y el pavo.','Añade el tomate, rellena y gratina 8 min.']},
  tortilla_calabacin:{n:'Tortilla de calabacín y atún', e:'🍳', t:'t-huevo', mom:'cena',
    act:10, tot:15, metodo:'Sartén', tags:['15 minutos','cena rápida'], lista:15,
    ing:[['Huevo',2,'ud'],['Clara de huevo',80],['Calabacín',150],['Pan integral',40],['Atún al natural',1,'ud'],['Aceite de oliva',8]],
    pasos:['Saltea el calabacín rallado 5 min.','Bate huevos y claras con el atún escurrido.','Cuaja 4 min por cada lado.']},
  salmorejo_huevo:{n:'Salmorejo con huevo y jamón', e:'🍅', t:'t-verdura', mom:'cena',
    act:10, tot:12, metodo:'Thermomix', temp:'tomate de temporada', tags:['sin fuego','aguanta 3 días'], tupper:3, lista:5,
    ing:[['Tomate',350],['Pan del día anterior',50],['Aceite de oliva',15],
         ['Ajo',2],['Huevo',1,'ud'],['Jamón serrano',35]],
    pasos:['Tritura tomate, pan y ajo 2 min.','Emulsiona con el aceite hasta que espese.','Sirve muy frío con el huevo cocido y el jamón picado.']},
  pavo_verduras:{n:'Salteado de pavo con verduras de temporada', e:'🥘', t:'t-carne', mom:'cena',
    act:12, tot:18, metodo:'Sartén', temp:'calabacín y pimiento de temporada', tags:['18 minutos','túper 2 días'], tupper:2, lista:18,
    ing:[['Pavo en tiras',170],['Patata',140],['Calabacín',120],['Pimiento',100],['Cebolleta',50],
         ['Salsa de soja',8],['Aceite de oliva',10]],
    pasos:['Saltea la verdura a fuego fuerte 6 min.','Añade el pavo y dóralo 5 min.','Termina con la soja fuera del fuego.']},

  /* ═══ OTOÑO · septiembre a noviembre ═══ */
  porridge_manzana:{n:'Porridge de avena con manzana y canela', e:'🍎', t:'t-lacteo', mom:'desayuno', meses:[9,10,11,12,1,2],
    act:8, tot:8, metodo:'Olla', temp:'manzana de temporada', tags:['dulce','caliente'],
    ing:[['Copos de avena',55],['Leche de avena',200],['Manzana',1,'ud'],['Canela',1],['Nueces',12]],
    pasos:['Cuece la avena con la bebida de avena 5 min.','Añade la manzana en dados y la canela.','Termina con las nueces.']},
  revuelto_setas:{n:'Revuelto de setas y jamón', e:'🍄', t:'t-huevo', mom:'desayuno', meses:[9,10,11,12],
    act:9, tot:9, metodo:'Sartén', temp:'setas de temporada', tags:['salado','alto en proteína'],
    ing:[['Huevo',2,'ud'],['Setas',120],['Jamón serrano',30],['Pan de centeno',50],['Aceite de oliva',6]],
    pasos:['Saltea las setas 6 min a fuego fuerte.','Añade el jamón y los huevos batidos.','Sirve con el pan tostado.']},
  crema_calabaza:{n:'Crema de calabaza y puerro con pollo', e:'🎃', t:'t-verdura', mom:'cena', meses:[9,10,11,12,1],
    act:10, tot:30, metodo:'Thermomix + sartén', temp:'calabaza de temporada', tags:['congelable','lista en 8 min'], lista:8,
    ing:[['Calabaza',300],['Puerro',80],['Patata',80],['Queso fresco batido',60],['Pechuga de pollo',170],['Aceite de oliva',8]],
    pasos:['Cuece calabaza, puerro y patata 20 min.','Tritura con el queso batido.','Marca el pollo y sírvelo encima.']},
  lentejas_calabaza:{n:'Lentejas con calabaza y zanahoria', e:'🍲', t:'t-legumbre', mom:'comida', meses:[9,10,11,12,1,2],
    act:12, tot:40, metodo:'Olla', temp:'calabaza de temporada', tags:['túper 3 días','congelable','tanda del domingo','IG bajo'], tupper:3,
    ing:[['Lentejas pardina',85],['Calabaza',120],['Zanahoria',70],['Cebolla',50],['Tomate triturado',60],
         ['Aceite de oliva',10],['Pimentón',2]],
    pasos:['Sofríe cebolla y zanahoria 8 min.','Añade pimentón, tomate y calabaza.','Incorpora las lentejas y cuece 30 min.']},
  pollo_boniato:{n:'Pollo al horno con boniato y coles', e:'🍠', t:'t-carne', mom:'comida', meses:[9,10,11,12,1,2],
    act:12, tot:50, metodo:'Horno', temp:'boniato y coles de temporada', tags:['túper 3 días','tanda del domingo'], tupper:3,
    ing:[['Contramuslo de pollo',170],['Boniato',160],['Coles de Bruselas',150],['Aceite de oliva',10],['Ajo',5],['Pimentón',2]],
    pasos:['Horno a 200°. Boniato en rodajas en la base.','Pollo encima con ajo y pimentón, 30 min.','Añade las coles partidas los últimos 15 min.']},
  merluza_puerros:{n:'Merluza al horno con puerros y patata', e:'🐟', t:'t-pescado', mom:'cena', meses:[9,10,11,12,1,2,3],
    act:12, tot:35, metodo:'Horno', temp:'puerro de temporada', tags:['ligera'],
    ing:[['Merluza congelada',220],['Puerro',120],['Patata',140],['Aceite de oliva',12],['Ajo',4]],
    pasos:['Patata en rodajas al horno 20 min.','Añade el puerro en juliana y la merluza encima.','15 min más a 190°.']},
  garbanzos_espinacas:{n:'Garbanzos con espinacas y huevo', e:'🫘', t:'t-legumbre', mom:'comida', meses:[9,10,11,12,1,2,3],
    act:12, tot:25, metodo:'Sartén', tags:['túper 3 días','25 minutos','IG bajo'], tupper:3,
    ing:[['Garbanzos de bote',180],['Espinacas frescas',150],['Huevo',1,'ud'],['Tomate triturado',60],
         ['Ajo',5],['Comino',1],['Aceite de oliva',10]],
    pasos:['Dora el ajo, añade las espinacas 4 min.','Incorpora garbanzos, tomate y comino, 8 min.','Corona con el huevo cocido.']},
  tortilla_acelgas:{n:'Tortilla de acelgas y queso', e:'🍳', t:'t-huevo', mom:'cena', meses:[9,10,11,12,1,2,3],
    act:12, tot:18, metodo:'Sartén', temp:'acelga de temporada', tags:['18 minutos','cena rápida'], lista:18,
    ing:[['Huevo',2,'ud'],['Clara de huevo',80],['Acelgas',180],['Queso fresco',50],['Aceite de oliva',8]],
    pasos:['Cuece las acelgas 8 min y escúrrelas bien.','Bate huevos y claras con el queso.','Cuaja 4 min por lado.']},
  pavo_coliflor:{n:'Salteado de pavo con coliflor', e:'🥘', t:'t-carne', mom:'cena', meses:[9,10,11,12,1,2,3],
    act:12, tot:20, metodo:'Sartén', temp:'coliflor de temporada', tags:['20 minutos','túper 2 días'], tupper:2, lista:20,
    ing:[['Pavo en tiras',170],['Coliflor',220],['Cebolleta',50],['Salsa de soja',8],['Aceite de oliva',10]],
    pasos:['Saltea la coliflor en floretes pequeños 8 min.','Añade el pavo y dora 5 min.','Termina con la soja.']},
  sopa_pollo:{n:'Sopa de pollo y verduras', e:'🍜', t:'t-carne', mom:'comida', meses:[10,11,12,1,2,3],
    act:12, tot:45, metodo:'Olla', tags:['túper 3 días','congelable','reconforta'], tupper:3,
    ing:[['Pechuga de pollo',170],['Zanahoria',80],['Puerro',80],['Patata',120],['Arroz integral',30],['Aceite de oliva',8]],
    pasos:['Cuece el pollo con la verdura 30 min.','Añade el arroz los últimos 15 min.','Desmenuza el pollo y devuélvelo a la olla.']},
  albondigas:{n:'Albóndigas de pavo con tomate', e:'🍅', t:'t-carne', mom:'comida', meses:[9,10,11,12,1,2,3,4,5],
    act:18, tot:40, metodo:'Olla', tags:['túper 3 días','congelable','tanda del domingo'], tupper:3,
    ing:[['Pavo picado',170],['Huevo',1,'ud'],['Pan integral',25],['Tomate triturado',150],['Cebolla',60],['Aceite de oliva',10]],
    pasos:['Mezcla el pavo con el huevo y el pan remojado.','Forma bolas y dóralas.','Cuece 20 min en la salsa de tomate.']},
  caqui_yogur:{n:'Caqui con yogur y nueces', e:'🟠', t:'t-fruta', mom:'snack', meses:[10,11,12],
    act:2, tot:2, metodo:'Sin cocción', temp:'caqui de temporada', tags:['fruta de otoño'],
    ing:[['Caqui',1,'ud'],['Yogur natural',1,'ud'],['Nueces',12]], pasos:['Trocear y mezclar.']},
  manzana_queso:{n:'Manzana con queso fresco', e:'🍎', t:'t-fruta', mom:'snack', meses:[9,10,11,12,1,2,3,4],
    act:2, tot:2, metodo:'Sin cocción', tags:['saciante','alto en proteína'],
    ing:[['Manzana',1,'ud'],['Queso fresco',120]], pasos:['Manzana en gajos con el queso.']},
  granada_skyr:{n:'Granada con skyr', e:'🔴', t:'t-fruta', mom:'snack', meses:[10,11,12],
    act:3, tot:3, metodo:'Sin cocción', temp:'granada de temporada', tags:['fruta de otoño','alto en proteína'],
    ing:[['Granada',120],['Skyr natural',150]], pasos:['Desgranar y mezclar.']},

  /* ═══ INVIERNO · diciembre a febrero ═══ */
  cocido_ligero:{n:'Cocido ligero de garbanzos y verduras', e:'🍲', t:'t-legumbre', mom:'comida', meses:[12,1,2,3],
    act:15, tot:60, metodo:'Olla', tags:['túper 3 días','congelable','tanda del domingo'], tupper:3,
    ing:[['Garbanzos de bote',180],['Zanahoria',80],['Puerro',70],['Patata',110],['Pechuga de pollo',130],
         ['Jamón serrano',20],['Aceite de oliva',10]],
    pasos:['Cuece el pollo con la verdura 40 min.','Añade los garbanzos escurridos 10 min.','Sirve con el jamón picado por encima.']},
  guiso_ternera:{n:'Guiso de ternera con verduras', e:'🥩', t:'t-carne', mom:'comida', meses:[11,12,1,2,3],
    act:18, tot:75, metodo:'Olla', tags:['túper 3 días','congelable','mejor al día siguiente'], tupper:3,
    ing:[['Ternera picada',150],['Zanahoria',90],['Cebolla',70],['Patata',130],['Tomate triturado',80],['Aceite de oliva',10]],
    pasos:['Dora la carne y reserva.','Pocha la verdura 10 min y añade el tomate.','Devuelve la carne, cubre con agua y cuece 45 min.']},
  bacalao_verduras:{n:'Bacalao al horno con verduras', e:'🐟', t:'t-pescado', mom:'cena', meses:[11,12,1,2,3,4],
    act:12, tot:35, metodo:'Horno', tags:['ligera','alto en proteína'],
    ing:[['Bacalao fresco',200],['Puerro',100],['Pimiento',100],['Patata',130],['Aceite de oliva',12]],
    pasos:['Patata y verdura al horno 20 min a 200°.','Coloca el bacalao encima.','12 min más a 180°.']},
  crema_puerro:{n:'Crema de puerro y patata con huevo', e:'🥣', t:'t-verdura', mom:'cena', meses:[11,12,1,2,3],
    act:10, tot:30, metodo:'Thermomix', temp:'puerro de temporada', tags:['congelable','lista en 8 min'], lista:8,
    ing:[['Puerro',200],['Patata',130],['Cebolla',50],['Queso fresco batido',60],['Huevo',2,'ud'],['Aceite de oliva',10]],
    pasos:['Cuece puerro, patata y cebolla 20 min.','Tritura con el queso batido.','Sirve con los huevos cocidos partidos.']},
  alcachofas_jamon:{n:'Alcachofas salteadas con jamón y huevo', e:'🌿', t:'t-verdura', mom:'cena', meses:[11,12,1,2,3,4],
    act:15, tot:25, metodo:'Sartén', temp:'alcachofa de temporada', tags:['25 minutos'],
    ing:[['Alcachofa',250],['Jamón serrano',40],['Huevo',2,'ud'],['Ajo',5],['Aceite de oliva',12]],
    pasos:['Limpia y saltea las alcachofas 12 min.','Añade el jamón 2 min.','Termina con los huevos revueltos por encima.']},
  salmon_brocoli:{n:'Salmón al horno con brócoli', e:'🐟', t:'t-pescado', mom:'cena', meses:[1,2,3,4,5,6,7,8,9,10,11,12],
    act:10, tot:28, metodo:'Horno', tags:['omega 3','ligera'],
    ing:[['Salmón',150],['Brócoli',200],['Patata',110],['Aceite de oliva',8],['Ajo',4]],
    pasos:['Patata al horno 18 min.','Añade salmón y brócoli.','10 min más a 190°.']},
  avena_naranja:{n:'Avena con naranja y canela', e:'🍊', t:'t-lacteo', mom:'desayuno', meses:[12,1,2,3,4],
    act:5, tot:5, metodo:'Sin cocción', temp:'naranja de temporada', tags:['dulce','preparable la noche antes'],
    ing:[['Skyr natural',220],['Copos de avena',45],['Naranja',1,'ud'],['Canela',1]],
    pasos:['Mezcla el skyr con la avena.','Añade la naranja en gajos y la canela.']},
  naranja_almendras:{n:'Naranja y almendras', e:'🍊', t:'t-fruta', mom:'snack', meses:[12,1,2,3,4],
    act:1, tot:1, metodo:'Sin cocción', temp:'naranja de temporada', tags:['fruta de invierno'],
    ing:[['Naranja',1,'ud'],['Almendras crudas',22]], pasos:['Pelar y comer.']},
  mandarinas_queso:{n:'Mandarinas con queso fresco', e:'🍊', t:'t-fruta', mom:'snack', meses:[11,12,1,2,3],
    act:2, tot:2, metodo:'Sin cocción', temp:'mandarina de temporada', tags:['fruta de invierno','proteína'],
    ing:[['Mandarina',3,'ud'],['Queso fresco',100]], pasos:['Sin preparación.']},
  kiwi_yogur:{n:'Kiwi con yogur natural', e:'🥝', t:'t-fruta', mom:'snack', meses:[11,12,1,2,3,4,5],
    act:2, tot:2, metodo:'Sin cocción', tags:['fibra','digestivo'],
    ing:[['Kiwi',2,'ud'],['Yogur natural',1,'ud']], pasos:['Trocear y mezclar.']},

  /* ═══ PRIMAVERA · marzo a mayo ═══ */
  esparragos_huevo:{n:'Espárragos trigueros con huevo', e:'🌱', t:'t-verdura', mom:'cena', meses:[3,4,5,6],
    act:12, tot:18, metodo:'Sartén', temp:'espárrago de temporada', tags:['18 minutos','ligera'], lista:18,
    ing:[['Espárragos trigueros',250],['Huevo',2,'ud'],['Jamón serrano',30],['Pan integral',40],['Aceite de oliva',10]],
    pasos:['Saltea los espárragos 8 min.','Añade el jamón y los huevos.','Sirve con el pan tostado.']},
  guisantes_jamon:{n:'Guisantes con jamón y huevo', e:'🟢', t:'t-legumbre', mom:'comida', meses:[3,4,5,6],
    act:12, tot:25, metodo:'Sartén', temp:'guisante de temporada', tags:['túper 2 días','IG bajo'], tupper:2,
    ing:[['Guisantes',220],['Jamón cocido',70],['Cebolleta',50],['Huevo',1,'ud'],['Aceite de oliva',10],['Patata',100]],
    pasos:['Pocha la cebolleta y añade la patata en dados.','Incorpora los guisantes y cuece 12 min.','Añade el jamón y el huevo cocido.']},
  ensalada_pollo_fresas:{n:'Ensalada de pollo, espinacas y fresas', e:'🍓', t:'t-carne', mom:'comida', meses:[3,4,5,6],
    act:12, tot:20, metodo:'Sartén', temp:'fresa de temporada', tags:['túper 2 días','fresca'], tupper:2, lista:12,
    ing:[['Pechuga de pollo',170],['Espinacas frescas',100],['Fresas',120],['Nueces',15],['Pan integral',40],['Aceite de oliva',12]],
    pasos:['Marca el pollo y córtalo en tiras.','Mezcla espinacas, fresas y nueces.','Aliña y añade el pollo templado.']},
  merluza_esparragos:{n:'Merluza con espárragos y patata', e:'🐟', t:'t-pescado', mom:'cena', meses:[3,4,5,6],
    act:12, tot:30, metodo:'Horno', temp:'espárrago de temporada', tags:['ligera'],
    ing:[['Merluza congelada',220],['Espárragos trigueros',180],['Patata',130],['Aceite de oliva',12],['Ajo',4]],
    pasos:['Patata al horno 20 min.','Añade espárragos y merluza.','12 min más a 190°.']},
  tortilla_esparragos:{n:'Tortilla de espárragos trigueros', e:'🍳', t:'t-huevo', mom:'cena', meses:[3,4,5,6],
    act:12, tot:18, metodo:'Sartén', temp:'espárrago de temporada', tags:['18 minutos'], lista:18,
    ing:[['Huevo',2,'ud'],['Clara de huevo',80],['Espárragos trigueros',200],['Queso fresco',40],['Aceite de oliva',8]],
    pasos:['Saltea los espárragos troceados 8 min.','Bate huevos y claras.','Cuaja 4 min por lado con el queso.']},
  arroz_pollo_verduras:{n:'Arroz integral con pollo y verduras', e:'🍚', t:'t-carne', mom:'comida', meses:[1,2,3,4,5,6,7,8,9,10,11,12],
    act:12, tot:40, metodo:'Olla', tags:['túper 3 días','tanda del domingo'], tupper:3,
    ing:[['Arroz integral',70],['Pechuga de pollo',160],['Pimiento',80],['Cebolla',50],['Guisantes',60],['Aceite de oliva',10]],
    pasos:['Sofríe la verdura 8 min.','Añade el pollo en dados y dora.','Incorpora el arroz y agua, 30 min.']},
  fresas_skyr:{n:'Fresas con skyr', e:'🍓', t:'t-fruta', mom:'snack', meses:[3,4,5,6],
    act:2, tot:2, metodo:'Sin cocción', temp:'fresa de temporada', tags:['fruta de primavera','alto en proteína'],
    ing:[['Fresas',200],['Skyr natural',150]], pasos:['Trocear y mezclar.']},
  cerezas_almendras:{n:'Cerezas y almendras', e:'🍒', t:'t-fruta', mom:'snack', meses:[5,6,7],
    act:1, tot:1, metodo:'Sin cocción', temp:'cereza de temporada', tags:['fruta de primavera'],
    ing:[['Cerezas',180],['Almendras crudas',20]], pasos:['Sin preparación.']},

  /* ═══ RÁPIDAS DE TÚPER · todo el año ═══
     Cocinables el mismo día y aguantan en la oficina. Son el plan B del domingo. */
  lentejas_bote_atun:{n:'Lentejas de bote con verduras y atún', e:'🥗', t:'t-legumbre', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:10, tot:10, metodo:'Sin cocción',
    tags:['10 minutos','túper 3 días','sin encender el fuego','IG bajo'], tupper:3, lista:10,
    ing:[['Lentejas de bote',220],['Tomate',100],['Cebolleta',40],['Pimiento',60],
         ['Atún al natural',1,'ud'],['Aceite de oliva',12],['Comino',1]],
    pasos:['Enjuaga y escurre las lentejas.','Pica la verdura en dados pequeños.','Mezcla con el atún, el aceite y el comino.']},
  pollo_plancha_verduras:{n:'Pollo a la plancha con verduras salteadas', e:'🍗', t:'t-carne', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:18, tot:18, metodo:'Sartén',
    tags:['18 minutos','túper 2 días','alto en proteína'], tupper:2, lista:18,
    ing:[['Pechuga de pollo',180],['Calabacín',120],['Pimiento',100],['Cebolla',50],
         ['Patata',120],['Aceite de oliva',12],['Ajo',4]],
    pasos:['Saltea la verdura en dados 10 min.','Marca el pollo 4 min por cara.','Junta todo un minuto y reparte en tápers.']},
  pasta_atun_tomate:{n:'Pasta integral con atún y tomate', e:'🍝', t:'t-pescado', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:20, tot:20, metodo:'Olla',
    tags:['20 minutos','túper 2 días'], tupper:2, lista:20,
    ing:[['Pasta integral',70],['Tomate triturado',150],['Atún al natural',1,'ud'],
         ['Cebolla',50],['Aceite de oliva',12],['Ajo',4]],
    pasos:['Cuece la pasta 12 min.','Sofríe cebolla y ajo, añade el tomate 6 min.','Mezcla con el atún escurrido y la pasta.']},

  /* ═══ AMPLIACIÓN · reutilizan ingredientes que solo aparecían en una receta ═══ */
  ensalada_lechuga_pollo:{n:'Ensalada de pollo, aguacate y lechuga', e:'🥗', t:'t-carne', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:15, tot:15, metodo:'Sartén',
    tags:['15 minutos','túper 2 días'], tupper:2, lista:15,
    ing:[['Pechuga de pollo',170],['Lechuga',120],['Aguacate',60],['Tomate',100],
         ['Pan integral',40],['Aceite de oliva',10]],
    pasos:['Marca el pollo y córtalo en tiras.','Mezcla lechuga, tomate y aguacate.','Aliña y sirve con el pan tostado.']},
  crema_champi:{n:'Crema de champiñones y puerro con pollo', e:'🍄', t:'t-verdura', mom:'cena',
    meses:[1,2,3,4,9,10,11,12], act:12, tot:28, metodo:'Thermomix + sartén',
    tags:['congelable','lista en 8 min'], lista:8,
    ing:[['Champiñones',250],['Setas',100],['Puerro',80],['Patata',90],
         ['Queso fresco batido',60],['Pechuga de pollo',160],['Aceite de oliva',10]],
    pasos:['Saltea champiñones y setas 8 min.','Cuece con puerro y patata 15 min y tritura con el queso.','Marca el pollo y sírvelo encima.']},
  pasta_pollo_brocoli:{n:'Pasta integral con pollo y brócoli', e:'🍝', t:'t-carne', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:20, tot:22, metodo:'Olla',
    tags:['22 minutos','túper 2 días'], tupper:2, lista:22,
    ing:[['Pasta integral',65],['Pechuga de pollo',160],['Brócoli',150],['Ajo',5],
         ['Aceite de oliva',12],['Queso rallado ligero',15]],
    pasos:['Cuece la pasta y el brócoli juntos los últimos 5 min.','Saltea el pollo con el ajo.','Mezcla todo con el queso rallado.']},
  crema_brocoli:{n:'Crema de brócoli con huevo', e:'🥦', t:'t-verdura', mom:'cena',
    meses:[1,2,3,4,10,11,12], act:10, tot:25, metodo:'Thermomix',
    tags:['congelable','lista en 8 min'], lista:8,
    ing:[['Brócoli',280],['Patata',110],['Puerro',60],['Queso fresco batido',60],
         ['Huevo',2,'ud'],['Aceite de oliva',10]],
    pasos:['Cuece brócoli, patata y puerro 18 min.','Tritura con el queso batido.','Sirve con los huevos cocidos partidos.']},
  salmon_lentejas:{n:'Lentejas de bote con salmón y verduras', e:'🐟', t:'t-pescado', mom:'comida',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:15, tot:18, metodo:'Sartén',
    tags:['18 minutos','túper 2 días','omega 3'], tupper:2, lista:18,
    ing:[['Lentejas de bote',200],['Salmón',120],['Cebolleta',40],['Pimiento',70],
         ['Aceite de oliva',10],['Comino',1]],
    pasos:['Marca el salmón 3 min por cara y desmígalo.','Saltea la verdura 6 min.','Mezcla con las lentejas escurridas.']},
  bacalao_garbanzos:{n:'Garbanzos con bacalao y espinacas', e:'🐟', t:'t-pescado', mom:'comida',
    meses:[1,2,3,4,11,12], act:15, tot:30, metodo:'Olla',
    tags:['túper 3 días','congelable','tanda del domingo'], tupper:3,
    ing:[['Garbanzos de bote',170],['Bacalao fresco',150],['Espinacas frescas',120],
         ['Tomate triturado',80],['Ajo',5],['Aceite de oliva',12],['Pimentón',2]],
    pasos:['Sofríe el ajo con el pimentón y el tomate.','Añade garbanzos y espinacas, 8 min.','Incorpora el bacalao en tacos 5 min más.']},
  coliflor_pavo_horno:{n:'Coliflor al horno con pavo y queso', e:'🧀', t:'t-carne', mom:'cena',
    meses:[1,2,3,4,10,11,12], act:12, tot:40, metodo:'Horno',
    tags:['congelable','túper 2 días'], tupper:2,
    ing:[['Coliflor',280],['Pavo picado',150],['Tomate triturado',90],['Cebolla',50],
         ['Queso rallado ligero',20],['Aceite de oliva',10]],
    pasos:['Asa la coliflor en floretes 20 min a 200°.','Saltea el pavo con la cebolla y el tomate.','Junta, cubre con el queso y gratina 8 min.']},
  boniato_relleno:{n:'Boniato relleno de atún y queso', e:'🍠', t:'t-pescado', mom:'comida',
    meses:[9,10,11,12,1,2], act:10, tot:45, metodo:'Horno',
    tags:['túper 3 días','se come frío o caliente'], tupper:3,
    ing:[['Boniato',260],['Atún al natural',1,'ud'],['Cebolleta',40],['Queso rallado ligero',20],
         ['Aceite de oliva',10]],
    pasos:['Asa el boniato entero 40 min a 200°.','Ábrelo y mezcla la pulpa con el atún y la cebolleta.','Rellena y gratina 5 min con el queso.']},
  coles_jamon_huevo:{n:'Coles de Bruselas con jamón cocido y huevo', e:'🥬', t:'t-verdura', mom:'cena',
    meses:[10,11,12,1,2,3], act:15, tot:22, metodo:'Sartén',
    tags:['22 minutos'], lista:22,
    ing:[['Coles de Bruselas',250],['Jamón cocido',70],['Huevo',2,'ud'],['Ajo',5],['Aceite de oliva',12]],
    pasos:['Cuece las coles 8 min y saltéalas con el ajo.','Añade el jamón en dados.','Termina con los huevos revueltos por encima.']},
  acelgas_garbanzos:{n:'Acelgas con garbanzos', e:'🌿', t:'t-legumbre', mom:'comida',
    meses:[10,11,12,1,2,3,4], act:12, tot:25, metodo:'Sartén',
    tags:['túper 3 días','IG bajo','25 minutos'], tupper:3, lista:25,
    ing:[['Acelgas',250],['Garbanzos de bote',170],['Ajo',6],['Pimentón',2],
         ['Aceite de oliva',12],['Huevo',1,'ud']],
    pasos:['Cuece las acelgas 8 min y escúrrelas.','Dora el ajo con el pimentón.','Añade acelgas y garbanzos, 6 min. Corona con el huevo.']},
  alcachofas_pollo_horno:{n:'Alcachofas al horno con pollo', e:'🌿', t:'t-carne', mom:'comida',
    meses:[11,12,1,2,3,4], act:15, tot:45, metodo:'Horno',
    tags:['túper 2 días','tanda del domingo'], tupper:2,
    ing:[['Alcachofa',220],['Contramuslo de pollo',160],['Patata',120],['Ajo',6],
         ['Aceite de oliva',12],['Pimentón',2]],
    pasos:['Limpia las alcachofas y pártelas por la mitad.','Todo a la bandeja con ajo y pimentón.','40 min a 200°, dándole la vuelta a mitad.']},
  pisto_alubias:{n:'Pisto con alubias', e:'🫘', t:'t-legumbre', mom:'comida',
    meses:[6,7,8,9,10], act:15, tot:35, metodo:'Olla',
    tags:['túper 3 días','congelable','tanda del domingo','IG bajo'], tupper:3,
    ing:[['Alubias de bote',180],['Calabacín',120],['Berenjena',110],['Pimiento',90],
         ['Tomate triturado',110],['Cebolla',50],['Aceite de oliva',12]],
    pasos:['Pocha la verdura en dados 18 min.','Añade el tomate y cocina 8 min.','Incorpora las alubias escurridas 5 min.']},
  tortilla_pimientos:{n:'Tortilla de pimientos', e:'🫑', t:'t-huevo', mom:'cena',
    meses:[5,6,7,8,9,10], act:12, tot:18, metodo:'Sartén', temp:'pimiento de temporada',
    tags:['18 minutos'], lista:18,
    ing:[['Huevo',2,'ud'],['Clara de huevo',80],['Pimiento',180],
         ['Cebolla',50],['Aceite de oliva',10]],
    pasos:['Pocha los pimientos con la cebolla 12 min.','Bate huevos y claras.','Cuaja 4 min por lado.']},
  crema_judias:{n:'Crema de judías verdes y patata con pavo', e:'🥣', t:'t-verdura', mom:'cena',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:10, tot:28, metodo:'Thermomix + sartén',
    tags:['congelable','lista en 8 min','judías verdes trituradas'], lista:8,
    ing:[['Judías verdes congeladas',260],['Patata',110],['Cebolla',50],['Queso fresco batido',60],
         ['Pavo en tiras',160],['Aceite de oliva',10]],
    pasos:['Cuece las judías con la patata y la cebolla 20 min.','Tritura con el queso batido.','Marca el pavo y sírvelo encima.'],
    nota:'Las judías verdes van trituradas, como en la crema de calabacín.'},
  sopa_ajo:{n:'Sopa de ajo con huevo', e:'🍜', t:'t-huevo', mom:'cena',
    meses:[11,12,1,2,3], act:12, tot:20, metodo:'Olla',
    tags:['20 minutos','aprovecha el pan del día anterior'], lista:20,
    ing:[['Pan del día anterior',70],['Huevo',2,'ud'],['Jamón serrano',30],['Ajo',8],
         ['Pimentón',3],['Aceite de oliva',12]],
    pasos:['Dora el ajo en láminas y añade el pimentón fuera del fuego.','Añade el pan y el agua, 10 min.','Casca los huevos dentro y cuaja 3 min.']},
  porridge_pera:{n:'Porridge de avena con pera y nueces', e:'🍐', t:'t-lacteo', mom:'desayuno',
    meses:[9,10,11,12,1,2,3], act:8, tot:8, metodo:'Olla',
    tags:['dulce','caliente'],
    ing:[['Copos de avena',55],['Leche de avena',200],['Pera',1,'ud'],['Nueces',12],['Canela',1]],
    pasos:['Cuece la avena con la bebida de avena 5 min.','Añade la pera en dados.','Termina con las nueces y la canela.']},
  avena_noche_platano:{n:'Avena de la noche anterior con plátano y cacahuete', e:'🥣', t:'t-lacteo', mom:'desayuno',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:5, tot:5, metodo:'Sin fuego',
    tags:['dulce','se deja hecho','para llevar'],
    ing:[['Copos de avena',55],['Yogur natural',1,'ud'],['Leche de avena',80],['Plátano',1,'ud'],['Crema de cacahuete',15]],
    pasos:['La noche antes: mezcla la avena, el yogur y la bebida de avena en el táper.',
      'A la nevera hasta la mañana siguiente.','Por la mañana añade el plátano en rodajas y la crema de cacahuete.',
      'Se come frío: no hace falta microondas.']},
  avena_noche_melocoton:{n:'Avena de la noche anterior con melocotón y almendras', e:'🍑', t:'t-lacteo', mom:'desayuno',
    meses:[5,6,7,8,9], act:5, tot:5, metodo:'Sin fuego',
    tags:['dulce','se deja hecho','para llevar'],
    ing:[['Copos de avena',55],['Skyr natural',125],['Leche de avena',70],['Melocotón',1,'ud'],['Almendras crudas',15]],
    pasos:['La noche antes: avena, skyr y bebida de avena al táper, a la nevera.',
      'Por la mañana corta el melocotón encima y añade las almendras.','Se come frío, con cuchara y sin calentar.']},
  bol_skyr_higos:{n:'Bol de skyr con higos y nueces', e:'🫐', t:'t-lacteo', mom:'desayuno',
    meses:[7,8,9,10], act:4, tot:4, metodo:'Sin fuego',
    tags:['dulce','4 minutos','para llevar'],
    ing:[['Skyr natural',180],['Higos frescos',2,'ud'],['Nueces',15],['Copos de avena',30],['Canela',1]],
    pasos:['Skyr al táper con los copos de avena.','Encima los higos partidos y las nueces.','Canela por encima.']},
  batido_platano:{n:'Batido de plátano y cacahuete', e:'🥤', t:'t-lacteo', mom:'snack',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:3, tot:3, metodo:'Thermomix',
    tags:['pre-entreno','3 minutos'],
    ing:[['Leche de avena',200],['Plátano',1,'ud'],['Crema de cacahuete',15],['Canela',1]],
    pasos:['Todo a la batidora 30 segundos.']},
  macedonia_verano:{n:'Macedonia de sandía, melón y uvas', e:'🍉', t:'t-fruta', mom:'snack',
    meses:[6,7,8,9], act:4, tot:4, metodo:'Sin cocción', temp:'fruta de verano',
    tags:['fruta de verano','muy hidratante'],
    ing:[['Sandía',180],['Melón',150],['Uvas',80],['Almendras crudas',15]],
    pasos:['Trocear y mezclar. Mejor muy fría.']},
  melon_pavo:{n:'Melón con pavo', e:'🍈', t:'t-fruta', mom:'snack',
    meses:[6,7,8,9], act:2, tot:2, metodo:'Sin cocción', temp:'melón de temporada',
    tags:['fruta de verano','proteína'],
    ing:[['Melón',220],['Pavo en lonchas',70]], pasos:['Cortar y envolver.']},
  granada_kiwi_queso:{n:'Granada y kiwi con queso batido', e:'🥝', t:'t-fruta', mom:'snack',
    meses:[10,11,12,1,2], act:4, tot:4, metodo:'Sin cocción', temp:'granada y kiwi de temporada',
    tags:['fruta de invierno','alto en proteína','fibra'],
    ing:[['Granada',90],['Kiwi',1,'ud'],['Queso fresco batido',150]],
    pasos:['Desgranar, trocear y mezclar.']},
  mandarina_almendras:{n:'Mandarinas y almendras', e:'🍊', t:'t-fruta', mom:'snack',
    meses:[11,12,1,2,3], act:1, tot:1, metodo:'Sin cocción', temp:'mandarina de temporada',
    tags:['fruta de invierno'],
    ing:[['Mandarina',3,'ud'],['Almendras crudas',20]], pasos:['Pelar y comer.']},
  compota_manzana_pera:{n:'Compota de manzana y pera con canela', e:'🍎', t:'t-fruta', mom:'snack',
    meses:[9,10,11,12,1,2,3], act:5, tot:20, metodo:'Olla',
    tags:['sin azúcar añadido','aguanta 4 días'],
    ing:[['Manzana',1,'ud'],['Pera',1,'ud'],['Canela',2],['Yogur natural',1,'ud']],
    pasos:['Cuece la fruta troceada 15 min con la canela.','Tritura ligeramente y sirve con el yogur.']},
  caqui_granada:{n:'Caqui con granada y queso fresco', e:'🟠', t:'t-fruta', mom:'snack',
    meses:[10,11,12], act:3, tot:3, metodo:'Sin cocción', temp:'caqui y granada de temporada',
    tags:['fruta de otoño','proteína'],
    ing:[['Caqui',1,'ud'],['Granada',60],['Queso fresco',90]], pasos:['Trocear y montar.']},
  cerezas_yogur:{n:'Cerezas con yogur y almendras', e:'🍒', t:'t-fruta', mom:'snack',
    meses:[5,6,7], act:2, tot:2, metodo:'Sin cocción', temp:'cereza de temporada',
    tags:['fruta de primavera'],
    ing:[['Cerezas',150],['Yogur natural',1,'ud'],['Almendras crudas',15]], pasos:['Mezclar.']},
  ciruelas_requeson:{n:'Ciruelas con requesón', e:'🫐', t:'t-fruta', mom:'snack',
    meses:[7,8,9], act:2, tot:2, metodo:'Sin cocción', temp:'ciruela de temporada',
    tags:['fruta de verano','alto en proteína'],
    ing:[['Ciruelas',180],['Requesón',120]], pasos:['Trocear sobre el requesón.']},
  tosta_requeson_higos:{n:'Tosta de requesón e higos', e:'🫐', t:'t-lacteo', mom:'desayuno',
    meses:[7,8,9], act:5, tot:5, metodo:'Tostadora', temp:'higos de temporada',
    tags:['dulce','5 minutos'],
    ing:[['Pan de centeno',60],['Requesón',120],['Higos frescos',100],['Nueces',10]],
    pasos:['Tuesta el pan.','Extiende el requesón y coloca los higos.','Termina con las nueces.']},
  huevos_aguacate_cena:{n:'Huevos al plato con aguacate y tomate', e:'🥑', t:'t-huevo', mom:'cena',
    meses:[1,2,3,4,5,6,7,8,9,10,11,12], act:12, tot:20, metodo:'Horno',
    tags:['20 minutos'], lista:20,
    ing:[['Huevo',2,'ud'],['Aguacate',70],['Tomate triturado',120],['Cebolla',50],
         ['Pan integral',40],['Aceite de oliva',10]],
    pasos:['Pocha la cebolla con el tomate 10 min.','Casca los huevos encima y hornea 8 min a 190°.','Sirve con el aguacate y el pan.']}
};

/* meses de temporada de las recetas de verano ya existentes */
const MESES_VERANO={tostada_tomate:[5,6,7,8,9],revuelto_champi:[1,2,3,4,5,6,7,8,9,10,11,12],
 skyr_melocoton:[5,6,7,8,9],tortitas:[1,2,3,4,5,6,7,8,9,10,11,12],fruta_nueces:[5,6,7,8,9],
 higos_queso:[7,8,9],sandia_almendras:[6,7,8,9],uvas_yogur:[8,9,10],platano_cacahuete:[1,2,3,4,5,6,7,8,9,10,11,12],
 pera_pavo:[1,2,3,4,5,6,7,8,9,10,11,12],melon_jamon:[6,7,8,9],ciruelas_almendras:[7,8,9],
 yogur_nueces:[1,2,3,4,5,6,7,8,9,10,11,12],tomate_requeson:[5,6,7,8,9],
 huevos_aguacate:[1,2,3,4,5,6,7,8,9,10,11,12],tostada_atun:[5,6,7,8,9],
 gazpacho_pollo:[5,6,7,8,9],lentejas_frias:[4,5,6,7,8,9],pisto_huevo:[6,7,8,9,10],
 merluza_pisto:[1,2,3,4,5,6,7,8,9,10,11,12],pollo_pimientos:[5,6,7,8,9,10],
 chili:[1,2,3,4,5,6,7,8,9,10,11,12],garbanzos_atun:[5,6,7,8,9],
 crema_calabacin:[1,2,3,4,5,6,7,8,9,10,11,12],berenjenas:[6,7,8,9,10],
 tortilla_calabacin:[1,2,3,4,5,6,7,8,9,10,11,12],salmorejo_huevo:[5,6,7,8,9],pavo_verduras:[5,6,7,8,9]};
for (const k in MESES_VERANO) if (R[k]) R[k].meses = MESES_VERANO[k];
/* Red de seguridad: una receta sin temporada declarada está disponible todo el año.
   Antes esto reventaba la auditoría en vez de avisar, que es peor. */
const TODO_EL_ANO = [1,2,3,4,5,6,7,8,9,10,11,12];
for (const k in R) if (!Array.isArray(R[k].meses)) R[k].meses = TODO_EL_ANO;

/* ─── escalado por ingrediente ─── */
const FACTOR = {c:0.93, t:1.25};  // calculados desde el objetivo calórico de cada uno
function escala(nombre, cant, unidad, persona){
  const modo = ING[nombre][4], f = FACTOR[persona];
  if(modo === 'f') return cant;                       // aceite, especias: igual
  if(modo === 'u' || unidad === 'ud'){                // huevos, latas, piezas
    return Math.max(1, Math.round(cant * f));
  }
  const v = cant * f;                                 // el resto: redondeo a 5 g
  return v < 20 ? Math.round(v) : Math.round(v/5)*5;
}
function gramos(nombre, cant, unidad){
  const pu = ING[nombre][3];
  return (unidad === 'ud' && pu) ? cant * pu : cant;
}
function nutre(rec, persona){
  let kcal = 0, prot = 0;
  for(const [n, c, u] of R[rec].ing){
    const q = escala(n, c, u, persona);
    const g = gramos(n, q, u);
    kcal += g * ING[n][0] / 100;
    prot += g * ING[n][1] / 100;
  }
  return {kcal: Math.round(kcal), prot: Math.round(prot)};
}

const MOM = ['desayuno','media','comida','merienda','cena'];
const MENU = [
 {d:'L',n:'17',desayuno:'tostada_tomate',media:'fruta_nueces',comida:'pollo_pimientos',merienda:'uvas_yogur',cena:'tortilla_calabacin'},
 {d:'M',n:'18',desayuno:'skyr_melocoton',media:'higos_queso',comida:'chili',merienda:'pera_pavo',cena:'merluza_pisto'},
 {d:'X',n:'19',desayuno:'revuelto_champi',media:'fruta_nueces',comida:'lentejas_frias',merienda:'platano_cacahuete',cena:'crema_calabacin'},
 {d:'J',n:'20',desayuno:'revuelto_champi',media:'higos_queso',comida:'pollo_pimientos',merienda:'pera_pavo',cena:'merluza_pisto'},
 {d:'V',n:'21',desayuno:'skyr_melocoton',media:'higos_queso',comida:'chili',merienda:'pera_pavo',cena:'pavo_verduras'},
 {d:'S',n:'22',desayuno:'tortitas',media:'sandia_almendras',comida:'gazpacho_pollo',merienda:'fruta_nueces',cena:'berenjenas'},
 {d:'D',n:'23',desayuno:'revuelto_champi',media:'higos_queso',comida:'garbanzos_atun',merienda:'pera_pavo',cena:'pisto_huevo'}
];

/* ── ¿SE PUEDE LLEVAR A LA OFICINA? ───────────────────────────────────────
   No es lo mismo que «aguanta en túper»: eso mide días en la nevera, esto mide
   si se come fuera de casa sin plato ni microondas. Una tostada aguanta tres
   días en la nevera y llega blanda a las 11; un revuelto hay que comerlo caliente.
     2 = se lleva tal cual (fruta, frutos secos)
     1 = se lleva en táper y aguanta (yogures, porridge, tortitas, ensaladas)
     0 = solo en casa (tostadas, revueltos, cremas calientes)                */
const SOLO_CASA = ['tostada_tomate','revuelto_champi','huevos_aguacate','tostada_atun',
                   'revuelto_setas','tosta_requeson_higos'];
const CON_TAPER = ['avena_noche_platano','avena_noche_melocoton','bol_skyr_higos',
                   'avena_noche_frutos','tortitas_harina_avena','yogur_frutos_chia',
                   'skyr_melocoton','tortitas','porridge_manzana','avena_naranja','porridge_pera',
                   'higos_queso','uvas_yogur','yogur_nueces','tomate_requeson','caqui_yogur',
                   'manzana_queso','granada_skyr','mandarinas_queso','kiwi_yogur','fresas_skyr',
                   'batido_platano','macedonia_verano','granada_kiwi_queso','compota_manzana_pera',
                   'caqui_granada','cerezas_yogur','ciruelas_requeson','melon_jamon','melon_pavo',
                   'pera_pavo','platano_cacahuete'];
for (const k in R) {
  const r = R[k];
  if (SOLO_CASA.includes(k))      r.port = 0;
  else if (CON_TAPER.includes(k)) r.port = 1;
  else if (r.mom === 'snack')     r.port = 2;      // fruta y frutos secos, tal cual
  else if (r.mom === 'comida')    r.port = r.tupper >= 1 ? 1 : 0;
  else                            r.port = 0;      // cenas: siempre en casa
}

/* extras diarios fijos: hábitos que no son comidas pero sí calorías */
const EXTRAS = {
  c: [],
  t: [{n:'Café con leche de avena', e:'☕', ing:[['Café solo',120],['Leche de avena',100]], cuando:'06:45'}]
};

/* alergias: bloqueo duro, distinto de una aversión */
const ALERGIAS = {
  c: [{ing:'Calamar', nota:'y sepia. El pulpo sí puede'}, {ing:'Sepia', nota:''}],
  t: []
};

/* ── precios de referencia Mercadona, €/kg (o €/ud vía peso_ud) ── */
const PRECIO={'Pan integral':2.2,'Pan de centeno':3.0,'Pan del día anterior':1.8,'Tomate maduro':1.6,
 'Tomate':1.6,'Tomate triturado':1.2,'Pavo en lonchas':9.0,'Pavo en tiras':8.5,'Pavo picado':8.0,
 'Jamón serrano':14,'Aceite de oliva':9.0,'Aceite de oliva virgen':10,'Vinagre de Jerez':2,'Salsa de soja':4,
 'Ajo':6,'Canela':20,'Comino':20,'Comino y pimentón':20,'Pimentón':20,'Huevo':3.2,'Clara de huevo':3.5,
 'Champiñones':3.5,'Queso fresco':6,'Queso fresco batido':2.4,'Queso rallado ligero':8,'Skyr natural':5.5,
 'Yogur natural':1.6,'Copos de avena':1.6,'Melocotón':1.9,'Plátano':1.6,'Pera':1.8,'Higos frescos':4.8,
 'Sandía':0.9,'Uvas':2.1,'Nueces':9,'Almendras crudas':11,'Crema de cacahuete':7,'Pepino':1.8,
 'Pimiento verde':2.2,'Pimiento rojo':2.6,'Pimiento':2.4,'Cebolla':1.1,'Cebolleta':2.0,'Berenjena':1.8,
 'Calabacín':1.4,'Patata':1.2,'Zanahoria':1.0,'Judías verdes congeladas':1.9,'Lentejas pardina':2.0,
 'Garbanzos de bote':1.6,'Alubias de bote':1.6,'Atún al natural':9,'Pechuga de pollo':6.5,
 'Contramuslo de pollo':4.5,'Ternera picada':9.5,'Merluza congelada':8.5,'Lentejas de bote':1.8,'Pasta integral':1.9,'Brócoli':2.4,'Calabaza':1.3,'Puerro':1.9,'Boniato':1.8,'Coles de Bruselas':3.2,
 'Setas':4.5,'Acelgas':1.8,'Coliflor':1.9,'Espinacas frescas':3.0,'Alcachofa':3.5,'Espárragos trigueros':6.0,
 'Guisantes':2.2,'Caqui':2.2,'Granada':2.8,'Manzana':1.8,'Naranja':1.3,'Mandarina':1.8,'Kiwi':2.6,
 'Fresas':3.5,'Cerezas':6.0,'Bacalao fresco':12,'Salmón':14,'Arroz integral':1.8,'Lechuga':1.6,'Jamón cocido':8,
 'Melón':1.1,'Quinoa':5.5,'Frutos rojos congelados':5.0,'Harina de avena':3.0,
 'Filete de ternera':12,'Semillas de chía':8.0,'Ciruelas':2.2,'Aguacate':5.5,'Requesón':4.5,'Café solo':12,'Leche de avena':1.4,'Cerveza':1.2,'Aquarius de limón':1.5};

/* ── formato de venta en Mercadona: no se compran gramos, se compran envases ── */
const FORMATO={'Pan integral':500,'Pan de centeno':500,'Pan del día anterior':500,'Tomate maduro':1000,
 'Tomate':1000,'Tomate triturado':400,'Pavo en lonchas':150,'Pavo en tiras':400,'Pavo picado':400,
 'Jamón serrano':100,'Aceite de oliva':1000,'Aceite de oliva virgen':1000,'Huevo':720,'Clara de huevo':500,
 'Champiñones':250,'Queso fresco':250,'Queso fresco batido':500,'Skyr natural':450,'Yogur natural':500,
 'Copos de avena':500,'Melocotón':1000,'Plátano':1000,'Pera':1000,'Higos frescos':500,'Sandía':3000,
 'Uvas':500,'Nueces':200,'Almendras crudas':200,'Crema de cacahuete':330,'Pepino':400,'Pimiento verde':500,
 'Pimiento rojo':500,'Pimiento':500,'Cebolla':1000,'Cebolleta':300,'Berenjena':500,'Calabacín':500,
 'Patata':2000,'Judías verdes congeladas':750,'Lentejas pardina':500,'Garbanzos de bote':400,
 'Alubias de bote':400,'Atún al natural':240,'Pechuga de pollo':500,'Contramuslo de pollo':800,
 'Ternera picada':400,'Merluza congelada':400,'Melón':2000,'Ciruelas':500,'Aguacate':400,'Requesón':250,
 'Brócoli':500,'Calabaza':1000,'Puerro':500,'Boniato':1000,'Coles de Bruselas':500,'Setas':250,'Acelgas':500,
 'Coliflor':800,'Espinacas frescas':300,'Alcachofa':500,'Espárragos trigueros':250,'Guisantes':750,'Caqui':1000,
 'Granada':500,'Manzana':1000,'Naranja':2000,'Mandarina':1000,'Kiwi':500,'Fresas':500,'Cerezas':500,
 'Lentejas de bote':400,'Pasta integral':500,'Quinoa':500,'Frutos rojos congelados':400,
 'Harina de avena':500,'Filete de ternera':400,'Semillas de chía':250,'Bacalao fresco':400,'Salmón':300,'Arroz integral':1000,'Lechuga':300,'Jamón cocido':200};
const fmt=g=>g>=1000?(+(g/1000).toFixed(2))+' kg':g+' g';

/* dónde vive cada cosa: condiciona avisos y espacio */
const UBIC={'Merluza congelada':'congelador','Judías verdes congeladas':'congelador',
 'Huevo':'nevera','Skyr natural':'nevera','Yogur natural':'nevera','Queso fresco':'nevera',
 'Queso fresco batido':'nevera','Requesón':'nevera','Clara de huevo':'nevera','Pavo en lonchas':'nevera',
 'Tomate maduro':'nevera','Tomate':'nevera','Calabacín':'nevera','Pepino':'nevera','Pimiento':'nevera',
 'Cebolleta':'nevera','Champiñones':'nevera','Melocotón':'nevera','Uvas':'nevera','Plátano':'armario',
 'Pechuga de pollo':'nevera','Leche de avena':'nevera','Guisantes':'congelador','Bacalao fresco':'nevera',
 'Salmón':'nevera','Brócoli':'nevera','Calabaza':'nevera','Puerro':'nevera','Coles de Bruselas':'nevera',
 'Setas':'nevera','Acelgas':'nevera','Coliflor':'nevera','Espinacas frescas':'nevera','Alcachofa':'nevera',
 'Espárragos trigueros':'nevera','Caqui':'nevera','Granada':'nevera','Kiwi':'nevera','Fresas':'nevera',
 'Cerezas':'nevera','Lechuga':'nevera','Jamón cocido':'nevera',
 'Frutos rojos congelados':'congelador','Filete de ternera':'congelador'};
const ubic=n=>UBIC[n]||'armario';
const UB_LAB={nevera:['🧊','Nevera'],congelador:['❄️','Congelador'],armario:['🗄','Armario']};

/* Lo que entra sin ticket: huerta, regalos, otra tienda.
   Cuesta 0 € en caja pero SÍ vale su precio de referencia en el consumo:
   si no, la huerta desaparecería del cálculo en vez de verse como ahorro. */
const ORIGENES={huerta:['🌱','De la huerta'],regalo:['🎁','Regalo'],otra:['🏪','Otra tienda'],
                pesca:['🎣','Pesca o caza'],ticket:['🧾','Compra']};
const ESPONTANEOS=[
  {n:'Calabacín', g:1400, origen:'huerta', fecha:'ayer', cad:'2026-08-26'},
  {n:'Tomate maduro', g:2200, origen:'huerta', fecha:'ayer', cad:'2026-08-23'},
  {n:'Acelgas', g:600, origen:'huerta', fecha:'hoy', cad:'2026-08-22'}];

/* Qué hacer con lo que llega de golpe y no da tiempo a comer */
/* Conservar no es guardar: cambia el sitio, la fecha y la cantidad. Sin esas tres
   cosas la despensa no se entera de que 1,4 kg de calabacín siguen existiendo. */
const CONSERVAS=[
  {id:'congelar', m:'Congelar en raciones', e:'❄️', dura:'8-10 meses', meses:9, ubic:'congelador', merma:0.95,
   apto:'verdura cocida, purés, sofritos, carne y pescado',
   nota:'Lo más rápido: escaldar 2 min, enfriar y a bolsas de una ración'},
  {id:'frasco', m:'Conserva en frasco', e:'🫙', dura:'12 meses', meses:12, ubic:'armario', merma:0.80,
   apto:'tomate, pisto, mermelada, legumbre cocida',
   nota:'Frascos esterilizados y baño maría 30 min'},
  {id:'encurtido', m:'Encurtido en vinagre', e:'🥒', dura:'6 meses', meses:6, ubic:'armario', merma:0.85,
   apto:'pepino, zanahoria, cebolleta, coliflor',
   nota:'Agua, vinagre y sal a partes; listo en 48 h'},
  {id:'secar', m:'Secar o deshidratar', e:'☀️', dura:'12 meses', meses:12, ubic:'armario', merma:0.12,
   apto:'tomate, hierbas, setas',
   nota:'Horno a 70° con la puerta entreabierta, 4-6 h'},
  {id:'regalar', m:'Regalar o compartir', e:'🤝', dura:'—', meses:0, ubic:null, merma:0,
   apto:'lo que no vais a poder aprovechar',
   nota:'Mejor que tirarlo dentro de dos semanas'}];
/* Conservas hechas: dónde están, cuánto queda y hasta cuándo */
const CONSERVAS_HECHAS=[];

/* lo que se ha tirado este mes: objetivo declarado del proyecto */
const DESPERDICIO=[{n:'Espinacas frescas',g:250,eur:1.10,fecha:'2 ago',motivo:'caducadas'},
 {n:'Pan integral',g:180,eur:0.40,fecha:'7 ago',motivo:'duro'},
 {n:'Queso fresco batido',g:200,eur:0.48,fecha:'11 ago',motivo:'caducado'}];

/* precios corregidos con los tickets reales */
const PRECIO_REAL={'Contramuslo de pollo':4.28,'Melocotón':2.05,'Skyr natural':5.90,'Huevo':3.45};

/* ── alternativas más baratas, para el aviso de presupuesto ── */
const ALT_BARATO={'Pavo en lonchas':'cambiar por huevo cocido o atún','Ternera picada':'mitad ternera, mitad lentejas',
 'Higos frescos':'alternar con sandía o plátano','Pechuga de pollo':'usar contramuslo','Pavo en tiras':'usar pollo',
 'Merluza congelada':'caballa o sardina','Jamón serrano':'reducir a la mitad','Almendras crudas':'reducir a 15 g',
 'Nueces':'reducir a 15 g','Pavo picado':'mitad pavo, mitad lenteja','Melocotón':'alternar con sandía'};

/* ── despensa actual (gramos) ── */
const DESPENSA={'Lentejas pardina':[900,'2027-06-01'],'Copos de avena':[700,'2027-02-01'],
 'Garbanzos de bote':[600,'2028-01-01'],'Alubias de bote':[400,'2028-01-01'],'Atún al natural':[320,'2028-05-01'],
 'Tomate triturado':[800,'2027-04-01'],'Aceite de oliva':[900,'2027-01-01'],'Aceite de oliva virgen':[500,'2027-01-01'],
 'Huevo':[720,'2026-08-26'],'Cebolla':[1200,'2026-09-10'],'Patata':[2000,'2026-09-20'],
 'Judías verdes congeladas':[600,'2027-03-01'],'Merluza congelada':[400,'2027-02-01'],
 'Pan integral':[300,'2026-08-19'],'Pan de centeno':[300,'2026-08-21'],'Skyr natural':[600,'2026-08-24'],
 'Ajo':[150,'2026-10-01'],'Pimentón':[80,'2027-05-01'],'Comino':[60,'2027-05-01'],'Comino y pimentón':[60,'2027-05-01'],
 'Canela':[50,'2027-05-01'],'Vinagre de Jerez':[400,'2028-01-01'],'Salsa de soja':[300,'2028-01-01'],
 'Queso fresco batido':[500,'2026-08-22'],'Queso fresco':[200,'2026-08-25'],'Yogur natural':[750,'2026-08-28'],
 'Tomate maduro':[900,'2026-08-22'],'Tomate':[400,'2026-08-22'],'Calabacín':[700,'2026-08-27'],
 'Pepino':[300,'2026-08-24'],'Pimiento':[450,'2026-08-27'],'Cebolleta':[200,'2026-08-25'],
 'Champiñones':[250,'2026-08-20'],'Melocotón':[720,'2026-08-21'],'Uvas':[400,'2026-08-23'],
 'Plátano':[550,'2026-08-24'],'Nueces':[200,'2027-01-01'],'Almendras crudas':[150,'2027-01-01'],
 'Pechuga de pollo':[350,'2026-08-20'],'Clara de huevo':[300,'2026-08-28'],'Crema de cacahuete':[300,'2027-06-01']};

const PERFILES={
 c:{nombre:'Cristina',acc:'#2a78d6',accTxt:'#1f5da8',saludo:'Buenos días, Cristina',lugar:'Comida en la oficina · túper',
    kcalMin:1600,kcalMax:1750,protMin:100,peso:'90,9',delta:'−0,4 kg esta semana',
    adherencia:86,enRango:71,
    /* Historial real de cómo se fijó el rango. Decía «Semana 3: la pérdida real
       fue menor que la esperada» sin que hubiera habido ninguna semana. */
    calib:[['Punto de partida','1.650 – 1.800','estimación por fórmula con tu peso, altura y actividad'],
           ['Primera revisión','pendiente','a las tres semanas del arranque, con el peso real de la báscula']],
    entreno:{tipo:'sesion',titulo:'Fuerza B — cuerpo completo',meta:'Forus · 45 min · hoy 19:00'},
    semana:[['L','17','Fuerza A · con Tama','gym'],['M','18','Cardio en Forus · a elegir','cardio'],['X','19','Solo base de pasos','off'],
            ['J','20','Fuerza B · con Tama','gym'],['V','21','Solo base de pasos','off'],['S','22','Salida larga · 60-75 min','soft'],['D','23','Descanso','off']],
    ejercicios:[{n:'Sentadilla con barra',p:'3 × 8-10 @ 40 kg',sets:[[8,40],[8,40],[8,40]],fig:'fig-sentadilla',
        clave:'Rodillas hacia fuera, pecho arriba. Baja hasta que el muslo quede paralelo, no más.'},
      {n:'Press banca mancuernas',p:'3 × 8-10 @ 12 kg',sets:[[10,12],[10,12],[10,12]],fig:'fig-press',
        clave:'Codos a 45°, no abiertos del todo. Omóplatos apretados contra el banco.'},
      {n:'Remo en polea baja',p:'3 × 10-12 @ 30 kg',sets:[[10,30],[10,30],[10,30]],fig:'fig-remo',
        clave:'Tira con el codo, no con la mano. La espalda no se balancea.'},
      {n:'Peso muerto rumano',p:'3 × 10 @ 30 kg',sets:[[10,30],[10,30],[10,30]],fig:'fig-pmr',
        clave:'Cadera atrás, rodillas casi rectas. Baja hasta notar el isquio, no hasta el suelo.'},
      {n:'Plancha frontal',p:'3 × 40 s',sets:[[40,0],[40,0],[40,0]],t:true,fig:'fig-plancha',
        clave:'Glúteo apretado y costillas abajo. Si la lumbar se hunde, se acabó la serie.'},
      {n:'Movilidad de cadera · 90/90',p:'2 × 60 s por lado',sets:[[60,0],[60,0]],t:true,mov:true,fig:'fig-9090',
        clave:'Sentada, una pierna a 90° delante y otra a 90° al lado. Pecho arriba, gira despacio.'},
      {n:'Apertura torácica en cuadrupedia',p:'2 × 8 por lado',sets:[[8,0],[8,0]],mov:true,fig:'fig-toracica',
        clave:'Mano en la nuca, abre el codo al techo siguiéndolo con la mirada. La cadera no gira.'},
      {n:'Estiramiento de isquios y psoas',p:'2 × 45 s por lado',sets:[[45,0],[45,0]],t:true,mov:true,fig:'fig-psoas',
        clave:'En zancada, mete la pelvis por debajo antes de empujar. Se nota delante de la cadera.'}],
    logica:['<b>2 sesiones de fuerza</b> es la dosis mínima eficaz, no un plan corto: el grueso del beneficio está en pasar de 0 a 2. Sube a 3 en la semana 5 si la adherencia se mantiene sobre el 80 %.',
      '<b>Bloque de movilidad al final de cada sesión</b>: cadera, columna dorsal e isquios. Ocho minutos que evitan que las cargas suban sobre un cuerpo rígido.',
      '<b>10-15 min de paseo después de comer.</b> Con resistencia a la insulina es de las palancas más rentables que existen y no cuesta casi nada.',
      '<b>Doble progresión</b>: trabajas dentro de un rango de repeticiones; al completar el tope dos veces seguidas, la carga sube 2,5 kg.',
      'El cardio intenso no es la palanca principal en déficit: añade fatiga y compite con la recuperación.']},
 t:{nombre:'Tama',acc:'#eb6834',accTxt:'#b8471c',saludo:'Buenos días, Tama',lugar:'Teletrabajo · come en casa',
    kcalMin:1950,kcalMax:2100,protMin:130,peso:'73,9',delta:'−0,1 kg esta semana',
    adherencia:79,enRango:64,
    calib:[['Punto de partida','2.300 – 2.450','estimación por fórmula, contando el fútbol sala como entrenamiento'],
           ['Corregido antes de arrancar','1.950 – 2.100','dirigir un entreno no es gasto tuyo. Déficit real de unas 290 kcal'],
           ['Primera revisión','pendiente','a las tres semanas, con el peso real y cómo vaya el hambre']],
    entreno:{tipo:'profesional',titulo:'Entrena al equipo',meta:'20:00-21:30 · actividad profesional'},
    semana:[['L','17','Fuerza A · con Cristina','gym'],['M','18','Solo base de pasos','off'],['X','19','Impartes entreno','work'],
            ['J','20','Fuerza B · con Cristina','gym'],['V','21','Impartes entreno','work'],
            ['S','22','Cardio suave · a elegir','cardio'],['D','23','Partido · lo diriges tú','work']],
    ejercicios:[{n:'Sentadilla con barra',p:'4 × 5-6 @ 85 kg',sets:[[6,85],[6,85],[6,85],[6,85]],fig:'fig-sentadilla',
        clave:'Rodillas hacia fuera, pecho arriba. Con 85 kg el fallo típico es que la cadera suba antes que el pecho.'},
      {n:'Press banca barra',p:'4 × 5-6 @ 65 kg',sets:[[6,65],[6,65],[6,65],[6,65]],fig:'fig-press',
        clave:'Codos a 45°, omóplatos apretados. La barra baja al esternón, no al cuello.'},
      {n:'Dominadas',p:'4 × 6',sets:[[6,0],[6,0],[6,0],[6,0]],fig:'fig-dominada',
        clave:'Empieza con los hombros abajo. Sube hasta que la barbilla pase la barra, sin balanceo.'},
      {n:'Peso muerto rumano',p:'3 × 8 @ 70 kg',sets:[[8,70],[8,70],[8,70]],fig:'fig-pmr',
        clave:'Cadera atrás, rodillas casi rectas, barra pegada a la pierna.'},
      {n:'Elevación de talón a una pierna',p:'3 × 15 · tobillo',sets:[[15,0],[15,0],[15,0]],prev:true,fig:'fig-talon',
        clave:'De pie en un escalón, sube lento y baja más lento aún. Es el sóleo el que protege el tobillo.'},
      {n:'Nórdico excéntrico asistido',p:'3 × 6 · isquios y rodilla',sets:[[6,0],[6,0],[6,0]],prev:true,fig:'fig-nordico',
        clave:'De rodillas, pies sujetos, baja el cuerpo recto todo lo lento que aguantes. Sube con las manos.'},
      {n:'Equilibrio monopodal con perturbación',p:'3 × 40 s por pierna',sets:[[40,0],[40,0],[40,0]],t:true,prev:true,fig:'fig-monopodal',
        clave:'A una pierna, rodilla algo flexionada. Que Cristina te empuje suave y sin avisar.'}],
    logica:['<b>Dirigir un entreno no es entrenar.</b> Miércoles y viernes estás de pie dando instrucciones: eso no es carga para ti. Por eso el bloque incluye tu propio cardio del sábado, que antes no estaba.',
      '<b>2 sesiones de fuerza</b> más una de cardio. Sin el gasto que se le suponía al fútbol sala, la recomposición depende casi entera de la dieta y de que estas tres sesiones no se caigan.',
      '<b>Tobillo y rodilla mandan.</b> Elevación de talón, nórdico excéntrico y equilibrio monopodal van dentro de la sesión, no de propina: son las lesiones que ya has tenido.',
      '<b>Estiramientos de espalda, 10 minutos todos los días</b>, a la hora que te venga bien: al levantarte, en una pausa del teletrabajo o antes de dormir. No es entrenamiento; es lo que hace que las sesiones no se caigan por molestias.',
      '<b>Sesiones propias en teletrabajo o fin de semana.</b> Nunca miércoles ni viernes: esas tardes entrenas tú a otros.',
      'Los domingos que juegues, cuenta como partido y descansa la fuerza al día siguiente.']}};

const MEDICACION={
 c:[{n:'Metformina 850 mg', cuando:'Desayuno', comida:true, e:'💊'},
    {n:'Metformina 850 mg', cuando:'Cena', comida:true, e:'💊'},
    {n:'Letrozol 2,5 mg', cuando:'Noche', comida:false, e:'💊', nota:'días 3-7 del ciclo'}],
 t:[{n:'Bisoprolol 2,5 mg (½)', cuando:'Desayuno', comida:false, e:'💊'},
    {n:'Sedotime 15 mg', cuando:'Noche', comida:false, e:'💊'}]};

const DIAS_PESO=[3,6];   // miércoles y sábado

/* rutinas diarias fijas, fuera de las sesiones.
   Solo Tama: la movilidad de Cristina va DENTRO de sus sesiones de fuerza. */
const RUTINA_DIARIA={
 t:{n:'Estiramientos de espalda', e:'🧘', cuando:'cuando te venga bien', min:10,
    franjas:[['mañana','🌅','Al levantarte','06:30 · antes de la ducha'],
             ['dia','☀️','En algún momento del día','pausa del teletrabajo o antes de entrenar'],
             ['noche','🌙','Por la noche','antes de dormir · también ayuda a conciliar']],
    pasos:[['Gato-camello','10 repeticiones lentas','fig-gato'],
           ['Rodillas al pecho','45 s','fig-rodillas'],
           ['Rotación lumbar tumbado','45 s por lado','fig-rotacion'],
           ['Estiramiento de psoas en zancada','45 s por lado','fig-psoas'],
           ['Isquiotibiales tumbado con banda','45 s por lado','fig-isquios'],
           ['Piramidal · figura 4 tumbado','45 s por lado','fig-piramidal'],
           ['Apertura torácica en cuadrupedia','8 por lado','fig-toracica'],
           ['Postura del niño','60 s','fig-nino'],
           ['Esfinge suave','45 s','fig-esfinge'],
           ['Colgarse de la barra o marco','2 × 20 s','fig-colgar']],
    nota:'Diez minutos, todos los días, a la hora que puedas. No es entrenamiento: es lo que hace que las sesiones no se caigan por molestias. Si un día vas corto, los seis primeros son el mínimo.'}};

/* lo que se toma fuera del plan: bebidas y picoteo. Personalizado por persona. */
const EXTRAS_RAPIDOS={
 t:[{n:'Cerveza (tercio)',e:'🍺',kcal:142,alc:true},{n:'Caña',e:'🍺',kcal:90,alc:true},
    {n:'Copa de vino',e:'🍷',kcal:120,alc:true},{n:'Café fuera',e:'☕',kcal:47},
    {n:'Refresco zero',e:'🥤',kcal:1},{n:'Picoteo salado',e:'🥜',kcal:180},
    {n:'Dulce',e:'🍫',kcal:220},{n:'Otro',e:'➕',kcal:0}],
 c:[{n:'Aquarius de limón',e:'🥤',kcal:120},{n:'Aquarius zero',e:'💧',kcal:5},
    {n:'Refresco zero',e:'🥤',kcal:1},{n:'Copa de vino',e:'🍷',kcal:120,alc:true},
    {n:'Picoteo salado',e:'🥜',kcal:180},{n:'Dulce',e:'🍫',kcal:220},
    {n:'Fruta extra',e:'🍑',kcal:70},{n:'Otro',e:'➕',kcal:0}]};
const PASOS={c:6240, t:4870};          // leídos de Google Fit, sin registro manual
const PASOS_OBJ={c:8000, t:8000};      // base diaria, TODOS los días. No es una sesión.
const PULSERA={c:'Zepp', t:'Mi Fitness'};   // de dónde se copia el número

/* sobras: raciones ya cocinadas que vuelven a la despensa */
const SOBRAS=[{r:'chili', raciones:2, cad:'2026-08-21', origen:'tanda del domingo'},
              {r:'crema_calabacin', raciones:1, cad:'2026-08-20', origen:'cena del lunes'},
              {r:'lentejas_frias', raciones:1, cad:'2026-08-22', origen:'tanda del domingo'}];

/* excepciones planificadas: la vida antes que el plan.
   Van por semana, porque una cena fuera del sábado 22 no es la del sábado 29. */
const TIPOS_EXC={
  fuera:    ['🍽','Comeremos fuera','Se quita de la compra y se ajusta el resto del día','t-fruta'],
  invitados:['👥','Vienen invitados','Escala las raciones de esa comida','t-carne'],
  vacaciones:['✈️','Modo vacaciones','Pausa el plan sin romper medias ni objetivos','t-off']};
const EXCEPCIONES={
 s1:[{fecha:'22', dia:'Sábado', momento:'Cena', tipo:'fuera', txt:'Cena fuera con los de siempre'},
     {fecha:'23', dia:'Domingo', momento:'Comida', tipo:'invitados', txt:'Comen los padres de Cristina · 4 personas'}],
 s2:[]};

/* menú de la semana siguiente: rotación de recetas */
let MENU2=[
 {d:'L',n:'24',desayuno:'skyr_melocoton',media:'higos_queso',comida:'garbanzos_atun',merienda:'pera_pavo',cena:'berenjenas'},
 {d:'M',n:'25',desayuno:'revuelto_champi',media:'fruta_nueces',comida:'lentejas_frias',merienda:'uvas_yogur',cena:'merluza_pisto'},
 {d:'X',n:'26',desayuno:'tostada_tomate',media:'higos_queso',comida:'pollo_pimientos',merienda:'platano_cacahuete',cena:'salmorejo_huevo'},
 {d:'J',n:'27',desayuno:'skyr_melocoton',media:'sandia_almendras',comida:'chili',merienda:'pera_pavo',cena:'tortilla_calabacin'},
 {d:'V',n:'28',desayuno:'revuelto_champi',media:'fruta_nueces',comida:'gazpacho_pollo',merienda:'higos_queso',cena:'pavo_verduras'},
 {d:'S',n:'29',desayuno:'tortitas',media:'uvas_yogur',comida:'pisto_huevo',merienda:'fruta_nueces',cena:'crema_calabacin'},
 {d:'D',n:'30',desayuno:'tostada_tomate',media:'sandia_almendras',comida:'lentejas_frias',merienda:'pera_pavo',cena:'merluza_pisto'}];

/* puntuación de recetas: 'si' = repetir · 'ok' = normal · 'no' = retirada
   El generador excluye las 'no' y da más peso a las 'si'. */
const PUNT={gazpacho_pollo:'si', chili:'si', lentejas_frias:'ok',
            berenjenas:'no', tortitas:'no', salmorejo_huevo:'ok'};

/* quién cocina cada día — sale de las agendas reales */
/* Quién cocina cada día. El patrón va por día de la semana —lunes a domingo—,
   no por número: así vale para cualquier semana. L M X J V S D */
const PATRON_COCINA=['t','t','c','t','c','x','x'];
const cocinaDe = off => Object.fromEntries(
  diasDeSemana(off).map((d,i)=>[d.n, PATRON_COCINA[i]]));
const QUIEN={c:'Cristina',t:'Tama',x:'Los dos',n:'Nadie · sobras'};

/* historial de semanas pasadas */
const HISTORIAL=[
 {sem:'10-16 ago',adh:86,rango:71,coste:59,fav:'Gazpacho con pollo',nota:'La mejor semana hasta ahora'},
 {sem:'3-9 ago',adh:74,rango:58,coste:71,fav:'Chili de ternera',nota:'Dos cenas fuera sin planificar'},
 {sem:'27 jul - 2 ago',adh:81,rango:64,coste:63,fav:'Pollo al horno',nota:''},
 {sem:'20-26 jul',adh:68,rango:47,coste:78,fav:'Lentejas',nota:'Primera semana, aún ajustando raciones'}];

/* Previsión de 4 semanas: esqueleto, no menú cerrado.
   Era una lista escrita a mano que empezaba el 17 de agosto —una semana que ya
   ha pasado y que nunca formó parte del plan—. Las cuatro semanas salen ahora
   de la misma base que el resto de la app: la primera es la que arranca el 31.
   Lo que no se sabe todavía (coste, recetas nuevas) no se inventa. */
const AVISOS_SEM=[
 [],
 ['Cambio de temporada: entran pera, uva y calabaza'],
 ['Fin del bloque de fuerza → semana de descarga'],
 []];
function prevision(){
  return [0,1,2,3].map(i => ({
    sem: rotuloSemana(i),
    estado: i===0 ? 'esta semana' : i===1 ? 'propuesta' : 'esqueleto',
    tanda: textoTanda(i).replace('Domingo','Dom'),
    compra: i===0 ? 'lista abierta' : 'sin abrir',
    coste: null,             // sin compras reales todavía no hay coste previsto
    avisos: AVISOS_SEM[i] || []
  }));
}

/* guion de la tanda del domingo. La de la semana siguiente es más corta porque
   queda chili congelado: por eso no puede ser la misma ficha para las dos. */
/* La tanda de una semana se cocina el domingo ANTERIOR a esa semana. Estaba
   escrita a mano («Domingo 16»), que era el domingo previo a la semana de
   ejemplo: con el plan arrancando el 31, tocaba el 30. Ahora sale de la fecha. */
function fechaTanda(off){ const a=lunesDe(baseSemana()); a.setDate(a.getDate()+off*7-1); return a; }
const textoTanda = off => { const f=fechaTanda(off);
  return `Domingo ${f.getDate()} de ${MES_NOM[f.getMonth()]}`; };
/* Y su estado no se puede cablear: mientras no llegue el día está PREVISTA, y
   solo pasa a hecha, corta o saltada cuando alguien lo marca. */
const tandaPasada = off => fechaTanda(off) < HOY_F;
const TANDAS={s1:{min:85, tapers:8},
              s2:{min:70, tapers:6, nota:'Una receta menos: sobra chili congelado'}};
const TANDA={min:85, tapers:8, pasos:[
 {t:'0 min', q:'Enciende el horno a 200° y pon agua a hervir para las lentejas', icon:'🔥'},
 {t:'5 min', q:'Bandeja de pollo con patata al horno · 30 min', icon:'🍗'},
 {t:'10 min', q:'Lentejas a la olla · 25 min a fuego bajo', icon:'🍲'},
 {t:'15 min', q:'Mientras: sofríe cebolla y pimiento para el chili', icon:'🌶'},
 {t:'25 min', q:'Añade la carne, las especias y las alubias al chili · 20 min', icon:'🌶'},
 {t:'35 min', q:'Añade los pimientos a la bandeja del horno · 15 min', icon:'🫑'},
 {t:'45 min', q:'Escurre las lentejas y pica el crudo (tomate, cebolleta, pimiento)', icon:'🥗'},
 {t:'55 min', q:'Cuece 6 huevos · 10 min', icon:'🥚'},
 {t:'65 min', q:'Saca el horno. Reparte en tápers y etiqueta', icon:'📦'},
 {t:'80 min', q:'Friega mientras se enfría. A la nevera cuando temple', icon:'🧼'}]};

const CALENTAMIENTO=[['Movilidad de cadera y hombro','3 min'],['Sentadilla sin peso · 10 rep','1 min'],
 ['Serie de aproximación al 50 %','1 min']];

/* cada sesión tiene su versión en casa con el material que ya tenéis */
/* versión en casa, ejercicio a ejercicio y en el mismo orden: con pesas, bandas y esterilla.
   El bloque de movilidad de Cristina es idéntico en casa — no necesita material. */
const EN_CASA={c:[{n:'Sentadilla goblet con mancuerna',p:'3 × 12 @ 12 kg',fig:'fig-goblet',
     clave:'Mancuerna pegada al pecho. El peso te ayuda a mantener el torso erguido.'},
   {n:'Flexiones inclinadas',p:'3 × 10',fig:'fig-flexion',
     clave:'Manos en el borde del sofá o la encimera. Cuanto más alto, más fácil.'},
   {n:'Remo con banda elástica',p:'3 × 15',fig:'fig-banda',
     clave:'Banda anclada en la manilla de una puerta. Tira con el codo pegado al costado.'},
   {n:'Peso muerto rumano con mancuernas',p:'3 × 12 @ 10 kg',fig:'fig-pmr',
     clave:'Cadera atrás, mancuernas rozando el muslo.'},
   {n:'Plancha frontal',p:'3 × 40 s',fig:'fig-plancha',clave:'Glúteo apretado, lumbar sin hundir.'},
   {n:'Movilidad de cadera · 90/90',p:'2 × 60 s por lado',fig:'fig-9090',mov:true,
     clave:'En la esterilla. Igual que en el gimnasio.'},
   {n:'Apertura torácica en cuadrupedia',p:'2 × 8 por lado',fig:'fig-toracica',mov:true,
     clave:'Mano en la nuca, abre el codo al techo. La cadera no gira.'},
   {n:'Estiramiento de isquios y psoas',p:'2 × 45 s por lado',fig:'fig-psoas',mov:true,
     clave:'Mete la pelvis por debajo antes de empujar.'}],
 t:[{n:'Sentadilla búlgara con mancuernas',p:'4 × 10 @ 20 kg',fig:'fig-bulgara',
     clave:'Pie de atrás en el sofá. Baja recto, la rodilla de delante no se va hacia dentro.'},
   {n:'Flexiones lastradas',p:'4 × 12',fig:'fig-flexion',
     clave:'Mochila con discos o libros a la espalda. Cuerpo recto de la cabeza al talón.'},
   {n:'Remo con mancuerna a una mano',p:'4 × 10 @ 22 kg',fig:'fig-remomanc',
     clave:'Apoyo en una silla, espalda plana. Tira con el codo hacia la cadera.'},
   {n:'Peso muerto rumano con mancuernas',p:'3 × 12 @ 24 kg',fig:'fig-pmr',
     clave:'Cadera atrás, rodillas casi rectas.'},
   {n:'Elevación de talón en escalón',p:'3 × 15 por pierna',fig:'fig-talon',prev:true,
     clave:'En el escalón de casa. Baja el talón por debajo del borde, muy lento.'},
   {n:'Nórdico con banda',p:'3 × 6',fig:'fig-nordico',prev:true,
     clave:'Pies bajo el sofá y banda al pecho para asistir la bajada.'},
   {n:'Equilibrio sobre esterilla enrollada',p:'3 × 40 s',fig:'fig-monopodal',prev:true,
     clave:'La esterilla enrollada hace de superficie inestable. Ojos abiertos primero.'}]};

/* historial de cargas: 8 semanas de bloque */
const CARGAS={c:{'Sentadilla con barra':[30,30,32.5,32.5,35,37.5,37.5,40],
   'Press banca mancuernas':[8,8,10,10,10,12,12,12],'Remo en polea baja':[22.5,25,25,27.5,27.5,30,30,30]},
 t:{'Sentadilla con barra':[70,72.5,75,75,80,80,82.5,85],
   'Press banca barra':[55,57.5,57.5,60,62.5,62.5,65,65],'Peso muerto rumano':[55,60,60,62.5,65,67.5,70,70]}};
const ADH_ENT={c:[2,2,1,2,2,2,1,2], t:[2,1,2,2,2,1,2,2]};   // sesiones hechas de 2 planificadas

/* alternativas de cardio en Forus, con objetivo concreto — no "haz algo" */
const CARDIO_FORUS=[
 {e:'🚴',n:'Bici estática',obj:'12 km o 30 min',nota:'Suave-moderado, se puede leer mientras'},
 {e:'🌀',n:'Elíptica',obj:'25 min · 2.500 m',nota:'Bajo impacto, buena para empezar'},
 {e:'🚣',n:'Remo',obj:'3.000 m',nota:'Trabaja también espalda y brazos'},
 {e:'🏊',n:'Natación',obj:'800 m o 30 min',nota:'Cero impacto en rodillas'},
 {e:'🏃',n:'Cinta a ritmo alegre',obj:'3 km · inclinación 5 %',nota:'Andar rápido en cuesta rinde más que trotar'},
 {e:'🎵',n:'Clase dirigida',obj:'45 min',nota:'Body pump, zumba o la que haya ese día'}];

const DEPORTES=[{id:'correr',e:'🏃',n:'Correr',m:['tiempo','distancia']},{id:'caminar',e:'🚶',n:'Caminar',m:['tiempo','distancia','pasos']},
 {id:'bici',e:'🚴',n:'Bici',m:['tiempo','distancia']},{id:'spinning',e:'🚲',n:'Spinning',m:['tiempo']},
 {id:'natacion',e:'🏊',n:'Natación',m:['tiempo','distancia']},{id:'padel',e:'🎾',n:'Pádel',m:['tiempo']},
 {id:'tenis',e:'🥎',n:'Tenis',m:['tiempo']},{id:'futsal',e:'⚽',n:'Fútbol sala',m:['tiempo']},
 {id:'basket',e:'🏀',n:'Baloncesto',m:['tiempo']},{id:'eliptica',e:'🌀',n:'Elíptica',m:['tiempo','distancia']},
 {id:'remo',e:'🚣',n:'Remo',m:['tiempo','distancia']},{id:'senderismo',e:'🥾',n:'Senderismo',m:['tiempo','distancia','desnivel']},
 {id:'yoga',e:'🧘',n:'Yoga / Pilates',m:['tiempo']},{id:'clase',e:'🎵',n:'Clase dirigida',m:['tiempo']},
 {id:'fuerza',e:'🏋',n:'Fuerza libre',m:['tiempo']},{id:'escalada',e:'🧗',n:'Escalada',m:['tiempo']},
 {id:'baile',e:'💃',n:'Baile',m:['tiempo']},{id:'patinaje',e:'🛼',n:'Patinaje',m:['tiempo','distancia']},
 {id:'boxeo',e:'🥊',n:'Boxeo',m:['tiempo']},{id:'crossfit',e:'🤸',n:'Funcional',m:['tiempo']},
 {id:'surf',e:'🏄',n:'Surf',m:['tiempo']},{id:'otro',e:'➕',n:'Otro',m:['tiempo']}];
const CAMPO={tiempo:['Duración','min'],distancia:['Distancia','km'],pasos:['Pasos','pasos'],desnivel:['Desnivel','m']};

const LABS=[['Glucosa','127','74-106','crit','⚠ alto'],['HbA1c','5,4 %','4,3-6,1','good','✓ normal'],
 ['Insulina','9,44','3,0-25,0','good','✓ normal'],['ALT (GPT)','90','10-49','crit','⚠ alto'],
 ['GGT','74','<38','crit','⚠ alto'],['Colesterol','185','<200','good','✓ normal'],
 ['LDL','145','<116','warn','▲ límite'],['HDL','44','>50','warn','▼ bajo'],
 ['Vitamina D','24,0','30-100','warn','▼ bajo'],['Triglicéridos','70','<150','good','✓ normal']];
/* ═══ DÍAS DE OFICINA ═════════════════════════════════════════════════════
   Cristina come en la oficina todos los laborables. Tama va dos días por semana,
   y los sabe con antelación: se marcan en el calendario del mes, de una vez.
   La regla es que SE LLEVA TÚPER. Comer fuera es la excepción y se registra en
   el cierre del día, no aquí.
   Esto no cambia las recetas de comida —el túper de Cristina ya lo fuerza— pero
   sí tres cosas: cuántos túper preparar, qué desayunos y medias mañanas valen
   (los de oficina hay que poder llevárselos) y quién está en casa para cocinar. */
const OFICINA={
  c:'todos',                                   // Cristina: todos los laborables
  t:['2026-08-20','2026-08-25','2026-08-27','2026-09-01','2026-09-03',
     '2026-09-08','2026-09-10','2026-09-15']}; // Tama: los que le comunican
/* ¿Y el desayuno también se lo lleva ese día? Solo algunos. */
const DESAYUNO_FUERA={t:['2026-08-20','2026-09-03'], c:[]};

const esLaborable = f => { const d=new Date(f+'T12:00').getDay(); return d>=1 && d<=5; };
function enOficina(persona, fecha){
  if(persona==='c') return esLaborable(fecha);
  return OFICINA.t.includes(fecha);
}
const desayunoFuera = (persona, fecha) => (DESAYUNO_FUERA[persona]||[]).includes(fecha);
/* El rótulo de la cabecera de Hoy: oficina, teletrabajo o fin de semana. */
function lugarDe(persona, fecha){
  if(!esLaborable(fecha)) return 'Fin de semana · en casa';
  if(enOficina(persona, fecha)) return desayunoFuera(persona, fecha)
    ? 'Oficina · desayuno y comida fuera' : 'Oficina · comes de túper';
  return 'Teletrabajo · comes en casa';
}
/* Cuántos túper hay que preparar la noche antes, y de qué */
function tupersDe(fecha){
  const out=[];
  ['c','t'].forEach(p=>{ if(!enOficina(p,fecha)) return;
    const l=['comida','media']; if(desayunoFuera(p,fecha)) l.unshift('desayuno');
    out.push({p, nombre:PERFILES[p].nombre, momentos:l}); });
  return out;
}
/* Del número de día a su fecha completa. Era un mapa escrito a mano con los días
   17-30 de agosto: en cuanto el menú pasó a ser el de la semana del 31, ninguna
   clave casaba y los túper y el cocinero desaparecían de la vista. Ahora se
   construye de las dos semanas que la app tiene delante. */
const FECHA_DE = new Proxy({}, {get:(_,n)=>{
  if(typeof n!=='string') return undefined;
  for(const off of [0,1]){ const d=diasDeSemana(off).find(x=>x.n===n); if(d) return d.iso; }
  return undefined;
}});

/* ═══ COMPRA: estado, no calendario ═══════════════════════════════════════
   No hay día fijo de compra. Una lista se ABRE cuando se confirma el menú y se
   CIERRA cuando se ha comprado, el día que sea. Lo único que condiciona la
   semana es la tanda de cocina, porque produce los túper de lunes a jueves. */
const AJUSTES_COMPRA={
  diaCompra:null,          // null = sin día fijo
  diaTanda:'D',            // la tanda sí tiene día: condiciona el menú
  listasSeparadas:true};   // fresco y grande se cierran por separado

/* Las dos listas viven cada una por su cuenta. */
const LISTAS={
  fresco:{n:'Fresco', cadencia:'cada semana', estado:'abierta', abierta:'19 ago',
          secciones:['Frutería','Carnicería','Pescadería','Lácteos y huevos','Charcutería'],
          cogidos:38},
  grande:{n:'Grande', cadencia:'cada 15 días', estado:'cerrada', cerrada:'12 ago',
          secciones:['Despensa','Congelados'], cogidos:0}};

/* Los tres niveles de detalle. La app no finge que valen lo mismo. */
const FIDELIDAD={
  exacta:['✓','Exacta','t-verdura','Ticket digital: líneas, cantidades y precios reales'],
  lista:['≈','Desde la lista','t-fruta','Cantidades calculadas y total real. Sin precio por producto'],
  gasto:['€','Solo gasto','t-off','Solo el importe. A la despensa, lo que se apuntó a mano']};

/* Historial de compras, cada una con su nivel */
const COMPRAS=[
  {id:'c3', sitio:'Mercadona', fecha:'23 ago', total:27.43, fid:'exacta', lineas:8, pendientes:1, nueva:true},
  {id:'c2', sitio:'Mercadona', fecha:'16 ago', total:42.10, fid:'exacta', lineas:23, pendientes:0},
  {id:'c1', sitio:'Lidl', fecha:'9 ago', total:18.60, fid:'lista', lineas:null, pendientes:0}];

/* Lo que ha llegado solo y está esperando revisión (opción A) */
const ENTRANTE={sitio:'Mercadona', fecha:'23 de agosto', hace:'hace 20 min',
                total:27.43, lineas:8, sinIdentificar:1};

/* Lo que sale al cerrar la lista contra el ticket (opción C) */
const CONCILIA={
  coincide:35,
  extra:[['Chocolate negro 85 %',2.35],['Cerveza sin alcohol · 6',3.85]],
  noHabia:['Higos frescos','Espárragos trigueros'],
  precios:4};

/* Lo que se va marcando EN EL SÚPER. Vive aquí y no en el DOM: si viviera en la
   casilla, salir de la pantalla borraría media compra hecha. */
/* nombre → {cogido, g (cantidad real si difiere), noHabia, quien} */
const MARCAS={};
/* La lista de la compra es DE LA CASA: una sola, con las cantidades de los dos
   sumadas. Marcar un artículo no es un estado de esta pantalla, es un hecho que
   el otro tiene que ver en su móvil mientras empuja el carro. Cuando hay base
   de datos, hidratar.js rellena este gancho y cada marca se guarda y se
   propaga; sin base de datos el prototipo sigue funcionando en local. */
let GUARDAR_MARCA = null;
let CERRAR_LISTA  = null;
let GUARDAR_OFICINA = null;
/* Los ganchos de registro. Los rellena hidratar.js cuando hay base de datos;
   sin ella la app sigue funcionando en local, pero avisando de que no guarda. */
let GUARDAR_COMIDA=null, GUARDAR_MED=null, GUARDAR_PESO=null, GUARDAR_CINTURA=null,
    GUARDAR_CIERRE=null, GUARDAR_CHECK=null, GUARDAR_ENTRENO=null, GUARDAR_CARDIO=null,
    GUARDAR_PUNT=null, GUARDAR_COMPRA=null, REABRIR_LISTA=null, GUARDAR_GASTO=null,
    GUARDAR_EXTRA=null, QUITAR_EXTRA=null, GUARDAR_EXCEPCION=null, QUITAR_EXCEPCION=null,
    GUARDAR_DESPENSA=null, GUARDAR_CONSERVA=null, GUARDAR_SEMANA2=null, GUARDAR_CADENA=null,
    GUARDAR_RANGO=null, GUARDAR_LAB=null;
/* Lo que ya se cerró hoy, para no volver a preguntarlo en blanco. */
let CIERRE_HOY = null;

/* Cadenas: cada una desvía distinto de mis precios de referencia, que son de
   Mercadona. Con tres o cuatro compras el factor deja de ser una suposición. */
let COMPRA_EN_CURSO={comercio:'Mercadona', total:null};
const CADENAS={
  Mercadona:{factor:1.00, compras:8, ref:true},
  Lidl:     {factor:0.92, compras:3},
  Carrefour:{factor:1.04, compras:1},
  Dia:      {factor:0.96, compras:0},
  Otro:     {factor:1.00, compras:0}};

/* Los cuatro caminos para registrar una compra, de menos a más trabajo */
const PUERTAS=[
  ['digital','📧','Ticket digital de Mercadona','Compártelo desde el correo · nombres y precios exactos','exacta'],
  ['foto','📷','Foto del ticket de papel','Cuando pagaste en efectivo o con otra tarjeta','exacta'],
  ['otro','🏪','Una compra que no salió de la lista','Solo el importe · el mercado, el súper de al lado','gasto'],
  ['suelto','🌱','Algo sin ticket','Huerta, regalo, frutería de la esquina','gasto']];

/* Candidatos que propone el diccionario cuando una línea no se reconoce */
const CANDIDATOS={'BEREN NEGRA':[['Berenjena','1,80 €/kg de referencia · encaja con 1,1 kg'],
                                 ['Berberechos','no encaja con el precio por kilo']]};

const TICKET=[['PECH POLLO FIL','Contramuslo de pollo','1,6 kg','7,20',1],['LENTEJA PARDINA','Lentejas pardina','1 kg','1,95',1],
 ['SKYR NAT 6X','Skyr natural','6 ud','5,70',1],['TOMATE RAMA','Tomate maduro','2,05 kg','2,66',1],
 ['HUEVOS L 24','Huevos L','24 ud','4,60',1],['MELOCOTON','Melocotón','1,52 kg','2,89',1],
 ['BEREN NEGRA','—','1,1 kg','1,98',0],['BEB VEG AVENA','Leche de avena','1 L','1,45',1]];
/* cierre del día: 1 = bajo/mal · 2 = normal · 3 = alto/bien  (8 semanas) */
const BIENESTAR={c:{hambre:[1,2,2,2,3,3,3,2], energia:[2,2,3,2,2,1,2,2], sueno:[2,3,2,2,1,2,2,3]},
                 t:{hambre:[1,1,2,1,2,1,1,2], energia:[3,2,3,3,2,3,2,3], sueno:[2,2,3,2,2,3,3,2]}};
const CINTURA={c:[116,115,114,113,112.5,112,112,112], t:[89,89,88,88,87.5,87,87,86.5]};
/* Fecha de la última medida de cintura. La serie son solo números: sin esto
   no hay forma de saber si toca volver a medir. La rellena hidratar.js. */
let CINTURA_ULT_F=null;
/* analíticas reales: [marcador, marzo, junio (null = no incluido), referencia, unidad, dirección buena] */
const LABS_EVO=[['Glucosa',121,127,'74-106','mg/dL','baja'],['HbA1c',5.4,5.4,'4,3-6,1','%','baja'],
 ['Colesterol',203,185,'<200','mg/dL','baja'],['Ferritina',54.2,30.8,'10-291','ng/mL','—'],
 ['Ácido úrico',6.7,5.9,'3,1-7,8','mg/dL','baja'],['Creatinina',0.86,0.90,'0,55-1,02','mg/dL','—'],
 ['Insulina',9.44,null,'3,0-25,0','µU/mL','baja'],['ALT (GPT)',90,null,'10-49','U/L','baja'],
 ['AST (GOT)',48,null,'<34','U/L','baja'],['GGT',74,null,'<38','U/L','baja'],
 ['LDL',145,null,'<116','mg/dL','baja'],['HDL',44,null,'>50','mg/dL','sube'],
 ['Vitamina D',24.01,null,'30-100','ng/mL','sube'],['Triglicéridos',70,null,'<150','mg/dL','baja']];
const MED_ADH={c:[{n:'Metformina 850 mg · 2/día',pct:94},{n:'Letrozol 2,5 mg',pct:100}],
               t:[{n:'Bisoprolol 2,5 mg',pct:97},{n:'Sedotime 15 mg',pct:91}]};

/* Los objetivos de cada uno. Estaban escritos dentro de la pantalla de Salud
   —«19 de 26 días sin alcohol», «2,5 de 4,5 kg»— con números que nadie había
   medido. Ahora son filas de la tabla `goals` y lo que no esté ahí no se pinta.
   plazo: 'corto' | 'medio'   ·   metrica: peso | cintura | grasa | habito */
const OBJETIVOS={
  c:[{titulo:'Bajar de peso a ritmo sostenible', plazo:'corto', metrica:'peso',
      detalle:'El ritmo lo marca el hambre y la analítica, no la báscula sola.'},
     {titulo:'Reducir cintura', plazo:'corto', metrica:'cintura',
      detalle:'Es el marcador que mejor acompaña a la resistencia a la insulina.'},
     {titulo:'Estabilizar el peso sin rebotes', plazo:'medio', metrica:'peso',
      detalle:'Cuando llegue: mantener sin subidas bruscas.'}],
  t:[{titulo:'Reducir el porcentaje de grasa', plazo:'corto', metrica:'grasa',
      detalle:'Objetivo principal. Déficit moderado y las tres sesiones de fuerza.'},
     {titulo:'Fruta todos los días', plazo:'corto', metrica:'habito',
      detalle:'Hábito, no número: dos piezas al día cuentan como cumplido.'},
     {titulo:'Retirar la cerveza de los hábitos', plazo:'medio', metrica:'habito',
      detalle:'Sin fecha marcada: se sigue en el cierre del día.'}]};

const PESO_C=[93.4,93.1,92.8,92.9,92.4,92.1,91.9,91.7,91.8,91.4,91.2,91.0,90.9,90.7,91.0,90.9];
const PESO_T=[74.8,74.9,74.6,74.7,74.4,74.5,74.2,74.3,74.1,74.2,74.0,74.1,73.9,74.0,73.8,73.9];
const ADH=[68,74,81,79,88,85,92,86], RANGO=[41,55,62,58,71,64,79,71];

/* ── Acciones que hay que hacer HOY, vengan del módulo que vengan.
      "Hoy" es el buzón de todos los módulos, no una pantalla de comidas. ── */
function accionesDeHoy(){
  /* Estaban escritos a mano los días 19 y 20 —de la semana de ejemplo—, así que
     con el menú del 31 en adelante `MENU.find` no encontraba nada y TODO lo que
     depende de mañana desaparecía sin decir nada: sacar la merluza del
     congelador, preparar los túper, dejar la avena hecha. */
  const hoy = String(HOY_F.getDate()), manana = String(fechaDe(1).getDate()), acc=[];
  const dManana=MENU.find(d=>d.n===manana);

  // 1. descongelar lo que pide el menú de mañana
  if(dManana){
    const congelados=new Set();
    MOM.forEach(k=>R[dManana[k]].ing.forEach(([n])=>{ if(ubic(n)==='congelador' && DESPENSA[n]) congelados.add(n); }));
    congelados.forEach(n=>acc.push({id:'desc_'+n, tipo:'check', e:'❄️', t:'t-pescado', when:'Esta noche · para mañana',
      txt:`Saca ${n.toLowerCase()} del congelador`,
      nota:MOM.filter(k=>R[dManana[k]].ing.some(([x])=>x===n)).map(k=>MOMLAB[k].toLowerCase()).join(' y ')+' de mañana'}));
  }
  // 2a. lo que ha entrado sin ticket se gasta antes que nada
  ESPONTANEOS.filter(x=>x.cad<=isoDe(3)).forEach(x=>{
    const rec=recetasQueUsan(x.n)[0];
    acc.push({id:'esp_'+x.n, tipo:'menu', ing:x.n, g:x.g, e:ORIGENES[x.origen][0], t:'t-verdura',
      when:ORIGENES[x.origen][1]+' · gastar primero', txt:`${x.n} · ${kg(x.g)}`,
      nota:rec?`Se aprovecha en: ${R[rec].n}`:'Sin receta esta temporada · conservar o pedir recetas'});
  });
  // 2b. lo que caduca hoy o mañana, con la receta que lo aprovecha
  Object.entries(DESPENSA).filter(([,[,cad]])=>cad && cad<=isoDe(1)).forEach(([n,[g,cad]])=>{
    const rec=Object.keys(R).find(k=>R[k].ing.some(([x])=>x===n));
    acc.push({id:'cad_'+n, tipo:'menu', ing:n, g:g, e:'⏳', t:'t-fruta',
      when:cad===HOY_ISO?'Caduca hoy':cad<HOY_ISO?'Caducado':'Caduca mañana',
      txt:`${n} · ${kg(g)}`, nota:rec?`Se aprovecha en: ${R[rec].n}`:'Sin receta que lo use esta semana'});
  });
  // 3. el túper de la oficina: prepararlo y, sobre todo, acordarse de cogerlo
  const dManana2=MENU.find(d=>d.n===manana);
  if(dManana2 && ['L','M','X','J','V'].includes(dManana2.d)){
    /* Antes decía siempre «dos raciones distintas». Los días que Tama teletrabaja
       eso es falso: come en casa y no hace falta prepararle nada. Pedir una tarea
       de más 12 veces al mes es lo que enseña a ignorar la app. */
    const t=tupersDe(isoDe(1));
    if(t.length) acc.push({id:'tuper', tipo:'check', e:'🥡', t:'t-legumbre',
      when:'Esta noche · para la oficina',
      txt:t.length===2?'Prepara los túper de mañana':`Prepara el túper de ${t[0].nombre}`,
      nota:t.map(x=>`${x.nombre}: ${x.momentos.map(m=>MOMLAB[m].toLowerCase()).join(', ')}`).join(' · ')});
    /* La avena de la noche anterior hay que dejarla hecha, no es un aviso opcional */
    const dsy=R[dManana2.desayuno];
    if(dsy && /noche anterior/i.test(dsy.n) && t.length)
      acc.push({id:'avena', tipo:'check', e:'🥣', t:'t-lacteo', when:'Esta noche · 5 minutos',
        txt:'Deja la avena en remojo', nota:`${dsy.n} · se come fría por la mañana`});
  }
  return acc;
}

/* ── EL GENERADOR: reglas A1-A8 y B1-B10 ── */
const OBJ = {c:{min:1600, max:1750, prot:100}, t:{min:1950, max:2100, prot:130}};
const AJUSTE = 0.10;                 // ±10 % de ración antes de cambiar de plato
const DIAS = ['L','M','X','J','V','S','D'];
const CENA_RAPIDA = ['X','V'];       // Tama entrena hasta 21:30
const LABORAL = ['L','M','X','J','V'];

let MES = 8;                                   // B5: temporada
const pool = mom => Object.keys(R).filter(k => R[k].mom === mom && R[k].meses.includes(MES));
const esPescado = k => R[k].t === 't-pescado';
const fuenteProt = k => R[k].t;
const rnd = a => a[Math.floor(Math.random()*a.length)];

/* Ajuste de ración del día: acerca el total al centro del rango, máx ±10 %.
   Devuelve null si ni con el ajuste el día entra en rango. */
function ajusteDia(kcal, prot, o){
  const centro = (o.min + o.max) / 2;
  const f = Math.min(1+AJUSTE, Math.max(1-AJUSTE, centro / kcal));
  const k = kcal * f, p = prot * f;
  if (k < o.min || k > o.max || p < o.prot) return null;
  return {f: +f.toFixed(3), kcal: Math.round(k), prot: Math.round(p)};
}

function generar(opts={}){
  const usos = {}, semana = [];
  const inc = k => usos[k] = (usos[k]||0)+1;
  const libre = (k, dia) => (usos[k]||0) < 2 &&                       // B1: máx 2/semana
        !(semana[dia-1] && Object.values(semana[dia-1]).includes(k)); // B1: no días seguidos

  for (let d = 0; d < 7; d++){
    const dia = DIAS[d];
    let intento = 0, elegido = null;

    while (intento++ < 400 && !elegido){
      const cand = {};
      // A5: de lunes a viernes la comida va en túper
      cand.comida = rnd(pool('comida').filter(k => libre(k,d) && (!LABORAL.includes(dia) || R[k].tupper >= 1)));
      // A9: si ese día hay alguien en la oficina, lo que se lleva tiene que poder llevarse.
      // No es lo mismo que aguantar en túper: una tostada aguanta en la nevera y
      // llega blanda a las 11.
      const fecha = FECHA_DE[['17','18','19','20','21','22','23'][d]] || '';
      const hayOficina = fecha && (enOficina('c',fecha) || enOficina('t',fecha));
      const hayDesayunoFuera = fecha && (desayunoFuera('c',fecha) || desayunoFuera('t',fecha));
      // A6: miércoles y viernes, cena lista en ≤15 min
      cand.cena = rnd(pool('cena').filter(k => libre(k,d) && k !== cand.comida &&
                     (!CENA_RAPIDA.includes(dia) || (R[k].lista||99) <= 15)));
      cand.desayuno = rnd(pool('desayuno').filter(k => libre(k,d) && (!hayDesayunoFuera || R[k].port >= 1)));
      const snacks = pool('snack').filter(k => libre(k,d) && (!hayOficina || R[k].port >= 1));
      cand.media = rnd(snacks);
      cand.merienda = rnd(snacks.filter(k => k !== cand.media));
      if (Object.values(cand).some(x => !x)) continue;

      const tot = p => MOM.reduce((a,k) => {
        const n = nutre(cand[k], p); return {kcal:a.kcal+n.kcal, prot:a.prot+n.prot};
      }, {kcal:0, prot:0});
      const c = tot('c'), t = tot('t');
      const ac = ajusteDia(c.kcal, c.prot, OBJ.c), at = ajusteDia(t.kcal, t.prot, OBJ.t);
      if (ac && at){ cand._c = ac; cand._t = at; elegido = cand; }
    }
    if (!elegido) return null;                       // esta semana no es válida
    MOM.forEach(k => inc(elegido[k]));
    semana.push(elegido);
  }

  // B6: variedad mínima semanal
  const platos = semana.flatMap(d => [d.comida, d.cena]);
  const fuentes = new Set(platos.map(fuenteProt));
  const pescados = platos.filter(esPescado).length;
  if (fuentes.size < 3 || pescados < 2) return null;

  return semana;
}
MES = new Date().getMonth()+1;   // temporada actual

/* genera hasta encontrar una semana válida; devuelve también los intentos */
function generarSemana(){
  for(let i=1;i<=300;i++){const s=generar(); if(s) return {semana:s, intentos:i};}
  return null;
}

/* ── necesidades de la semana ── */
function necesidades(){
  const need={};
  for(const d of MENU) for(const k of MOM) for(const p of ['c','t'])
    for(const [n,c,u] of R[d[k]].ing){
      const q=escala(n,c,u,p), g=gramos(n,q,u);
      need[n]=(need[n]||0)+g;
    }
  return need;
}
/* LA LISTA QUE SE VE.
   `listaCompra()` la CALCULA a partir del menú y la despensa de este móvil.
   Eso está bien para el prototipo, pero en real hacía que cada teléfono
   enseñara su propio cálculo: basta con que uno tenga el catálogo a medio
   cargar para que las cantidades bailen. La lista de la casa se calcula una
   vez, se guarda y se LEE. Esta es la que pinta la pantalla. */
let LISTA_GUARDADA = null;      // la rellena hidratar.js desde shopping_items
const listaVista = () => LISTA_GUARDADA || listaCompra();

/* Huella corta de la lista, para poder comprobar de un vistazo que los dos
   móviles enseñan exactamente lo mismo sin tener que comparar 26 líneas. */
function huellaLista(l){
  const txt = Object.keys(l).sort().map(sec =>
    sec + ':' + l[sec].map(i => i.n + '=' + Math.round(i.g)).sort().join(',')).join('|');
  let h = 0;
  for (let i = 0; i < txt.length; i++) h = (h * 31 + txt.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36).slice(0, 4);
}
function listaCompra(){
  const need=necesidades(), out={};
  for(const n in need){
    const stock=DESPENSA[n]?DESPENSA[n][0]:0;
    const falta=Math.max(0, need[n]-stock);
    if(falta<=0 || !PRECIO[n]) continue;
    const f=FORMATO[n]||falta, envases=Math.ceil(falta/f), comprado=envases*f;
    const sec=ING[n][2];
    (out[sec]=out[sec]||[]).push({n, g:Math.round(falta), envases, formato:f, comprado,
      tengo:stock,
      /* precio = lo que costaría el envase entero (para el sobrante);
         precioReal = lo que cuesta lo que de verdad hace falta, que es lo que
         se enseña ahora en la lista. */
      precio:comprado*PRECIO[n]/1000, precioReal:falta*PRECIO[n]/1000,
      sobra:(comprado-falta)*PRECIO[n]/1000});
  }
  for(const s in out) out[s].sort((a,b)=>b.precioReal-a.precioReal);
  return out;
}
/* lo que cuesta COMER esa semana, no lo que se paga en caja */
function costeConsumo(){
  const need=necesidades(); let t=0;
  for(const n in need) if(PRECIO[n]) t+=need[n]*PRECIO[n]/1000;
  return t;
}
function cocinablesAhora(){
  return Object.keys(R).map(k=>{
    let falta=0, total=0;
    for(const [n,c,u] of R[k].ing){
      if(ING[n][4]==='f') continue;
      total++;
      const g=gramos(n,escala(n,c,u,'c'),u);
      if((DESPENSA[n]?DESPENSA[n][0]:0) < g) falta++;
    }
    return {k, falta, pct: total?Math.round(100*(total-falta)/total):100};
  }).sort((a,b)=>a.falta-b.falta || R[a.k].tot-R[b.k].tot);
}
/* ── ILUSTRACIONES DE EJERCICIOS ──────────────────────────────────
   Monigotes de línea en SVG: pesan 8 KB en total, funcionan sin
   conexión y no dependen de ninguna web que pueda caerse.
   Sirven para RECONOCER el ejercicio de un vistazo. La técnica fina
   se aprende viendo el movimiento: por eso cada uno lleva además
   una clave escrita y un hueco para enlazar vídeo.
   .b = cuerpo · .a = lo que hay que mirar · .eq = material · .ar = recorrido */
const FIGURAS={
'fig-sentadilla':`<path class="eq" d="M30,24 L90,24"/>
  <circle class="h" cx="30" cy="24" r="6"/><circle class="h" cx="90" cy="24" r="6"/>
  <circle class="h" cx="70" cy="18" r="7"/><path class="b" d="M64,28 L46,48"/>
  <path class="b" d="M64,28 L54,27"/>
  <path class="a" d="M46,48 L74,52 L66,72"/><path class="b" d="M60,73 L78,73"/>`,
'fig-press':`<path class="eq" d="M20,58 L94,58 M28,58 L28,75 M86,58 L86,75"/>
  <circle class="h" cx="28" cy="44" r="6.5"/><path class="b" d="M35,50 L72,52"/>
  <path class="b" d="M72,52 L88,62 L90,75"/>
  <path class="a" d="M46,49 L46,24"/><path class="eq" d="M30,21 L62,21"/>
  <circle class="h" cx="30" cy="21" r="5.5"/><circle class="h" cx="62" cy="21" r="5.5"/>`,
'fig-remo':`<path class="eq" d="M34,58 L72,58"/>
  <circle class="h" cx="50" cy="24" r="6.5"/><path class="b" d="M50,31 L50,56"/>
  <path class="b" d="M50,56 L78,54 L84,70 M78,72 L92,72"/>
  <path class="a" d="M50,36 L66,45 L82,40"/>
  <path class="eq" d="M83,40 L104,58"/><circle class="eq" cx="106" cy="61" r="4.5"/>`,
'fig-pmr':`<circle class="h" cx="22" cy="26" r="6.5"/><path class="a" d="M29,32 L62,42"/>
  <path class="b" d="M62,42 L66,58 L63,74 M56,75 L72,75"/><path class="b" d="M33,36 L34,60"/>
  <path class="eq" d="M20,63 L48,63"/><circle class="h" cx="20" cy="63" r="6"/><circle class="h" cx="48" cy="63" r="6"/>`,
'fig-plancha':`<circle class="h" cx="26" cy="44" r="6.5"/><path class="a" d="M33,48 L96,64"/>
  <path class="b" d="M40,50 L38,72 L20,72"/><path class="b" d="M96,64 L100,74 M92,75 L104,75"/>`,
'fig-9090':`<circle class="h" cx="44" cy="21" r="6.5"/><path class="b" d="M44,28 L44,58"/>
  <path class="a" d="M44,58 L78,61 L70,74"/><path class="b" d="M44,58 L22,66 L30,75"/>
  <path class="b" d="M41,34 L34,54"/>`,
'fig-toracica':`<path class="b" d="M40,46 L76,46"/><path class="b" d="M40,46 L36,73"/>
  <path class="b" d="M76,46 L80,60 L76,73"/><circle class="h" cx="32" cy="50" r="6.5"/>
  <path class="a" d="M42,45 L49,32 L45,17"/><path class="ar" d="M58,40 A20,20 0 0,0 49,22"/>`,
'fig-psoas':`<path class="b" d="M42,52 L42,74 M36,75 L50,75"/><path class="b" d="M42,52 L66,50"/>
  <path class="a" d="M66,50 L88,70 L100,74"/><path class="b" d="M66,50 L69,26"/>
  <circle class="h" cx="70" cy="19" r="6.5"/><path class="b" d="M69,31 L58,46"/>`,
'fig-dominada':`<path class="eq" d="M20,12 L100,12"/><path class="a" d="M50,14 L53,30 M70,14 L67,30"/>
  <circle class="h" cx="60" cy="26" r="6.5"/><path class="b" d="M60,33 L60,54"/>
  <path class="b" d="M60,54 L52,70 L56,75 M60,54 L69,68 L65,75"/>`,
'fig-talon':`<path class="eq" d="M52,60 L104,60 L104,74 M52,60 L52,74"/>
  <circle class="h" cx="62" cy="11" r="6.5"/><path class="b" d="M62,18 L62,30"/>
  <path class="a" d="M62,30 L62,58 M54,58 L70,58"/><path class="b" d="M62,30 L48,42 L54,51"/>
  <path class="ar" d="M80,52 L80,36 M76,40 L80,35 L84,40"/>`,
'fig-nordico':`<path class="a" d="M80,66 L44,44"/><circle class="h" cx="38" cy="40" r="6.5"/>
  <circle class="b" cx="80" cy="68" r="4"/><path class="b" d="M46,46 L34,58"/>
  <path class="b" d="M83,71 L100,72"/><path class="eq" d="M92,63 L92,75 M86,69 L98,69"/>
  <path class="ar" d="M60,60 L52,66"/>`,
'fig-monopodal':`<circle class="h" cx="60" cy="15" r="6.5"/><path class="b" d="M60,22 L60,46"/>
  <path class="a" d="M60,46 L57,60 L60,73 M53,74 L68,74"/><path class="b" d="M60,46 L77,53 L86,44"/>
  <path class="b" d="M60,28 L42,23 M60,28 L78,23"/>
  <path class="ar" d="M32,18 A11,11 0 0,1 32,34 M88,18 A11,11 0 0,0 88,34"/>`,
'fig-gato':`<path class="a" d="M30,52 Q56,24 82,52"/><path class="b" d="M30,52 L28,73 M22,74 L36,74"/>
  <path class="b" d="M82,52 L86,63 L82,73 M76,74 L90,74"/><circle class="h" cx="24" cy="58" r="6.5"/>
  <path class="ar" d="M56,18 L56,8 M52,13 L56,7 L60,13"/>`,
'fig-rodillas':`<circle class="h" cx="21" cy="63" r="6.5"/><path class="b" d="M28,67 L62,68"/>
  <path class="a" d="M62,68 L58,41 L39,37"/><path class="b" d="M39,66 L52,48"/>
  <path class="ar" d="M72,58 L66,48"/>`,
'fig-rotacion':`<circle class="h" cx="21" cy="59" r="6.5"/><path class="b" d="M28,63 L60,66"/>
  <path class="b" d="M37,63 L33,43"/><path class="a" d="M60,66 L69,47 L88,45"/>
  <path class="ar" d="M68,62 A16,16 0 0,1 80,56"/>`,
'fig-isquios':`<circle class="h" cx="21" cy="65" r="6.5"/><path class="b" d="M28,69 L58,70"/>
  <path class="a" d="M58,70 L67,37 L76,35"/><path class="eq" d="M69,37 L44,58"/>
  <path class="b" d="M58,70 L98,74"/><path class="b" d="M38,68 L47,59"/>`,
'fig-piramidal':`<circle class="h" cx="19" cy="63" r="6.5"/><path class="b" d="M26,67 L54,67"/>
  <path class="b" d="M54,67 L65,41 L49,31"/><path class="a" d="M65,50 L86,43 L79,61"/>
  <path class="b" d="M37,65 L58,49"/>`,
'fig-nino':`<path class="a" d="M80,58 L42,54"/><path class="b" d="M42,54 L14,68"/>
  <circle class="h" cx="36" cy="60" r="6.5"/><path class="b" d="M80,58 L96,71 M90,74 L104,74"/>`,
'fig-esfinge':`<path class="b" d="M102,73 L60,71"/><path class="a" d="M60,71 L44,48"/>
  <circle class="h" cx="38" cy="42" r="6.5"/><path class="b" d="M45,50 L42,72 L24,72"/>`,
'fig-colgar':`<path class="eq" d="M20,12 L100,12"/><path class="a" d="M53,14 L55,32 M67,14 L65,32"/>
  <circle class="h" cx="60" cy="30" r="6.5"/><path class="b" d="M60,37 L60,60"/>
  <path class="b" d="M60,60 L54,74 M60,60 L67,74"/><path class="ar" d="M74,58 L74,72 M70,68 L74,74 L78,68"/>`,
'fig-goblet':`<circle class="h" cx="60" cy="17" r="6.5"/><path class="b" d="M60,24 L58,48"/>
  <path class="a" d="M58,48 L76,55 L69,74 M63,75 L79,75"/><path class="b" d="M58,48 L42,55 L49,74 M43,75 L57,75"/>
  <path class="eq" d="M51,31 L69,31 L66,41 L54,41 Z"/>`,
'fig-flexion':`<path class="eq" d="M18,42 L48,42 L48,74"/><path class="a" d="M28,45 L96,68"/>
  <circle class="h" cx="24" cy="39" r="6.5"/><path class="b" d="M30,47 L30,42"/>
  <path class="b" d="M96,68 L101,75 M92,76 L106,76"/>`,
'fig-banda':`<path class="eq" d="M104,6 L104,74" stroke-width="4"/>
  <path class="eq" d="M100,42 L76,45" stroke-dasharray="5 4"/>
  <circle class="h" cx="44" cy="22" r="6.5"/><path class="b" d="M44,29 L44,54"/>
  <path class="a" d="M44,35 L60,41 L76,45"/><path class="b" d="M44,54 L36,74 M44,54 L54,74"/>
  <path class="ar" d="M66,54 L54,54 M58,50 L52,54 L58,58"/>`,
'fig-bulgara':`<path class="eq" d="M76,54 L104,54 L104,74 M76,54 L76,74"/>
  <circle class="h" cx="44" cy="13" r="6.5"/><path class="b" d="M44,20 L44,44"/>
  <path class="a" d="M44,44 L40,60 L44,73 M37,74 L51,74"/><path class="b" d="M44,44 L64,53 L80,51"/>
  <path class="b" d="M38,26 L33,46 M50,26 L55,46"/>
  <circle class="h" cx="33" cy="49" r="5"/><circle class="h" cx="55" cy="49" r="5"/>`,
'fig-remomanc':`<path class="eq" d="M72,52 L104,52 L104,75 M72,52 L72,75"/>
  <circle class="h" cx="20" cy="38" r="6.5"/><path class="b" d="M27,42 L72,50"/>
  <path class="a" d="M36,44 L38,62"/><circle class="h" cx="38" cy="66" r="6"/>
  <path class="b" d="M64,48 L74,52"/><path class="b" d="M58,47 L56,75 M50,76 L64,76"/>
  <path class="ar" d="M48,66 L48,50 M44,55 L48,48 L52,55"/>`
};
function figura(id, alto){
  const c=FIGURAS[id]; if(!c) return '';
  return `<svg class="fig" viewBox="0 0 120 80" style="height:${alto||60}px" aria-hidden="true">`+
    `<line class="suelo" x1="6" y1="77" x2="114" y2="77"/>${c}</svg>`;
}

/* ╚═══════════════ FIN DE LA CAPA DE DATOS ═══════════════╝ */