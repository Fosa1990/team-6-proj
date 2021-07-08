import './sass/main.scss';
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
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // refs.mobileBtnOne.addEventListener('click', toggleModal);
  // refs.mobileBtnTwo.addEventListener('click', toggleModal);
  // refs.mobileBtnTree.addEventListener('click', toggleModal);
  // refs.mobileBtnFour.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();


// data-modal-open - на кнопку открытия модального окна.
// data-modal-close - на кнопку закрытия модального окна.
// data-modal - на бекдроп модального окна.

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-form-open]'),
    closeModalBtn: document.querySelector('[data-form-close]'),
    modal: document.querySelector('[data-form]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("form-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();


// data-form-open - на кнопку открытия модального окна.
// data-form-close - на кнопку закрытия модального окна.
// data-form - на бекдроп модального окна.


// Scroll script
$(document).ready(function () {
        // Add smooth scrolling to all links
        $('a').on('click', function (event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
              {
                scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              },
            );
          } // End if
        });
      });