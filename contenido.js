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
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "La Academia de la Grabación de Estados Unidos anunció el 16 de noviembre los nominados a la 69.ª edición de los premios Grammy. La ceremonia se realizará el domingo 7 de febrero de 2027 en el Crypto.com Arena de Los Ángeles.",
      "En Mejor Álbum de Rock Latino o Alternativo compiten tres discos argentinos: Free Spirits, de Ca7riel y Paco Amoroso; La vida era más corta, de Milo J, y Shine, de Fito Páez. Completan la categoría Taracá, de Jorge Drexler, y Juanesteban, de Juanes.",
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
      "Artistas argentinos del domingo: Fin del Mundo (14:30, Heineken), Santiago Motorizado (16:55, Heineken) y Juana Molina (18:45, Heineken).",
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
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "Sonido Konex, el ciclo de la Ciudad Cultural Konex dedicado a la escena emergente, anunció su edición de diciembre: será el sábado 5 a las 19 h.",
      "La fecha reúne a Buenos Vampiros, Nina Suárez y Tomates en Verano. Las entradas se venden a través de la ticketera oficial del Konex (Sarmiento 3131, Abasto)."
    ],
    fuentes: [
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/sonido-konex-en-diciembre-fecha-bandas-y-entradas-2026/" }
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

/* Agenda de recitales. Borrá las fechas viejas. */
const AGENDA = [
  { dia: "28/11", artista: "Primavera Sound BA · día 1 (Gorillaz, Marilina Bertoldi, El Nota)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "14:15 a 00:00" },
  { dia: "29/11", artista: "Primavera Sound BA · día 2 (The Strokes, Juana Molina, Santiago Motorizado)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "14:15 a 23:45" },
  { dia: "05/12", artista: "Sonido Konex: Buenos Vampiros, Nina Suárez, Tomates en Verano", lugar: "Ciudad Cultural Konex, Sarmiento 3131", hora: "19 h" }
];

/* Artistas que tocaron en los ciclos de Indie Popular (de los flyers) */
const ARTISTAS = [
  "Tafio", "Un Negrito", "Gatos Rayados", "Clowns Band", "Un Viaje de Tyson",
  "Aky Heredia", "El Pure", "Iván B", "Domadores de Serpientes", "Vicky Ruggiero",
  "Seba Atomo", "Jesica Anabel", "Matías Silva", "Tavella"
];
