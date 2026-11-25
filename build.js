/* =========================================================
   BUILD PARA SEO Y BUSCADORES CON IA (lo corre Netlify solo)
   Lee contenido.js y arma la carpeta dist/ con:
   - una página estática por nota en /notas/<id>/ (título, descripción,
     Open Graph, datos estructurados NewsArticle)
   - el inicio con el contenido ya escrito en el HTML y datos estructurados
     (medio, sitio, notas y recitales de la agenda)
   - sitemap.xml, robots.txt, feed.xml (RSS), llms.txt y _redirects
   No cambia el diseño: usa las mismas clases de estilos.css.
   Probar en local: node build.js  (después abrí dist/index.html)
   ========================================================= */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = __dirname;
const DIST = path.join(RAIZ, "dist");
const SITIO = (process.env.URL || "https://indiepopular.com").replace(/\/$/, "");
const NOMBRE = "Indie Popular";
const LOGO = SITIO + "/img/aky-matias.jpg";

// ---------- Cargar contenido.js ----------
const ctx = {};
vm.createContext(ctx);
vm.runInContext(
  fs.readFileSync(path.join(RAIZ, "contenido.js"), "utf8") +
    "\n;this.CONFIG = CONFIG; this.NOTAS = NOTAS; this.AGENDA = AGENDA; this.ARTISTAS = ARTISTAS;",
  ctx
);
const { CONFIG, NOTAS, AGENDA } = ctx;

// ---------- Utilidades ----------
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const fechaLarga = (iso) => {
  const [a, m, d] = String(iso).split("-").map(Number);
  return a && m && d ? `${d} de ${MESES[m - 1]} de ${a}` : iso;
};
const abs = (p) => (/^https?:/.test(p) ? p : SITIO + "/" + String(p).replace(/^\//, ""));
const urlNota = (n) => `${SITIO}/notas/${encodeURIComponent(n.id)}/`;
const imgNota = (n) => abs(n.imagen || "img/aky-matias.jpg");
const descNota = (n) => String(n.bajada || n.titulo).slice(0, 300);
const jsonld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const tag = (c) => `<span class="tag tag--${esc(c)}">${esc(c)}</span>`;
const tapa = (n, clase) => n.imagen
  ? `<img class="${clase}" src="/${esc(n.imagen.replace(/^\//, ""))}" alt="${esc(n.titulo)}" loading="lazy"${n.encuadre ? ` style="object-position:${esc(n.encuadre)}"` : ""}>`
  : `<div class="${clase} placa placa--${esc(n.categoria)}" aria-hidden="true">
        <div class="placa__top"><span class="placa__cat">${esc(n.categoria)}</span><span class="logo logo--mini"><span class="logo__disco"><span class="logo__a">INDIE</span><span class="logo__b">POPULAR</span></span></span></div>
        <div class="placa__cuerpo"><span class="placa__txt">${esc(n.placa || n.titulo)}</span>${n.placaDetalle ? `<span class="placa__det">${esc(n.placaDetalle)}</span>` : ""}</div>
        <div class="franja"><span></span><span></span><span></span></div>
      </div>`;

// Año de una fecha de agenda "DD/MM": si ya pasó hace más de 60 días, es del año siguiente
const HOY = new Date();
function isoAgenda(dia) {
  const m = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?/.exec(dia || "");
  if (!m) return null;
  const d = +m[1], mes = +m[2];
  let a = m[3] ? +m[3] : HOY.getFullYear();
  if (!m[3] && new Date(a, mes - 1, d) < new Date(HOY.getTime() - 60 * 864e5)) a++;
  return `${a}-${String(mes).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

const ORG = {
  "@type": "NewsMediaOrganization",
  "@id": SITIO + "/#medio",
  name: NOMBRE,
  url: SITIO + "/",
  logo: { "@type": "ImageObject", url: LOGO },
  description: "Medio de música indie y alternativa de San Miguel, provincia de Buenos Aires. Noticias, agenda, entrevistas y coberturas con fotografía propia.",
  foundingDate: "2022-04-02",
  founder: [{ "@type": "Person", name: "Aky Heredia" }, { "@type": "Person", name: "Matías Silva" }],
  address: { "@type": "PostalAddress", addressLocality: "San Miguel", addressRegion: "Buenos Aires", addressCountry: "AR" },
  email: CONFIG.email,
  sameAs: [CONFIG.instagram, CONFIG.youtube].filter(Boolean)
};

// ---------- Copiar el sitio a dist/ ----------
const EXCLUIR = new Set([".git", "dist", "node_modules", "build.js", "netlify.toml", "LEEME.txt", ".gitignore"]);
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);
for (const f of fs.readdirSync(RAIZ)) {
  if (EXCLUIR.has(f) || f.startsWith(".")) continue;
  fs.cpSync(path.join(RAIZ, f), path.join(DIST, f), { recursive: true });
}

// ---------- Plantilla de página de nota ----------
const plantillaNota = fs.readFileSync(path.join(RAIZ, "nota.html"), "utf8");
const footerLinks = (html) => html
  .replace('data-link="instagram" href="#"', `data-link="instagram" href="${esc(CONFIG.instagram)}"`)
  .replace('data-link="youtube" href="#"', `data-link="youtube" href="${esc(CONFIG.youtube)}"`)
  .replace('data-link="email" href="#"', `data-link="email" href="mailto:${esc(CONFIG.email)}"`)
  .replace('<span id="anio"></span>', `<span id="anio">${HOY.getFullYear()}</span>`);

for (const n of NOTAS) {
  const url = urlNota(n);
  const head = `<title>${esc(n.titulo)} · ${NOMBRE}</title>
<meta name="description" content="${esc(descNota(n))}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${NOMBRE}">
<meta property="og:locale" content="es_AR">
<meta property="og:title" content="${esc(n.titulo)}">
<meta property="og:description" content="${esc(descNota(n))}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${esc(imgNota(n))}">
<meta property="article:published_time" content="${esc(n.fecha)}">
<meta property="article:section" content="${esc(n.categoria)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(n.titulo)}">
<meta name="twitter:description" content="${esc(descNota(n))}">
<meta name="twitter:image" content="${esc(imgNota(n))}">
<link rel="alternate" type="application/rss+xml" title="${NOMBRE}" href="${SITIO}/feed.xml">
${jsonld({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": n.categoria === "Cobertura" ? "Article" : "NewsArticle",
      "@id": url + "#nota",
      headline: n.titulo,
      description: descNota(n),
      image: [imgNota(n), ...(n.galeria || []).map(abs)],
      datePublished: n.fecha,
      dateModified: n.fecha,
      articleSection: n.categoria,
      inLanguage: "es-AR",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: n.autor || NOMBRE, url: SITIO + "/" },
      publisher: { "@id": SITIO + "/#medio" },
      articleBody: (n.cuerpo || []).join("\n\n"),
      citation: (n.fuentes || []).map((f) => f.url)
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: NOMBRE, item: SITIO + "/" },
        { "@type": "ListItem", position: 2, name: n.categoria, item: SITIO + "/#notas" },
        { "@type": "ListItem", position: 3, name: n.titulo, item: url }
      ]
    },
    ORG
  ]
})}`;

  const articulo = `
      ${tag(n.categoria)}
      <h1>${esc(n.titulo)}</h1>
      <p class="bajada">${esc(n.bajada)}</p>
      ${n.imagen ? `<figure><img src="/${esc(n.imagen.replace(/^\//, ""))}" alt="${esc(n.titulo)}"><figcaption>${esc(n.credito || "")}</figcaption></figure>` : ""}
      <p class="fecha"><time datetime="${esc(n.fecha)}">${fechaLarga(n.fecha)}</time> · ${esc(n.autor || "")}</p>
      <div class="nota__cuerpo">${(n.cuerpo || []).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      ${(n.galeria || []).length ? `<div class="nota-galeria">${n.galeria.map((g) => `<a href="/${esc(g)}" target="_blank" rel="noopener"><img src="/${esc(g)}" alt="Foto de ${esc(n.titulo)}" loading="lazy"></a>`).join("")}</div><p class="fecha">${esc(n.creditoGaleria || n.credito || "")}</p>` : ""}
      ${(n.fuentes || []).length ? `<p class="fuentes">Fuentes: ${n.fuentes.map((f) => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.nombre)}</a>`).join(" · ")}</p>` : ""}
      <a class="volver" href="/">← Volver al inicio</a>`;

  let html = plantillaNota
    .replace(/<title>[\s\S]*?<meta name="description"[^>]*>/, head)
    .replace(/href="estilos\.css"/, 'href="/estilos.css"')
    .replace(/href="index\.html#/g, 'href="/#')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace('<article id="nota" class="nota"></article>', `<article class="nota">${articulo}</article>`)
    .replace(/<script src="contenido\.js"><\/script>\s*<script src="app\.js"><\/script>/, "");
  html = footerLinks(html);
  const dir = path.join(DIST, "notas", n.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// ---------- Inicio: contenido escrito en el HTML + datos estructurados ----------
const eventos = AGENDA.map((a) => {
  const fecha = isoAgenda(a.dia);
  if (!fecha || !a.lugar || /confirmar/i.test(a.lugar)) return null;
  const hora = /^(\d{1,2})(?::(\d{2}))?\s*h?/.exec(a.hora || "");
  const start = hora && !/confirmar/i.test(a.hora) ? `${fecha}T${hora[1].padStart(2, "0")}:${hora[2] || "00"}:00-03:00` : fecha;
  const [venue, ...resto] = a.lugar.split(",");
  return {
    "@type": "MusicEvent",
    name: a.artista,
    startDate: start,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: venue.trim(), address: { "@type": "PostalAddress", addressLocality: (resto.join(",").trim() || "Buenos Aires"), addressCountry: "AR" } },
    performer: { "@type": "PerformingGroup", name: a.artista.replace(/\s*\(.*\)$/, "") }
  };
}).filter(Boolean);

const headInicio = `<link rel="canonical" href="${SITIO}/">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${NOMBRE}">
<meta property="og:locale" content="es_AR">
<meta name="twitter:card" content="summary_large_image">
<link rel="alternate" type="application/rss+xml" title="${NOMBRE}" href="${SITIO}/feed.xml">
${jsonld({
  "@context": "https://schema.org",
  "@graph": [
    ORG,
    { "@type": "WebSite", "@id": SITIO + "/#sitio", url: SITIO + "/", name: NOMBRE, inLanguage: "es-AR", publisher: { "@id": SITIO + "/#medio" } },
    {
      "@type": "ItemList",
      name: "Últimas notas de Indie Popular",
      itemListElement: NOTAS.map((n, i) => ({ "@type": "ListItem", position: i + 1, url: urlNota(n), name: n.titulo }))
    },
    ...eventos
  ]
})}
</head>`;

const n0 = NOTAS[0];
let inicio = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8")
  .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${SITIO}/">`)
  .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${LOGO}"`)
  .replace("</head>", headInicio);
if (n0) {
  inicio = inicio.replace('<a id="portada" class="portada" href="#"></a>', `<a id="portada" class="portada" href="/notas/${esc(n0.id)}/">
      ${tapa(n0, "portada__img")}
      <div class="portada__texto">
        <div>${tag(n0.categoria)}</div>
        <h1>${esc(n0.titulo)}</h1>
        <p>${esc(n0.bajada)}</p>
        <span class="fecha">${fechaLarga(n0.fecha)}</span>
      </div></a>`);
}
inicio = inicio
  .replace('<div id="grilla" class="grilla"></div>', `<div id="grilla" class="grilla">${NOTAS.slice(1).map((n) => `
        <a class="tarjeta" href="/notas/${esc(n.id)}/">
          ${tapa(n, "tarjeta__img")}
          <div>${tag(n.categoria)}</div>
          <h3>${esc(n.titulo)}</h3>
          <p>${esc(n.bajada)}</p>
          <span class="fecha">${fechaLarga(n.fecha)}</span>
        </a>`).join("")}</div>`)
  .replace('<div id="agenda-lista"></div>', `<div id="agenda-lista">${AGENDA.filter((a) => (isoAgenda(a.dia) || "9") >= new Date(HOY.getTime() - 3 * 3600e3).toISOString().slice(0, 10)).map((a) => `
        <div class="agenda__fila">
          <div class="agenda__dia">${esc(a.dia)}</div>
          <div><div class="agenda__artista">${esc(a.artista)}</div><div>${esc(a.lugar)}</div></div>
          <div class="agenda__hora">${esc(a.hora)}</div>
        </div>`).join("")}</div>`);
inicio = footerLinks(inicio);
fs.writeFileSync(path.join(DIST, "index.html"), inicio);

// ---------- /recitales/: página de agenda completa (búsquedas tipo "bandas que vienen a la Argentina") ----------
const hoyIso = new Date(HOY.getTime() - 3 * 3600e3).toISOString().slice(0, 10);
const proximos = AGENDA.map((a) => ({ ...a, iso: isoAgenda(a.dia) }))
  .filter((a) => a.iso && a.iso >= hoyIso)
  .sort((x, y) => x.iso.localeCompare(y.iso));
const porMes = {};
for (const a of proximos) {
  const k = a.iso.slice(0, 7);
  (porMes[k] = porMes[k] || []).push(a);
}
const tituloRec = `Recitales en Argentina 2026 y 2027: bandas que vienen, fechas y lugares`;
const descRec = `Agenda actualizada de recitales y festivales en Argentina: ${proximos.slice(0, 6).map((a) => a.artista.replace(/\s*\(.*\)$/, "")).join(", ")} y más. Fechas, lugares y horarios confirmados.`.slice(0, 300);
const urlRec = SITIO + "/recitales/";
const anios = [...new Set(proximos.map((a) => a.iso.slice(0, 4)))].join(" y ");
const cuerpoRec = `
      <span class="tag tag--Agenda">Agenda</span>
      <h1>Recitales en Argentina ${esc(anios)}: bandas que vienen y fechas confirmadas</h1>
      <p class="bajada">Todos los shows y festivales confirmados en Buenos Aires y el resto del país, ordenados por fecha. Actualizada el ${fechaLarga(hoyIso)}.</p>
      <div class="nota__cuerpo"><p>En los próximos meses tocan en la Argentina ${esc(proximos.slice(0, 8).map((a) => a.artista.replace(/\s*[(·].*$/, "").trim()).join(", "))}, entre otros. Esta agenda reúne solo fechas confirmadas por los artistas, las productoras o los venues, y se actualiza con cada anuncio.</p></div>
      ${Object.entries(porMes).map(([k, lista]) => {
        const [a, m] = k.split("-").map(Number);
        return `<h2 class="rec__mes">${MESES[m - 1][0].toUpperCase() + MESES[m - 1].slice(1)} ${a}</h2>
      <div class="agenda rec__lista">${lista.map((e) => `
        <div class="agenda__fila">
          <div class="agenda__dia"><time datetime="${e.iso}">${esc(e.dia)}</time></div>
          <div><div class="agenda__artista">${esc(e.artista)}</div><div>${esc(e.lugar)}</div></div>
          <div class="agenda__hora">${esc(e.hora)}</div>
        </div>`).join("")}</div>`;
      }).join("\n")}
      <p class="fuentes">¿Falta una fecha? Escribinos a <a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a> o por <a href="${esc(CONFIG.instagram)}">Instagram</a>.</p>
      <a class="volver" href="/">← Volver al inicio</a>`;
const headRec = `<title>${esc(tituloRec)} · ${NOMBRE}</title>
<meta name="description" content="${esc(descRec)}">
<link rel="canonical" href="${urlRec}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${NOMBRE}">
<meta property="og:locale" content="es_AR">
<meta property="og:title" content="${esc(tituloRec)}">
<meta property="og:description" content="${esc(descRec)}">
<meta property="og:url" content="${urlRec}">
<meta property="og:image" content="${LOGO}">
<meta name="twitter:card" content="summary_large_image">
${jsonld({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": urlRec + "#pagina",
      name: tituloRec,
      description: descRec,
      url: urlRec,
      inLanguage: "es-AR",
      dateModified: hoyIso,
      isPartOf: { "@id": SITIO + "/#sitio" },
      publisher: { "@id": SITIO + "/#medio" },
      mainEntity: {
        "@type": "ItemList",
        name: "Recitales y festivales confirmados en Argentina",
        numberOfItems: proximos.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: proximos.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: `${e.artista} · ${e.lugar} · ${e.dia}` }))
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: NOMBRE, item: SITIO + "/" },
        { "@type": "ListItem", position: 2, name: "Recitales en Argentina", item: urlRec }
      ]
    },
    ORG,
    ...eventos.filter((ev) => String(ev.startDate).slice(0, 10) >= hoyIso)
  ]
})}`;
let rec = plantillaNota
  .replace(/<title>[\s\S]*?<meta name="description"[^>]*>/, headRec)
  .replace(/href="estilos\.css"/, 'href="/estilos.css"')
  .replace(/href="index\.html#/g, 'href="/#')
  .replace(/href="index\.html"/g, 'href="/"')
  .replace('<article id="nota" class="nota"></article>', `<article class="nota">${cuerpoRec}</article>`)
  .replace(/<script src="contenido\.js"><\/script>\s*<script src="app\.js"><\/script>/, "");
rec = footerLinks(rec);
fs.mkdirSync(path.join(DIST, "recitales"), { recursive: true });
fs.writeFileSync(path.join(DIST, "recitales", "index.html"), rec);

// ---------- sitemap.xml ----------
const ultima = NOTAS.reduce((m, n) => (n.fecha > m ? n.fecha : m), "2026-01-01");
fs.writeFileSync(path.join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url><loc>${SITIO}/</loc><lastmod>${ultima}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${SITIO}/recitales/</loc><lastmod>${hoyIso}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
${NOTAS.map((n) => `  <url><loc>${urlNota(n)}</loc><lastmod>${n.fecha}</lastmod>${n.imagen ? `<image:image><image:loc>${esc(abs(n.imagen))}</image:loc></image:image>` : ""}</url>`).join("\n")}
</urlset>
`);

// ---------- robots.txt ----------
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITIO}/sitemap.xml
`);

// ---------- feed.xml (RSS) ----------
const rfc822 = (iso) => new Date(iso + "T12:00:00-03:00").toUTCString();
fs.writeFileSync(path.join(DIST, "feed.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${NOMBRE}</title>
  <link>${SITIO}/</link>
  <description>Noticias, agenda y coberturas de música indie y alternativa desde San Miguel, Buenos Aires.</description>
  <language>es-ar</language>
  <atom:link href="${SITIO}/feed.xml" rel="self" type="application/rss+xml"/>
${NOTAS.map((n) => `  <item>
    <title>${esc(n.titulo)}</title>
    <link>${urlNota(n)}</link>
    <guid isPermaLink="true">${urlNota(n)}</guid>
    <pubDate>${rfc822(n.fecha)}</pubDate>
    <category>${esc(n.categoria)}</category>
    <description>${esc(n.bajada)}</description>
  </item>`).join("\n")}
</channel>
</rss>
`);

// ---------- llms.txt (resumen para buscadores con IA) ----------
fs.writeFileSync(path.join(DIST, "llms.txt"), `# ${NOMBRE}

> Medio de música indie y alternativa de San Miguel, provincia de Buenos Aires (Argentina), dirigido por Aky Heredia y Matías Silva. Publica noticias, agenda de recitales, entrevistas y coberturas con fotografía propia, desde la escena emergente hasta los grandes festivales.

- Sitio: ${SITIO}/
- Instagram: ${CONFIG.instagram}
- Contacto: ${CONFIG.email}

## Notas

${NOTAS.map((n) => `- [${n.titulo}](${urlNota(n)}): ${n.bajada} (${n.categoria}, ${n.fecha})`).join("\n")}

## Agenda de recitales

Agenda completa y actualizada: ${SITIO}/recitales/

${AGENDA.map((a) => `- ${a.dia} · ${a.artista} · ${a.lugar} · ${a.hora}`).join("\n")}
`);

// ---------- _redirects: los links viejos nota.html?id=... van a la página estática ----------
fs.writeFileSync(path.join(DIST, "_redirects"), `/nota.html id=:id /notas/:id/ 301
`);

console.log(`Build OK: ${NOTAS.length} notas, ${eventos.length} recitales con datos estructurados, sitio ${SITIO}`);
