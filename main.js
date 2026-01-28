
const header = document.createElement("header");
header.className = "main-header";

header.innerHTML = `
    <div class="header-content">
      <div class="title-block">
        <a href="/index.html" class="header-link">
          <h1>Associative Cache Simulator</h1>
          <p>
            Ndërtuar nga <strong>Fabian Harizi</strong> — Org. Komp. dhe Arkitekturë, 
            FSHN, Informatikë
          </p>
        </a>
      </div>

      <nav class="nav-links">
        <a href="/direct-mapped/index.html">Direct-Mapped</a>
        <a href="/fully-associated/index.html">Fully-Associative</a>
        <a href="/set-associated/index.html">Set-Associative</a>
      </nav>
    </div>
  `;

document.body.prepend(header);

document.querySelectorAll(".nav-links a").forEach(link => {
  if (window.location.pathname.includes(link.getAttribute("href"))) {
    link.classList.add("active-link");
  }
});
