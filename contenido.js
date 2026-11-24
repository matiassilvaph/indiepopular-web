/* =========================================================
   CONTENIDO DE LA WEB — editá solo este archivo
   Para sumar una nota: copiá un bloque { ... } de NOTAS,
   pegalo ARRIBA de todo (la primera es la portada).
   imagen: ruta a una foto propia en img/ o "" para usar una placa de color.
   placa: texto corto que va en la placa cuando no hay foto.
   ========================================================= */

const CONFIG = {
  instagram: "https://www.instagram.com/indiepopular/",
  youtube: "https://www.youtube.com/@indiepopular",
  email: "[tu-mail@ejemplo.com]"
};

/* categoria: "Noticias" | "Descubrir" | "Entrevistas" | "Cobertura" | "Agenda" */
const NOTAS = [
  {
    id: "aky-heredia-la-amistad-sonora-aniversario",
    categoria: "Cobertura",
    fecha: "2026-11-24",
    titulo: "Aky Heredia en el primer aniversario de La Amistad Sonora",
    bajada: "Guitarra criolla y pandereta en el pie en el festejo de La Amistad Sonora, en San Miguel.",
    imagen: "img/las-aniversario/aky-01.jpg",
    credito: "Fotos: Matías Silva",
    autor: "Indie Popular",
    cuerpo: [
      "El domingo 22 de noviembre, La Amistad Sonora festejó su primer año con una edición especial en San Miguel, en España y Sarmiento. La fecha fue de 18 a 24 h y tuvo como eje un homenaje a The Clash x Radio Kapital, con Christian Vaca y Aky Heredia en la grilla.",
      "La jornada sumó selectores pasando vinilos, stands de música, pintura en vivo de Eluxbe y swing a cargo de Contraluz.",
      "Aky se presentó solo, con su guitarra criolla cubierta de stickers y una pandereta que marcaba el pulso desde el pie. Estuvimos ahí para registrar su set.",
      "Para escuchar sus canciones: Aky Heredia está en Spotify y en Instagram como @akyheredia."
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
    id: "primavera-sound-2026-cobertura",
    categoria: "Cobertura",
    fecha: "2026-11-24",
    titulo: "Vamos al Primavera Sound Buenos Aires",
    bajada: "Indie Popular va a cubrir el festival el 28 y 29 de noviembre en el Club Ciudad de Buenos Aires.",
    imagen: "img/primavera.jpg",
    credito: "Foto: Matías Silva",
    autor: "Indie Popular",
    cuerpo: [
      "Este fin de semana vamos a estar en el Primavera Sound Buenos Aires con fotos, videos y entrevistas.",
      "Seguí la cobertura en vivo en nuestro Instagram y acá en la web."
    ]
  },
  {
    id: "primavera-sound-2026-grilla-por-dia",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Primavera Sound BA: quién toca cada día",
    placa: "Primavera Sound: la grilla por día",
    bajada: "Gorillaz cierra el sábado y The Strokes el domingo. La escena argentina tiene lugar en las dos jornadas.",
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "El festival vuelve a Buenos Aires el sábado 28 y el domingo 29 de noviembre, en el Club Ciudad de Buenos Aires (Núñez). Las entradas se venden por EnigmaTickets.",
      "Sábado 28: Gorillaz, Yung Lean, CMAT, Danny L Harle, Nation of Language, Cara Delevingne, Ecco2k, Marilina Bertoldi, Jaime Sin Tierra, John Talabot, Juliana Gattas, Los Thuthanaka, Metrika, Model/Actriz, Nick León, Ambik, Babeblade, Chechi de Marcos, LISA SCHA, María Wolff, El Nota y Wiranda Johansen.",
      "Domingo 29: The Strokes, FKA twigs, Lily Allen, Courtney Barnett, underscores, Juana Molina, Santiago Motorizado, Smerz, Juana Aguirre, Machine Girl, Mannequin Pussy, Sophia Stel, This Is Lorelei, Candelabro, Fin del Mundo, Pizza, Sunlid y Yevo.",
      "Para nosotros, lo más atractivo está en los artistas argentinos: Marilina Bertoldi, Juana Molina, Santiago Motorizado, Juliana Gattas, El Nota, Fin del Mundo y Pizza, entre otros."
    ],
    fuentes: [
      { nombre: "La Nación", url: "https://www.lanacion.com.ar/que-sale/primavera-sound-confirmo-su-sede-en-buenos-aires-donde-tocan-gorillaz-y-the-strokes-nid04082026/" }
    ]
  },
  {
    id: "sonido-konex-diciembre-2026",
    categoria: "Agenda",
    fecha: "2026-11-23",
    titulo: "Sonido Konex cierra el año con tres bandas emergentes",
    placa: "Sonido Konex · 5 de diciembre",
    bajada: "Buenos Vampiros, Nina Suárez y Tomates en Verano tocan el sábado 5 de diciembre en el Konex.",
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "El ciclo de la Ciudad Cultural Konex dedicado a la escena emergente anunció su fecha de diciembre: será el sábado 5 a las 19 h.",
      "La grilla reúne a tres proyectos: Buenos Vampiros, Nina Suárez y Tomates en Verano. Las entradas están a la venta en la ticketera oficial del Konex (Sarmiento 3131, Abasto)."
    ],
    fuentes: [
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/sonido-konex-en-diciembre-fecha-bandas-y-entradas-2026/" }
    ]
  },
  {
    id: "quilmes-rock-2027-lineup",
    categoria: "Noticias",
    fecha: "2026-11-23",
    titulo: "Quilmes Rock 2027 presentó su grilla",
    placa: "Quilmes Rock 2027",
    bajada: "Tres jornadas en abril con Babasónicos, Divididos, Fito Páez y un homenaje a Spinetta.",
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "El festival se va a hacer el 16, 17 y 18 de abril de 2027.",
      "Entre los nombres principales están Babasónicos, Divididos, Fito Páez, Los Fabulosos Cadillacs, Ratones Paranoicos, Jet, Jorge Drexler y Las Pelotas. También se anunció un homenaje a Luis Alberto Spinetta.",
      "Del lado de la escena actual aparecen Bandalos Chinos, Winona Riders y Dum Chica, entre otros. Las entradas se venden por EnigmaTickets."
    ],
    fuentes: [
      { nombre: "La Nación", url: "https://www.lanacion.com.ar/espectaculos/personajes/quilmes-rock-2027-se-anuncio-el-line-up-completo-del-festival-con-grandes-figuras-regresos-y-nid02112026/" },
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/quilmes-rock-2027-anuncia-su-line-up-babasonicos-fito-paez-y-mas/" }
    ]
  }
];

/* Agenda de recitales. Borrá las fechas viejas. */
const AGENDA = [
  { dia: "28/11", artista: "Primavera Sound BA · día 1 (Gorillaz, Marilina Bertoldi, El Nota)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "Sábado" },
  { dia: "29/11", artista: "Primavera Sound BA · día 2 (The Strokes, Juana Molina, Santiago Motorizado)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "Domingo" },
  { dia: "05/12", artista: "Sonido Konex: Buenos Vampiros, Nina Suárez, Tomates en Verano", lugar: "Ciudad Cultural Konex, Sarmiento 3131", hora: "19 h" }
];

/* Artistas que pasaron por el Indie Popular (de los flyers) */
const ARTISTAS = [
  "Tafio", "Un Negrito", "Gatos Rayados", "Clowns Band", "Un Viaje de Tyson",
  "Aky Heredia", "El Pure", "Iván B", "Domadores de Serpientes", "Vicky Ruggiero",
  "Seba Atomo", "Jesica Anabel", "Matías Silva", "Tavella"
];
