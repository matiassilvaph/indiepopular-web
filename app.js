/* Arma las páginas a partir de contenido.js. No hace falta tocar este archivo. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fecha = (iso) => {
    const d = new Date(iso + "T12:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  };
  const tag = (c) => `<span class="tag tag--${esc(c)}">${esc(c)}</span>`;

  // Links del footer y redes
  document.querySelectorAll("[data-link]").forEach((a) => {
    const k = a.dataset.link;
    if (k === "email") a.href = "mailto:" + CONFIG.email;
    else if (CONFIG[k]) a.href = CONFIG[k];
  });
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // ---------- Inicio ----------
  const portada = document.getElementById("portada");
  if (portada && NOTAS.length) {
    const n = NOTAS[0];
    portada.href = "nota.html?id=" + encodeURIComponent(n.id);
    portada.innerHTML = `
      <img class="portada__img" src="${esc(n.imagen)}" alt="">
      <div class="portada__texto">
        <div>${tag(n.categoria)}</div>
        <h1>${esc(n.titulo)}</h1>
        <p>${esc(n.bajada)}</p>
        <span class="fecha">${fecha(n.fecha)}</span>
      </div>`;
  }

  const grilla = document.getElementById("grilla");
  const filtros = document.getElementById("filtros");
  function pintar(cat) {
    const lista = NOTAS.slice(1).filter((n) => !cat || n.categoria === cat);
    grilla.innerHTML = lista.length
      ? lista.map((n) => `
        <a class="tarjeta" href="nota.html?id=${encodeURIComponent(n.id)}">
          <img src="${esc(n.imagen)}" alt="" loading="lazy">
          <div>${tag(n.categoria)}</div>
          <h3>${esc(n.titulo)}</h3>
          <p>${esc(n.bajada)}</p>
          <span class="fecha">${fecha(n.fecha)}</span>
        </a>`).join("")
      : `<p>Todavía no hay notas en esta sección.</p>`;
  }
  if (grilla) {
    pintar("");
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      filtros.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      pintar(b.dataset.cat);
    });
  }

  const agenda = document.getElementById("agenda-lista");
  if (agenda) {
    agenda.innerHTML = AGENDA.length
      ? AGENDA.map((a) => `
        <div class="agenda__fila">
          <div class="agenda__dia">${esc(a.dia)}</div>
          <div><div class="agenda__artista">${esc(a.artista)}</div><div>${esc(a.lugar)}</div></div>
          <div class="agenda__hora">${esc(a.hora)}</div>
        </div>`).join("")
      : `<p>No hay fechas cargadas esta semana.</p>`;
  }

  const artistas = document.getElementById("artistas");
  if (artistas) artistas.innerHTML = ARTISTAS.map((a) => `<span>${esc(a)}</span>`).join("");

  // ---------- Nota ----------
  const nota = document.getElementById("nota");
  if (nota) {
    const id = new URLSearchParams(location.search).get("id");
    const n = NOTAS.find((x) => x.id === id);
    if (!n) {
      nota.innerHTML = `<h1>Nota no encontrada</h1><a class="volver" href="index.html">← Volver al inicio</a>`;
      return;
    }
    document.title = n.titulo + " · Indie Popular";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = n.bajada;
    nota.innerHTML = `
      ${tag(n.categoria)}
      <h1>${esc(n.titulo)}</h1>
      <p class="bajada">${esc(n.bajada)}</p>
      <figure><img src="${esc(n.imagen)}" alt=""><figcaption>${esc(n.credito || "")}</figcaption></figure>
      <p class="fecha">${fecha(n.fecha)} · ${esc(n.autor || "")}</p>
      <div class="nota__cuerpo">${(n.cuerpo || []).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <a class="volver" href="index.html">← Volver al inicio</a>`;
  }
})();
