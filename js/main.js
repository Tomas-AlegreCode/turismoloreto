const buttons = document.querySelectorAll('.menu-item');
const contents = document.querySelectorAll('.menu-content .content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const targetContent = document.getElementById(targetId);

    const isActive = targetContent.classList.contains('active');

    // cerrar todo
    contents.forEach(c => c.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));

    // abrir solo si no estaba activo
    if (!isActive) {
      targetContent.classList.add('active');
      button.classList.add('active');
    }
  });
});

//Menu hamburguesa
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('active');
});

closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
}

//carrusel
document.addEventListener("DOMContentLoaded", () => {
  const modalImg = document.getElementById("modalImage");

  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.dataset.img;
    });
  });
});

//Boton volver arriba
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});




