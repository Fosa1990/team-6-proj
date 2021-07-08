(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // mobileBtnOne : document.querySelector("[data-menu-one]"),
    // mobileBtnTwo : document.querySelector("[data-menu-two]"),
    // mobileBtnTree : document.querySelector("[data-menu-three]"), 
    // mobileBtnFour : document.querySelector("[data-menu-four]"),
    // mobileBtnClose : document.querySelector("[data-menu-close]"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.mobileBtnOne.addEventListener('click', toggleModal);
  // refs.mobileBtnTwo.addEventListener('click', toggleModal);
  // refs.mobileBtnTree.addEventListener('click', toggleModal);
  // refs.mobileBtnFour.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();


// data-modal-open - на кнопку открытия модального окна.
// data-modal-close - на кнопку закрытия модального окна.
// data-modal - на бекдроп модального окна.