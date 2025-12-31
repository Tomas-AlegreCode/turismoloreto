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
