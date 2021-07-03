(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// data-menu - на контейнер <div> мобільного меню.
// data-menu-button - на кнопку мобільного меню.
// aria-expanded="false" - на кнопку мобільного меню.
// aria-controls="menu-container" - на кнопку мобільного меню.