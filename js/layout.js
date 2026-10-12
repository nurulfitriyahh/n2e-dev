
document.addEventListener("DOMContentLoaded", async function () {
  const navbar = document.getElementById("navbar-placeholder");
  const footer = document.getElementById("footer-placeholder");

  try {
    const [navResponse, footerResponse] = await Promise.all([
      fetch("./components/navbar.html"),
      fetch("./components/footer.html")
    ]);

    if (!navResponse.ok) {
      throw new Error("navbar.html tidak ditemukan: " + navResponse.status);
    }

    if (!footerResponse.ok) {
      throw new Error("footer.html tidak ditemukan: " + footerResponse.status);
    }

    navbar.innerHTML = await navResponse.text();
    footer.innerHTML = await footerResponse.text();

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        const opened = menu.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(opened));
        toggle.textContent = opened ? "✕" : "☰";
      });
    }
  } catch (error) {
    console.error("Kesalahan memuat komponen:", error);

    if (navbar) {
      navbar.innerHTML = '<p class="load-error">Navbar gagal dimuat. Periksa folder components.</p>';
    }

    if (footer) {
      footer.innerHTML = '<p class="load-error">Footer gagal dimuat. Periksa folder components.</p>';
    }
  }
});
