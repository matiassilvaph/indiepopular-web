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
    id: "bestia-bebe-c-art-media-2026",
    categoria: "Agenda",
    fecha: "2026-11-25",
    titulo: "Bestia Bebé despide el año en C Art Media con Yendo Rápido a Ningún Lugar",
    placa: "Bestia Bebé",
    placaDetalle: "Yendo Rápido a Ningún Lugar\nDomingo 20 de diciembre\nC Art Media, Chacarita\nEntradas: Passline",
    bajada: "La banda presenta su sexto disco el domingo 20 de diciembre en C Art Media, Chacarita. Entradas por Passline.",
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "Bestia Bebé toca el domingo 20 de diciembre en el Complejo C Art Media (Av. Corrientes 6271, Chacarita), donde presenta oficialmente Yendo Rápido a Ningún Lugar, su sexto disco de estudio. Las entradas anticipadas se venden por Passline.",
      "Discos Laptra anunció la fecha como la despedida del año de la banda: «La noche promete un repaso por Yendo Rápido a Ningún Lugar (2026) y los himnos de siempre».",
      "El disco reúne diez canciones y salió por Primavera Labels. La formación actual es Tom Quintans (voz y guitarra), Polaco Ocorso (batería), Chicho Guisolfi (bajo) y Marki Canosa (guitarra).",
      "Diciembre llega cargado para la escena: Santiago Motorizado cierra la gira de El Retorno el 4 de diciembre en Deseo, y El Mató a un Policía Motorizado toca el 15 y el 16 en C Art Media y el 19 en el Hipódromo de La Plata."
    ],
    fuentes: [
      { nombre: "Discos Laptra", url: "https://laptra.substack.com/p/bestia-bebe-despide-el-ano-en-el" },
      { nombre: "Passline", url: "https://www.passline.com/eventos/bestia-bebe-presenta-yendo-rapido-a-ningun-lugar-569793" },
      { nombre: "Ámbito", url: "https://www.ambito.com/espectaculos/bestia-bebe-presenta-su-nuevo-disco-un-show-buenos-aires-como-y-donde-comprar-las-entradas-n6340617" },
      { nombre: "FM La Boca", url: "https://fmlaboca.com.ar/bestia-bebe-c-art-media-20-diciembre-2026/" }
    ]
  },
  {
    id: "johnny-marr-c-art-media-noviembre-2026",
    categoria: "Agenda",
    fecha: "2026-11-25",
    titulo: "Johnny Marr presenta The Age of Everything este jueves en C Art Media",
    placa: "Johnny Marr",
    placaDetalle: "The Age of Everything\nJueves 26 de noviembre\nC Art Media, Chacarita\nEntradas: Passline",
    bajada: "El exguitarrista de The Smiths toca el jueves 26 de noviembre en C Art Media, Chacarita, con las canciones de su quinto disco solista.",
    imagen: "img/noticias/johnny-marr.jpg",
    credito: "Johnny Marr. Foto: Instagram oficial del artista.",
    autor: "Indie Popular",
    cuerpo: [
      "Johnny Marr se presenta el jueves 26 de noviembre en el Complejo C Art Media (Av. Corrientes 6271, Chacarita). Las entradas se venden por Passline y, según la agenda de Indie Hoy, parten de $95.000.",
      "El guitarrista llega con The Age of Everything, su quinto álbum de estudio como solista, que salió el 2 de octubre con diez canciones. El primer adelanto fue «Spin».",
      "Marr fue guitarrista de The Smiths. Además de su carrera solista, colaboró con Pet Shop Boys y participó junto a Hans Zimmer en la música de No Time to Die, la película de James Bond.",
      "La fecha abre una semana cargada en Buenos Aires: el sábado 28 y el domingo 29 se hace el Primavera Sound en el Club Ciudad, y el martes 1 de diciembre New Order toca en Mandarine Park."
    ],
    fuentes: [
      { nombre: "Indie Hoy", url: "https://indiehoy.com/recitales/johnny-marr-vuelve-a-la-argentina-fecha-lugar-y-entradas/" },
      { nombre: "Indie Hoy (agenda)", url: "https://indiehoy.com/agenda/johnny-marr-argentina-2026/" },
      { nombre: "Tiempo Argentino", url: "https://www.tiempoar.com.ar/ta_article/johnny-marr-argentina/" }
    ]
  },
  {
    id: "lollapalooza-argentina-2027-grilla-por-dia",
    categoria: "Noticias",
    fecha: "2026-11-25",
    titulo: "Lollapalooza Argentina 2027: quién toca cada día en el Hipódromo de San Isidro",
    placa: "Lollapalooza 2027",
    placaDetalle: "Vie 12: The Killers · Fontaines D.C.\nSáb 13: Travis Scott · Queens of the Stone Age\nDom 14: Charli xcx · Cage the Elephant\nHipódromo de San Isidro",
    bajada: "The Killers el viernes 12, Travis Scott y TINI el sábado 13, Charli xcx el domingo 14 de marzo. Las Sombras tocan el viernes.",
    imagen: "",
    autor: "Indie Popular",
    cuerpo: [
      "Lollapalooza Argentina 2027 se hará el viernes 12, el sábado 13 y el domingo 14 de marzo en el Hipódromo de San Isidro. El festival ya publicó qué artistas tocan cada día y las entradas diarias están a la venta por All Access.",
      "Viernes 12: The Killers, The Neighbourhood, Fontaines D.C., The Prodigy, Dillom, RAYE, Malcolm Todd, ADÉLA y Boys Noize, entre otros. Ese día también toca Las Sombras, junto a Kchiporros, Natalia Lacunza, Joaco Burgos, Sol Porro y Pato Mallet.",
      "Sábado 13: Travis Scott, TINI, Queens of the Stone Age, Rawayana, Geese, SLAYYYTER, Four Tet, Angine de Poitrine, Die Spitz, Un Poco de Ruido, Francisca Valenzuela, Juana Rozas, Ara y Hellolola, entre otros.",
      "Domingo 14: Charli xcx, David Guetta, Sombr, Dominic Fike, Cage the Elephant, Lola Young, Leon Bridges, The Avalanches, Boy Harsher, Snow Strippers, Usted Señalemelo, Daniela Spalla, Violet Grohl y La Ramona, entre otros.",
      "La entrada de un día en preventa 1 cuesta $195.000 más cargo por servicio, según Perfil. También se vende el abono para las tres jornadas."
    ],
    fuentes: [
      { nombre: "Perfil", url: "https://perfil.com/entretenimiento/lollapalooza-argentina-2027-confirmo-su-grilla-dia-por-dia-quienes-tocan-y-como-comprar-entradas-a50-ahE1f9A0JDUP" },
      { nombre: "Indie Hoy", url: "https://indiehoy.com/noticias/lollapalooza-argentina-2027-anuncia-su-lineup-por-dia/" }
    ]
  },
  {
    id: "the-strokes-is-this-it-edicion-estados-unidos-curiosidad",
    categoria: "Descubrir",
    fecha: "2026-11-25",
    titulo: "The Strokes: por qué Is This It salió distinto en Estados Unidos",
    placa: "Is This It",
    placaDetalle: "The Strokes · 2001\nOtra tapa en Estados Unidos\nUna canción reemplazada\nDespués del 11 de septiembre",
    bajada: "La edición estadounidense del debut de The Strokes cambió la tapa, se demoró dos semanas y reemplazó «New York City Cops» por «When It Started».",
    imagen: "img/noticias/is-this-it-original.jpg",
    credito: "Tapa original de Is This It. Foto: Colin Lane.",
    galeria: ["img/noticias/is-this-it-eeuu.jpg"],
    creditoGaleria: "Tapa de la edición estadounidense de Is This It.",
    autor: "Indie Popular",
    cuerpo: [
      "Is This It, el primer disco de The Strokes, salió en Australia a fines de julio de 2001 y en el Reino Unido el 27 de agosto, donde debutó en el puesto 2 del ranking de álbumes. En Estados Unidos, el país de la banda, iba a publicarse el 25 de septiembre. Los atentados del 11 de septiembre en Nueva York cambiaron ese plan.",
      "La edición estadounidense en CD se postergó hasta el 9 de octubre y perdió una canción: «New York City Cops», cuyo estribillo dice que los policías de la ciudad no son muy inteligentes. La banda decidió reemplazarla por «When It Started» después de ver la respuesta de la policía neoyorquina durante la tragedia. El vinilo estadounidense conservó el tema original.",
      "La tapa también es otra. En el resto del mundo, el disco muestra una foto de Colin Lane: la cadera de una mujer, su novia de entonces, con una mano enfundada en un guante de cuero apoyada encima. En Estados Unidos se usó una imagen de partículas subatómicas en una cámara de burbujas, que antes había aparecido en The Nature of Things (1988), un disco de Bruce BecVar.",
      "The Strokes toca el domingo 29 de noviembre a las 22:30 en el escenario Primavera del Primavera Sound Buenos Aires, en el Club Ciudad."
    ],
    fuentes: [
      { nombre: "Wikipedia (Is This It)", url: "https://en.wikipedia.org/wiki/When_It_Started" },
      { nombre: "NME", url: "https://www.nme.com/blogs/nme-blogs/the-strokes-is-this-it-facts-769267" },
      { nombre: "InsideHook", url: "https://www.insidehook.com/music/9-11-alters-debut" }
    ]
  },
  {
    id: "attaque-77-movistar-arena-2027",
    categoria: "Noticias",
    fecha: "2026-11-25",
    titulo: "Attaque 77 celebra sus 40 años en el Movistar Arena: fecha, precio y venta de entradas",
    placa: "Attaque 77",
    placaDetalle: "40 años\nViernes 23 de abril de 2027\nMovistar Arena\nEntradas: $77.000 · venta desde el 1/12",
    bajada: "Attaque 77 toca el viernes 23 de abril de 2027 en el Movistar Arena por sus 40 años. Entradas a $77.000 desde el martes 1 de diciembre.",
    imagen: "img/noticias/attaque-77.jpg",
    credito: "Attaque 77. Foto: prensa.",
    autor: "Indie Popular",
    cuerpo: [
      "Attaque 77 celebrará sus 40 años con un show el viernes 23 de abril de 2027 en el Movistar Arena (Humboldt 450, Villa Crespo). Las entradas tienen un valor único de $77.000 para todos los sectores y salen a la venta el martes 1 de diciembre a las 13 en la web del estadio.",
      "La banda sube al escenario con la formación de Mariano Martínez (voz y guitarra), Luciano Scaglione (bajo) y Leonardo De Cecco (batería). Attaque 77 se formó en 1987 en Buenos Aires y tiene más de quince discos, entre ellos El cielo puede esperar (1990), el de \"Hacelo por mí\". Su último álbum de estudio es Triángulo de fuerza (2019).",
      "El aniversario también pasará por el festival Vive Latino, en la Ciudad de México, en marzo de 2027."
    ],
    fuentes: [
      { nombre: "Ámbito", url: "https://www.ambito.com/espectaculos/attaque-77-celebra-sus-40-anos-un-show-buenos-aires-como-y-donde-comprar-las-entradas-n6349048" },
      { nombre: "La Coope 102.7", url: "https://www.lacoope.net/musica/attaque-77-vuelve-escenarios-celebra-sus-40-anos-movistar-arena-n23677" },
      { nombre: "Filo.news", url: "https://www.filo.news/noticia/2026/11/25/vuelve-attaque-77-y-festeja-sus-40-anos" },
      { nombre: "Rocktambulos", url: "https://rocktambulos.com/attaque-77-vuelve-a-los-escenarios-y-celebrara-sus-40-anos/" }
    ]
  },
  {
    id: "pixies-movistar-arena-abril-2027",
    categoria: "Noticias",
    fecha: "2026-11-25",
    titulo: "Pixies en el Movistar Arena: fecha, entradas y la gira sudamericana de 2027",
    placa: "Pixies",
    placaDetalle: "Domingo 4 de abril de 2027\nMovistar Arena\nEntradas desde $75.000",
    bajada: "La banda de Black Francis toca el domingo 4 de abril de 2027 en el Movistar Arena. Las entradas están a la venta desde $75.000.",
    imagen: "img/noticias/pixies.jpg",
    credito: "Pixies. Foto: prensa (Indie Folks).",
    autor: "Indie Popular",
    cuerpo: [
      "Pixies se presentará el domingo 4 de abril de 2027 en el Movistar Arena (Humboldt 450, Villa Crespo). Las entradas, desde $75.000, se venden a través de la web del estadio. El show lo presenta Indie Folks.",
      "Será la cuarta visita de la banda de Boston a la Argentina desde su debut en el país en 2010, y la primera en cinco años.",
      "La fecha forma parte de una gira por Sudamérica que incluye Santiago de Chile (29 de marzo), São Paulo (9 de abril), Lima (15 de abril) y Bogotá (17 de abril)."
    ],
    fuentes: [
      { nombre: "Consequence", url: "https://concerts.consequence.net/articles/pixies-return-to-argentina-2027" },
      { nombre: "Indie Hoy", url: "https://indiehoy.com/recitales/pixies-en-argentina-fecha-lugar-y-entradas/" },
      { nombre: "Tiempo Argentino", url: "https://www.tiempoar.com.ar/ta_article/pixies-argentina/" },
      { nombre: "Billboard Brasil", url: "https://billboard.com.br/pixies-volta-ao-brasil-para-show-unico-em-2027/" }
    ]
  },
  {
    id: "las-sombras-hestald-cc-matienzo-noviembre-2026",
    categoria: "Agenda",
    fecha: "2026-11-25",
    titulo: "Las Sombras y Hestald tocan este viernes en CC Matienzo",
    placa: "Las Sombras + Hestald",
    placaDetalle: "Viernes 27 de noviembre\n21 h\nCC Matienzo",
    bajada: "Las Sombras comparten fecha con Hestald el viernes 27 de noviembre a las 21 h en el Centro Cultural Matienzo.",
    imagen: "img/noticias/las-sombras.jpg",
    credito: "Las Sombras. Foto: Instagram oficial de la banda.",
    galeria: ["img/noticias/hestald.jpg"],
    creditoGaleria: "Hestald. Foto: Instagram oficial de Las Sombras.",
    autor: "Indie Popular",
    cuerpo: [
      "Las Sombras se presentan el viernes 27 de noviembre en el Centro Cultural Matienzo, en la Ciudad de Buenos Aires, junto a Hestald. La puerta abre a las 21 h y las entradas se consiguen a través del enlace de la cuenta oficial de la banda.",
      "La banda, formada por músicos pampeanos, anunció además que tocará en Lollapalooza Argentina 2027."
    ],
    fuentes: [
      { nombre: "Instagram de Las Sombras", url: "https://www.instagram.com/las.sombras/" }
    ]
  },
  {
    id: "el-mato-a-un-policia-motorizado-c-art-media-2026",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Él Mató a un Policía Motorizado toca dos noches en C Art Media: 15 y 16 de diciembre",
    placa: "Él Mató · C Art Media",
    placaDetalle: "Martes 15 y miércoles 16\nde diciembre\n\nC Art Media, Chacarita\nEntradas: Passline",
    bajada: "La banda hace dos shows el 15 y 16 de diciembre en C Art Media, Chacarita, y cierra el año el 19 en el Hipódromo de La Plata.",
    imagen: "img/noticias/el-mato.jpg",
    credito: "Él Mató a un Policía Motorizado. Foto: Instagram oficial de la banda.",
    autor: "Indie Popular",
    cuerpo: [
      "Él Mató a un Policía Motorizado se presentará el martes 15 y el miércoles 16 de diciembre en el Complejo C Art Media (Av. Corrientes 6271, Chacarita). Las entradas se venden por Passline, en localidad única de pie.",
      "Para el show del 16 de diciembre ya se agotó la primera tanda de entradas y se vende la preventa 2, según El Destape.",
      "Los shows llegan después de que la banda agotara el Movistar Arena en septiembre. El cierre del año será el sábado 19 de diciembre en el Hipódromo de La Plata, dentro del ciclo Noches Capitales 2026, con entradas por Livepass."
    ],
    fuentes: [
      { nombre: "Ámbito", url: "https://www.ambito.com/espectaculos/el-mato-un-policia-motorizado-dos-shows-buenos-aires-como-y-donde-comprar-las-entradas-n6347527" },
      { nombre: "El Destape", url: "https://www.eldestapeweb.com/cultura/nuevas-entradas-fecha-mato-policia-motorizado-c-art-media-2026-precios-cuando-toca-20261123162127" },
      { nombre: "Diario Hoy (Noches Capitales)", url: "https://diariohoy.net/espectaculos/noches-capitales-2026-presenta-a-el-mato-a-un-policia-motorizado-288631" }
    ]
  },
  {
    id: "el-hombre-gris-iriart-chicas-del-te-ila-bar-san-miguel-2026",
    categoria: "Agenda",
    fecha: "2026-11-24",
    titulo: "El Hombre Gris e Iriart y las Chicas del Té tocan gratis en ILA Bar, San Miguel",
    placa: "ILA Bar · Sáb 28",
    placaDetalle: "El Hombre Gris\nIriart y las Chicas del Té\n\n21 h · Entrada gratuita",
    bajada: "Las dos bandas comparten fecha el sábado 28 de noviembre a las 21 h en ILA Bar, con entrada gratuita.",
    imagen: "img/noticias/el-hombre-gris.jpg",
    credito: "El Hombre Gris. Foto: Instagram de la banda.",
    galeria: ["img/noticias/iriart-chicas-del-te.jpg"],
    creditoGaleria: "Iriart y las Chicas del Té. Foto: Instagram de la banda.",
    autor: "Indie Popular",
    cuerpo: [
      "El Hombre Gris e Iriart y las Chicas del Té tocan el sábado 28 de noviembre a las 21 h en ILA Bar, en San Miguel. La entrada es gratuita.",
      "Para El Hombre Gris será la última fecha del año, según anunció la banda en sus redes."
    ],
    fuentes: [
      { nombre: "Instagram de El Hombre Gris", url: "https://www.instagram.com/elhombregris.oficial/" },
      { nombre: "Instagram de ILA Bar", url: "https://www.instagram.com/ilaresto/" }
    ]
  },
  {
    id: "festival-sonico-libre-10-anos-raices-san-miguel-2026",
    categoria: "Agenda",
    fecha: "2026-11-24",
    titulo: "Sónico Libre cumple 10 años con un festival en el Centro Cultural Raíces de San Miguel",
    placa: "Sónico Libre · 10 años",
    placaDetalle: "Lunes 7 de diciembre · 19 h\nC.C. Raíces, San Miguel",
    bajada: "El festival autogestivo celebra su décima edición el lunes 7 de diciembre en San Miguel, con La Acción del Viento, Losa Radiante y más.",
    imagen: "img/noticias/sonico-libre-2026.jpg",
    credito: "Flyer oficial. Diseño: @dellamore.dg.",
    autor: "Indie Popular",
    cuerpo: [
      "El festival Sónico Libre celebra sus 10 años el lunes 7 de diciembre, desde las 19 h, en el Centro Cultural Raíces de San Miguel.",
      "La grilla reúne a La Acción del Viento, Losa Radiante (que presenta Las piezas de mi dispositivo infinito), Proyecto Siberia, Errática, Christian Vaca, Vicky Ruggiero y Aky Heredia, cofundador de Indie Popular. También habrá ferias y material independiente.",
      "Sónico Libre nació hace diez años en la Universidad Nacional de General Sarmiento como un festival autogestivo que combina proyectos de distintos lugares con artistas de la zona.",
      "Las entradas se pagan por transferencia o en la puerta. La anticipada general cuesta $7.000 y se consigue por mensaje directo a la cuenta del festival."
    ],
    fuentes: [
      { nombre: "Instagram de Sónico Libre", url: "https://www.instagram.com/sonico.libre/" },
      { nombre: "Instagram del Centro Cultural Raíces", url: "https://www.instagram.com/raices_centro_cultural/" }
    ]
  },
  {
    id: "santiago-motorizado-deseo-diciembre-2026",
    categoria: "Noticias",
    fecha: "2026-11-24",
    titulo: "Santiago Motorizado cierra la gira de El Retorno en Deseo: últimas entradas",
    placa: "Santiago Motorizado",
    placaDetalle: "Cierre de El Retorno\n\nViernes 4 de diciembre\nDeseo · 21 h",
    bajada: "El cantante de El Mató a un Policía Motorizado despide el viernes 4 de diciembre en Deseo la gira de su primer disco solista.",
    imagen: "img/noticias/santiago-motorizado.jpg",
    credito: "Santiago Motorizado. Foto: Instagram oficial de Santiago Motorizado.",
    autor: "Indie Popular",
    cuerpo: [
      "Santiago Motorizado se presentará el viernes 4 de diciembre a las 21 h en Deseo (Av. Chorroarín 1040) para cerrar la gira de El Retorno, su primer álbum solista. Quedan las últimas entradas, según anunció el propio músico en sus redes.",
      "El Retorno, publicado en 2025, reúne canciones que el líder de El Mató a un Policía Motorizado compuso en distintas épocas de su vida. La gira pasó por Argentina, México y Europa, y tuvo su presentación porteña en el Teatro Gran Rex, con Dillom y Blair como invitados.",
      "«Más allá del final de la Gira del Retorno, estas canciones las vengo tocando hace muchos años, pero llegó el final», escribió Santiago al anunciar la fecha, a la que llamó «la celebración final».",
      "Antes, el domingo 29 de noviembre, tocará a las 16:55 en el escenario Heineken del Primavera Sound Buenos Aires. Las entradas para Deseo se venden por EnigmaTickets."
    ],
    fuentes: [
      { nombre: "Instagram de Santiago Motorizado", url: "https://www.instagram.com/santiagomotorizado/" },
      { nombre: "Indie Hoy (agenda)", url: "https://indiehoy.com/?p=876752" },
      { nombre: "Rolling Stone en Español", url: "https://es.rollingstone.com/arg-el-gesto-de-gloria-de-santiago-motorizado-en-su-primer-gran-rex/" }
    ]
  },
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
  { dia: "26/11", artista: "Militarie Gun", lugar: "Uniclub, Almagro", hora: "A confirmar" },
  { dia: "27/11", artista: "Barbi Recanati", lugar: "Niceto Club, Palermo", hora: "A confirmar" },
  { dia: "27/11", artista: "Eruca Sativa", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "27/11", artista: "Las Sombras + Hestald", lugar: "CC Matienzo, CABA", hora: "21 h" },
  { dia: "28/11", artista: "A Perfect Circle", lugar: "Estadio Malvinas Argentinas, Paternal", hora: "A confirmar" },
  { dia: "28/11", artista: "Primavera Sound BA · día 1 (Gorillaz, Marilina Bertoldi, El Nota)", lugar: "Club Ciudad de Buenos Aires, Núñez", hora: "14:15 a 00:00" },
  { dia: "28/11", artista: "El Hombre Gris + Iriart y las Chicas del Té (gratis)", lugar: "ILA Bar, San Miguel", hora: "21 h" },
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
  { dia: "04/12", artista: "Santiago Motorizado (cierre de El Retorno)", lugar: "Deseo, Av. Chorroarín 1040", hora: "21 h" },
  { dia: "05/12", artista: "Sonido Konex: Buenos Vampiros, Nina Suárez, Tomates en Verano", lugar: "Ciudad Cultural Konex, Sarmiento 3131", hora: "19 h" },
  { dia: "05/12", artista: "Popfest", lugar: "Parque Norte", hora: "A confirmar" },
  { dia: "05/12", artista: "Daniel Caesar", lugar: "Estadio Obras Sanitarias, Núñez", hora: "A confirmar" },
  { dia: "07/12", artista: "Festival Sónico Libre · 10 años (La Acción del Viento, Losa Radiante, Aky Heredia y más)", lugar: "Centro Cultural Raíces, San Miguel", hora: "19 h" },
  { dia: "08/12", artista: "Shintaro Sakamoto", lugar: "Niceto Club, Palermo", hora: "A confirmar" },
  { dia: "15/12", artista: "Él Mató a un Policía Motorizado (también 16 de diciembre)", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "19/12", artista: "Él Mató a un Policía Motorizado (Noches Capitales)", lugar: "Hipódromo de La Plata, La Plata", hora: "A confirmar" },
  { dia: "20/12", artista: "Bestia Bebé (presenta Yendo Rápido a Ningún Lugar)", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "15/01", artista: "Rush", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "20/01", artista: "Festival Levitation: Melvins, Osees, Boris, Frankie and the Witch Fingers, Winona Riders", lugar: "Ciudad Cultural Konex, Abasto", hora: "A confirmar" },
  { dia: "05/02", artista: "Jack Johnson", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "06/02", artista: "María Becerra (también 7 de febrero)", lugar: "Movistar Arena, Villa Crespo", hora: "21 h" },
  { dia: "06/02", artista: "Cosquín Rock 2027 (6 y 7 de febrero)", lugar: "Aeródromo de Santa María de Punilla, Córdoba", hora: "A confirmar" },
  { dia: "25/02", artista: "Foo Fighters", lugar: "Estadio River Plate, Núñez", hora: "A confirmar" },
  { dia: "26/02", artista: "LP (All Is Not Lost Tour)", lugar: "Estadio Obras Sanitarias, Núñez", hora: "A confirmar" },
  { dia: "03/03", artista: "Placebo", lugar: "Estadio Malvinas Argentinas, Paternal", hora: "A confirmar" },
  { dia: "12/03", artista: "Lollapalooza Argentina 2027 (12, 13 y 14 de marzo)", lugar: "Hipódromo de San Isidro", hora: "A confirmar" },
  { dia: "23/03", artista: "Kasabian", lugar: "C Art Media, Chacarita", hora: "A confirmar" },
  { dia: "23/03", artista: "U2 (también 25 y 27 de marzo)", lugar: "Estadio River Plate, Núñez", hora: "A confirmar" },
  { dia: "01/04", artista: "Jungle", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "04/04", artista: "Pixies", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar · desde $75.000" },
  { dia: "11/04", artista: "Trueno (TURR4ZO World Tour)", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar" },
  { dia: "16/04", artista: "Quilmes Rock 2027 (16, 17 y 18 de abril)", lugar: "A confirmar", hora: "A confirmar" },
  { dia: "23/04", artista: "Attaque 77 (40 años)", lugar: "Movistar Arena, Villa Crespo", hora: "A confirmar · $77.000" },
  { dia: "11/05", artista: "Simple Plan + All Time Low", lugar: "Estadio Obras Sanitarias, Núñez", hora: "A confirmar" },
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
