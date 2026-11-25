/* =========================================================
   CONTENIDO DE LA WEB — editá solo este archivo
   Para sumar una nota: copiá un bloque { ... } de NOTAS,
   pegalo ARRIBA de todo (la primera es la portada).
   imagen: ruta a una foto propia en img/ o "" para usar una placa de color.
   placa: dato corto y grande para la placa (fecha, lugar) cuando no hay foto.
   placaDetalle: 3 a 5 líneas cortas separadas por \\n (artistas, lugar).
   ========================================================= */

const CONFIG = {
  instagram: "https://www.instagram.com/indiepopular/",
  youtube: "https://www.youtube.com/@indiepopular",
  email: "indiepopular@gmail.com"
};

/* categoria: "Noticias" | "Descubrir" | "Entrevistas" | "Cobertura" | "Agenda" */
const NOTAS = [
  {
    id: "trueno-movistar-arena-abril-2027",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Trueno presenta TURR4ZO en el Movistar Arena: fecha y entradas",
    placa: "Trueno",
    placaDetalle: "TURR4ZO World Tour\n\n11 de abril de 2027\nMovistar Arena",
    bajada: "El rapero de La Boca toca el 11 de abril de 2027 en el Movistar Arena, su primer show en ese estadio. La preventa ya empezó.",
    imagen: "img/noticias/trueno-2026.jpg",
    credito: "Trueno. Foto: Instagram oficial de Trueno.",
    autor: "Indie Popular",
    cuerpo: [
      "Trueno se presentará el 11 de abril de 2027 en el Movistar Arena de Buenos Aires, en el marco del TURR4ZO World Tour. Será su primer show en ese estadio y la preventa de entradas ya comenzó.",
      "El concierto tendrá como eje TURR4ZO, su cuarto álbum de estudio, publicado en abril de 2026, con participaciones de María Becerra, Milo J y Andrés Calamaro, entre otros. La gira lo llevó por Asia, Europa y América, con una presentación en el Fuji Rock Festival de Japón.",
      "La conexión de Trueno con el mundo alternativo pasa por Gorillaz: es el invitado de «The Manifesto», junto al fallecido rapero Proof, una de las canciones de The Mountain, el disco que hoy compite en los Grammy como Mejor Álbum de Música Alternativa. Además, fue telonero de la banda de Damon Albarn en fechas seleccionadas de su gira por Reino Unido e Irlanda en 2026.",
      "La relación viene de antes: en el Quilmes Rock 2022, Trueno subió a improvisar en medio de «Clint Eastwood» durante el show de Gorillaz."
    ],
    fuentes: [
      { nombre: "Perfil", url: "https://perfil.com/arte-cultura/con-una-firma-de-sus-vinilos-trueno-anticipo-lo-que-viene-en-su-primer-show-en-el-movistar-arena-aIYqa5b7sR7J" },
      { nombre: "Minuto Uno", url: "https://www.minutouno.com/espectaculos/trueno-confirmo-su-regreso-la-argentina-un-show-2027-cuando-comprar-las-entradas-n6345173" },
      { nombre: "Rolling Stone en Español", url: "https://es.rollingstone.com/arg-trueno-se-une-a-gorillaz-en-the-manifesto-el-nuevo-adelanto-de-su-proximo-disco/" },
      { nombre: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/gorillaz-trueno-d12-rapper-proof-new-song-the-manifesto-1235443081/" },
      { nombre: "La Capital", url: "https://www.lacapital.com.ar/zoom/gorillaz-adelanta-su-nuevo-disco-una-cancion-junto-trueno-n10223367.html" }
    ]
  },
  {
    id: "faith-no-more-alice-in-chains-mastodon-estadio-ferro-2027",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Faith No More vuelve a la Argentina con Alice In Chains y Mastodon: fecha y lugar",
    placa: "Faith No More",
    placaDetalle: "+ Alice In Chains\n+ Mastodon\n\n7 de noviembre de 2027\nEstadio Ferro",
    bajada: "La banda de Mike Patton toca el 7 de noviembre de 2027 en el Estadio Ferro, con Alice In Chains y Mastodon como invitados.",
    imagen: "img/noticias/faith-no-more-2027.jpg",
    credito: "Faith No More. Foto: Travis Shinn.",
    autor: "Indie Popular",
    cuerpo: [
      "Faith No More tocará el domingo 7 de noviembre de 2027 en el Estadio Ferro, en Caballito, con Alice In Chains y Mastodon como invitados especiales. Será su primera presentación en el país en doce años.",
      "La fecha forma parte del Faith No More South America Tour 2027, anunciado el 17 de noviembre. La gira empieza el 29 de octubre en São Paulo (Nubank Parque) y sigue el 31 de octubre en Curitiba (Arena da Baixada) y el 4 de noviembre en Santiago de Chile (Parque Cerrillos), antes de cerrar en Buenos Aires.",
      "Antes de esta gira, Faith No More se presentará el 15 de enero de 2027 junto a System of a Down en el estadio Maracaná de Río de Janeiro.",
      "La fecha de venta de entradas para el show de Buenos Aires todavía no fue informada. Indie Popular actualizará la información cuando se anuncie."
    ],
    fuentes: [
      { nombre: "Tiempo Argentino", url: "https://www.tiempoar.com.ar/ta_article/faith-no-more-argentina-alice-in-chains-mastodon/" },
      { nombre: "Indie Hoy (agenda)", url: "https://indiehoy.com/?p=879545" },
      { nombre: "The Music Universe", url: "https://themusicuniverse.com/faith-no-more-reveals-2027-south-american-tour-dates/" },
      { nombre: "El Dínamo", url: "https://www.eldinamo.cl/entretencion/2026/11/17/faith-no-more-vuelve-a-chile-la-banda-de-mike-patton-confirma-su-regreso-para-noviembre-2027/" }
    ]
  },
  {
    id: "aky-heredia-la-amistad-sonora-aniversario",
    categoria: "Cobertura",
    fecha: "2026-11-24",
    titulo: "Aky Heredia en el primer aniversario de La Amistad Sonora",
    bajada: "El ciclo de San Miguel celebró su primer año con un homenaje a The Clash. Registramos el set de Aky Heredia.",
    imagen: "img/las-aniversario/aky-01.jpg",
    credito: "Fotos: Matías Silva",
    autor: "Indie Popular",
    cuerpo: [
      "El domingo 22 de noviembre, La Amistad Sonora festejó su primer año con una edición especial en San Miguel, en España y Sarmiento. La fecha fue de 18 a 24 h y tuvo como eje un homenaje a The Clash x Radio Kapital, con Christian Vaca y Aky Heredia en la grilla.",
      "La jornada sumó selectores pasando vinilos, stands de música, pintura en vivo de Eluxbe y swing a cargo de Contraluz.",
      "Aky Heredia se presentó en formato solista, con guitarra criolla y una pandereta que marcaba el pulso desde el pie.",
      "La música de Aky Heredia está disponible en Spotify. En Instagram: @akyheredia."
    ],
    galeria: [
      "img/las-aniversario/aky-02.jpg",
      "img/las-aniversario/aky-03.jpg",
      "img/las-aniversario/aky-04.jpg",
      "img/las-aniversario/aky-07.jpg",
      "img/las-aniversario/aky-06.jpg",
      "img/las-aniversario/aky-08.jpg"
    ]
  },
  {
    id: "grammy-2027-nominados-argentinos-gorillaz",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Grammy 2027: Ca7riel y Paco Amoroso, Milo J, Fito Páez y Gorillaz, entre los nominados",
    placa: "Grammy 2027",
    placaDetalle: "Ca7riel y Paco Amoroso\nMilo J\nFito Páez\nGorillaz\n\n7 de febrero · Los Ángeles",
    bajada: "Tres discos argentinos compiten en Mejor Álbum de Rock Latino o Alternativo. La ceremonia será el 7 de febrero en Los Ángeles.",
    imagen: "img/grammy-2027/ca7riel.jpg",
    galeria: ["img/grammy-2027/milo.jpg", "img/grammy-2027/fito.jpg", "img/grammy-2027/drexler.jpg", "img/grammy-2027/juanes.jpg", "img/grammy-2027/gorillaz.jpg"],
    credito: "Ca7riel y Paco Amoroso. Foto: Ryusei Sabi.",
    creditoGaleria: "Milo J (foto: prensa), Fito Páez (@fitopaezmusica), Jorge Drexler (@drexlerjorge), Juanes (@juanes) y tapa de The Mountain, de Gorillaz.",
    autor: "Indie Popular",
    cuerpo: [
      "La Academia de la Grabación de Estados Unidos anunció el 16 de noviembre los nominados a la 69.ª edición de los premios Grammy. La ceremonia se realizará el domingo 7 de febrero de 2027 en el Crypto.com Arena de Los Ángeles.",
      "En Mejor Álbum de Rock Latino o Alternativo compiten tres discos argentinos: Free Spirits, de Ca7riel y Paco Amoroso; La vida era más corta, de Milo J, y Shine, de Fito Páez. Completan la categoría Taracá, de Jorge Drexler, y Juanesteban, de Juanes.",
      "Shine ya le dio a Fito Páez el Latin Grammy 2026 a Mejor Álbum de Rock.",
      "Ca7riel y Paco Amoroso suman una segunda nominación: Mejor Grabación Remezclada, por «Beto's Horns», junto a Fred Again..",
      "En Mejor Álbum de Música Alternativa está nominado The Mountain, de Gorillaz, que encabeza el sábado 28 la primera jornada del Primavera Sound Buenos Aires. Compite con I Must Be Dreaming (Alabama Shakes), Lost Weekend (Phoebe Bridgers), Music, Fashion, Film (Charli XCX), Getting Killed (Geese) y Lux (Rosalía).",
      "El Primavera Sound Buenos Aires destacó que cuatro artistas de su grilla están nominados: Gorillaz (Mejor Álbum de Música Alternativa), Lily Allen (Mejor Portada de Álbum), Yung Lean (Mejor Video Musical por «STORM», con GENER8ION) y underscores (Mejor Grabación de Dance/Electrónica). Todos tocan en el Club Ciudad el 28 y 29 de noviembre.",
      "En el total de candidaturas, RAYE lidera con once y Rosalía la sigue con nueve."
    ],
    fuentes: [
      { nombre: "NBC Chicago", url: "https://www.nbcchicago.com/entertainment/entertainment-news/2027-grammy-nominations-see-the-full-list/" },
      { nombre: "The Fader", url: "https://www.thefader.com/2026/11/16/2027-grammy-nominations-raye-underscores" },
      { nombre: "Hypebeast", url: "https://hypebeast.com/it/2026/11/2027-69th-grammy-awards-nominations-full-list" },
      { nombre: "Primavera Sound Buenos Aires (Instagram)", url: "https://www.instagram.com/primaverasoundbuenosaires/" }
    ]
  },
  {
    id: "primavera-sound-2026-grilla-por-dia",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Primavera Sound BA: los horarios de cada día",
    bajada: "Gorillaz cierra el sábado a las 21:25 y The Strokes el domingo a las 22:30. La música arranca a las 14:15.",
    imagen: "img/primavera-lineup-oficial.jpg",
    credito: "Imágenes oficiales: Primavera Sound Buenos Aires / Popart Music",
    autor: "Indie Popular",
    cuerpo: [
      "El festival publicó los horarios para el sábado 28 y el domingo 29 de noviembre en el Club Ciudad de Buenos Aires, en Núñez. Hay tres escenarios: Heineken, Primavera y Barcelona. La música arranca a las 14:15 los dos días.",
      "Sábado 28: Gorillaz toca de 21:25 a 22:55 en el escenario Heineken. Antes pasan Yung Lean (19:10), CMAT (20:15) y Ecco2k (20:15). La noche cierra con Danny L Harle y John Talabot hasta las 00:00.",
      "Domingo 29: The Strokes toca de 22:30 a 23:45 en el escenario Primavera. Antes, FKA twigs (19:50), Lily Allen (21:20), Courtney Barnett (17:50) y underscores (19:00).",
      "Artistas argentinos del sábado: El Nota (15:00, Primavera), Juliana Gattas (16:20, Primavera), Marilina Bertoldi (17:10, Heineken) y Jaime Sin Tierra (19:00, Barcelona).",
      "Artistas argentinos del domingo: Pizza (14:15, Barcelona), Fin del Mundo (14:30, Heineken), Santiago Motorizado (16:55, Heineken) y Juana Molina (18:45, Heineken).",
      "Indie Popular cubrirá las dos jornadas. La cobertura se publicará en nuestro Instagram y en esta web."
    ],
    galeria: [
      "img/primavera-grilla-sabado.jpg",
      "img/primavera-grilla-domingo.jpg"
    ]
  },
  {
    id: "sonido-konex-diciembre-2026",
    categoria: "Agenda",
    fecha: "2026-11-23",
    titulo: "Sonido Konex cierra el año con Buenos Vampiros, Nina Suárez y Tomates en Verano",
    placa: "Sáb 5 dic · 19 h",
    placaDetalle: "Buenos Vampiros\nNina Suárez\nTomates en Verano\n\nSonido Konex · Abasto",
    bajada: "Buenos Vampiros, Nina Suárez y Tomates en Verano tocan el sábado 5 de diciembre en el Konex.",
    imagen: "img/noticias/buenos-vampiros.jpg",
    credito: "Buenos Vampiros. Foto: @shootingtobi.",
    galeria: ["img/noticias/nina-suarez.jpg", "img/noticias/tomates-en-verano.jpg"],
    creditoGaleria: "Nina Suárez (foto: difusión). Tomates en Verano (foto: Instagram de la banda).",
    autor: "Indie Popular",
    cuerpo: [
      "Sonido Konex, el ciclo de la Ciudad Cultural Konex dedicado a la escena emergente, anunció su edición de diciembre: será el sábado 5 a las 19 h.",
      "La fecha reúne a Buenos Vampiros, Nina Suárez y Tomates en Verano. Las entradas se venden a través de la ticketera oficial del Konex (Sarmiento 3131, Abasto).",
      "La fecha, presentada por Casa del Puente Discos y Sonido Konex, es la presentación en vivo de El último disparo, el cuarto disco de Buenos Vampiros, publicado en septiembre de 2026 y grabado en enero en Mar del Plata. Para Tomates en Verano será el cierre de su año."
    ],
    fuentes: [
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/sonido-konex-en-diciembre-fecha-bandas-y-entradas-2026/" },
      { nombre: "Instagram de Buenos Vampiros", url: "https://www.instagram.com/buenosvampiros/" },
      { nombre: "Instagram de Casa del Puente Discos", url: "https://www.instagram.com/casadelpuentediscos/" }
    ]
  },
  {
    id: "quilmes-rock-2027-lineup",
    categoria: "Noticias",
    fecha: "2026-11-23",
    titulo: "Quilmes Rock 2027 anunció sus primeros confirmados",
    placa: "16, 17 y 18 de abril",
    placaDetalle: "Babasónicos\nDivididos\nFito Páez\nLos Fabulosos Cadillacs\n+ homenaje a Spinetta",
    bajada: "Tres jornadas en abril con Babasónicos, Divididos, Fito Páez y un homenaje a Spinetta.",
    imagen: "img/quilmes-rock-2027-oficial.jpg",
    credito: "Grilla oficial: Quilmes Rock / Popart Music",
    autor: "Indie Popular",
    cuerpo: [
      "El Quilmes Rock se realizará el 16, 17 y 18 de abril de 2027. Las entradas están a la venta en EnigmaTickets.",
      "Encabezan el anuncio Babasónicos, Divididos, Fito Páez, Jet, Los Fabulosos Cadillacs, Ratones Paranoicos, Los Auténticos Caligaris, Jorge Drexler, Las Pelotas y Henry & La Palangana.",
      "La grilla incluye además a Ángela Torres, Bandalos Chinos, Cruzando el Charco, Dante Spinetta, El Mató a un Policía Motorizado, Fricción, Kevin Johansen + The Nada, Los Cafres, Marilina Bertoldi, Turf y Virus, entre muchos otros. También está anunciado Spinetta x Malosetti.",
      "También figuran Winona Riders, Mi Amigo Invencible, Dum Chica, Babeblade, Pizza y Chechi de Marcos."
    ],
    fuentes: [
      { nombre: "La Nación", url: "https://www.lanacion.com.ar/espectaculos/personajes/quilmes-rock-2027-se-anuncio-el-line-up-completo-del-festival-con-grandes-figuras-regresos-y-nid02112026/" },
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/quilmes-rock-2027-anuncia-su-line-up-babasonicos-fito-paez-y-mas/" }
    ]
  }
];

/* Agenda de recitales, en orden cronológico. Borrá las fechas viejas. */
const AGENDA = [
  { dia: "24/11", artista: "Hot Chip", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "26/11", artista: "Johnny Marr", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "26/11", artista: "Gorillaz", lugar: "Estadio Mario Alberto Kempes, Córdoba", hora: "A confirmar" },
  { dia: "26/11", artista: "Underworld", lugar: "Mandarine Park, Costanera Norte", hora: "A confirmar" },
  { dia: "27/11", artista: "Barbi Recanati", lugar: "Niceto Club, Palermo", hora: "A confirmar" },
  { dia: "27/11", artista: "Eruca Sativa", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "28/11", artista: "A Perfect Circle", lugar: "Estadio Malvinas Argentinas, Paternal", hora: "A confirmar" },
  { dia: "28/11", artista: "Primavera Sound BA · día 1 (Gorillaz, Marilina Bertoldi, El Nota)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "14:15 a 00:00" },
  { dia: "29/11", artista: "Primavera Sound BA · día 2 (The Strokes, Juana Molina, Santiago Motorizado)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "14:15 a 23:45" },
  { dia: "29/11", artista: "Marc Almond", lugar: "El Teatrito, Buenos Aires", hora: "A confirmar" },
  { dia: "30/11", artista: "FKA twigs", lugar: "Teatro Coliseo, Retiro", hora: "A confirmar" },
  { dia: "01/12", artista: "New Order", lugar: "Mandarine Park, Costanera Norte", hora: "A confirmar" },
  { dia: "01/12", artista: "Giant Rooks", lugar: "Teatro Vorterix, Colegiales", hora: "A confirmar" },
  { dia: "01/12", artista: "underscores", lugar: "Deseo, Buenos Aires", hora: "A confirmar" },
  { dia: "02/12", artista: "American Football", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "03/12", artista: "Of Monsters and Men", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "03/12", artista: "Jaime Sin Tierra", lugar: "Deseo, Buenos Aires", hora: "A confirmar" },
  { dia: "04/12", artista: "Mi Amigo Invencible", lugar: "Niceto Club, Palermo", hora: "A confirmar" },
  { dia: "04/12", artista: "Santiago Motorizado", lugar: "Deseo, Buenos Aires", hora: "A confirmar" },
  { dia: "05/12", artista: "Sonido Konex: Buenos Vampiros, Nina Suárez, Tomates en Verano", lugar: "Ciudad Cultural Konex, Sarmiento 3131", hora: "19 h" },
  { dia: "05/12", artista: "Popfest", lugar: "Parque Norte", hora: "A confirmar" },
  { dia: "05/12", artista: "Daniel Caesar", lugar: "Estadio Obras Sanitarias, Núñez", hora: "A confirmar" },
  { dia: "08/12", artista: "Shintaro Sakamoto", lugar: "Niceto Club, Palermo", hora: "A confirmar" },
  { dia: "15/01", artista: "Rush", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "05/02", artista: "Jack Johnson", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "06/02", artista: "María Becerra (también 7 de febrero)", lugar: "Movistar Arena, Villa Crespo", hora: "21 h" },
  { dia: "06/02", artista: "Cosquín Rock 2027 (6 y 7 de febrero)", lugar: "Aeródromo de Santa María de Punilla, Córdoba", hora: "A confirmar" },
  { dia: "25/02", artista: "Foo Fighters", lugar: "Estadio River Plate, Núñez", hora: "A confirmar" },
  { dia: "03/03", artista: "Placebo", lugar: "Estadio Malvinas Argentinas, Paternal", hora: "A confirmar" },
  { dia: "12/03", artista: "Lollapalooza Argentina 2027 (12, 13 y 14 de marzo)", lugar: "Hipódromo de San Isidro", hora: "A confirmar" },
  { dia: "23/03", artista: "Kasabian", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "23/03", artista: "U2 (también 25 y 27 de marzo)", lugar: "Estadio River Plate, Núñez", hora: "A confirmar" },
  { dia: "01/04", artista: "Jungle", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "04/04", artista: "Pixies", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "11/04", artista: "Trueno (TURR4ZO World Tour)", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "16/04", artista: "Quilmes Rock 2027 (16, 17 y 18 de abril)", lugar: "A confirmar", hora: "A confirmar" },
  { dia: "22/05", artista: "El Cuarteto de Nos", lugar: "Movistar Arena, Villa Crespo", hora: "21 h" },
  { dia: "27/05", artista: "Beth Gibbons", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "07/11/2027", artista: "Faith No More + Alice In Chains + Mastodon", lugar: "Estadio Ferro, Caballito", hora: "A confirmar" }
];

/* Artistas que tocaron en los ciclos de Indie Popular (de los flyers) */
const ARTISTAS = [
  "Tafio", "Un Negrito", "Gatos Rayados", "Clowns Band", "Un Viaje de Tyson",
  "Aky Heredia", "El Pure", "Iván B", "Domadores de Serpientes", "Vicky Ruggiero",
  "Seba Atomo", "Jesica Anabel", "Matías Silva", "Tavella"
];
