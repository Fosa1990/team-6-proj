 (() => {
  const refs = {
    mobileBtnOne : document.querySelector("[data-menu-one]"),
    mobileBtnTwo : document.querySelector("[data-menu-two]"),
    mobileBtnTree : document.querySelector("[data-menu-three]"),
    mobileBtnFour : document.querySelector("[data-menu-four]"),
    mobileBtnClose : document.querySelector("[data-menu-close]"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.mobileBtnOne.addEventListener('click', toggleModal);
  refs.mobileBtnTwo.addEventListener('click', toggleModal);
  refs.mobileBtnTree.addEventListener('click', toggleModal);
  refs.mobileBtnFour.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();
 
 // Scroll to anchors site-nav-mobile
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header-navigation').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.linkJsScroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());