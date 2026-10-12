
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".portfolio-card");
    const lightbox = document.getElementById("portfolio-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".lightbox-close");

    if (!lightbox || !lightboxImage || !closeButton) {
        console.error("Elemen pratinjau gambar tidak ditemukan.");
        return;
    }

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            const imagePath = card.getAttribute("data-image");

            lightboxImage.src = imagePath;
            lightboxImage.alt = card.querySelector("img").alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.removeAttribute("src");
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
