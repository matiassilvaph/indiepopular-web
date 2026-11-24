/* =========================================================
   CONTENIDO DE LA WEB — editá solo este archivo
   Para sumar una nota: copiá un bloque { ... } de NOTAS,
   pegalo ARRIBA de todo (la primera es la más nueva),
   cambiá los datos y subí la carpeta de nuevo a Netlify.
   ========================================================= */

const CONFIG = {
  instagram: "https://www.instagram.com/indiepopular/",
  youtube: "https://www.youtube.com/@indiepopular",
  email: "[tu-mail@ejemplo.com]"
};

/* categoria: "Noticias" | "Descubrir" | "Entrevistas" | "Cobertura" */
const NOTAS = [
  {
    id: "primavera-sound-2026",
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
    id: "ejemplo-descubrir",
    categoria: "Descubrir",
    fecha: "2026-11-20",
    titulo: "[Nombre del artista]",
    bajada: "[Ciudad] · [género]. Una línea sobre por qué hay que escucharlo.",
    imagen: "img/nota-1.jpg",
    credito: "Foto: Matías Silva",
    autor: "[Autor]",
    cuerpo: [
      "[Primer párrafo de la nota.]",
      "[Segundo párrafo de la nota.]"
    ]
  },
  {
    id: "ejemplo-entrevista",
    categoria: "Entrevistas",
    fecha: "2026-11-15",
    titulo: "“[Frase destacada de la entrevista]”",
    bajada: "Charlamos con [artista] sobre [tema].",
    imagen: "img/nota-2.jpg",
    credito: "Foto: Matías Silva",
    autor: "Aky Heredia",
    cuerpo: [
      "[Introducción de la entrevista.]",
      "[Pregunta y respuesta.]"
    ]
  },
  {
    id: "ejemplo-noticia",
    categoria: "Noticias",
    fecha: "2026-11-10",
    titulo: "[Título de la noticia]",
    bajada: "[Bajada de una o dos líneas.]",
    imagen: "img/nota-3.jpg",
    credito: "Foto: Matías Silva",
    autor: "[Autor]",
    cuerpo: [
      "[Texto de la noticia.]"
    ]
  }
];

/* Agenda de recitales independientes. Borrá las fechas viejas. */
const AGENDA = [
  { dia: "[DD/MM]", artista: "[Artista / banda]", lugar: "[Lugar], [dirección]", hora: "[hora] h" },
  { dia: "[DD/MM]", artista: "[Artista / banda]", lugar: "[Lugar], [dirección]", hora: "[hora] h" },
  { dia: "[DD/MM]", artista: "[Artista / banda]", lugar: "[Lugar], [dirección]", hora: "[hora] h" }
];

/* Artistas que pasaron por el Indie Popular (de los flyers) */
const ARTISTAS = [
  "Tafio", "Un Negrito", "Gatos Rayados", "Clowns Band", "Un Viaje de Tyson",
  "Aky Heredia", "El Pure", "Iván B", "Domadores de Serpientes", "Vicky Ruggiero",
  "Seba Atomo", "Jesica Anabel", "Matías Silva", "Tavella"
];
