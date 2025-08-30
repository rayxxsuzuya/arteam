const headerBurger = document.querySelector('.header__butter');
const headerMobile = document.querySelector('.header-mobile');
const headerMobileBg = document.querySelector('.header-mobile__bg');
const headerMobileClose = document.querySelector('.header-mobile__close');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMobile.classList.toggle('active');
});

headerMobileBg.addEventListener('click', () => {
    headerBurger.classList.remove('active');
    headerMobile.classList.remove('active');
})

headerMobileClose.addEventListener('click', () => {
    headerBurger.classList.remove('active');
    headerMobile.classList.remove('active');
})

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1030) {
  document.querySelector('.header__top').insertAdjacentElement('beforeend', document.querySelector('.header__socials'));
}
})

const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.hero__pagination',
  },

});

const reviewsSlider = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.reviews__pagination',
  },

});

const clientsSlider = new Swiper('.clients__slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,

  pagination: {
    el: '.clients__pagination',
  },

});

const similarSlider = new Swiper('.similar__slider', {
  slidesPerView: 4,
  pagination: {
    el: '.similar__pagination',
  },
  navigation: {
    prevEl: '.similar__arrow.prev',
    nextEl: '.similar__arrow.next'
  },

});

const whySlider = new Swiper('.why__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    990: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.why__pagination',
  },
});

const alsoSlider = new Swiper('.also__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.also__pagination',
  },
  breakpoints: {
    951: {
      slidesPerView: 3,
    },

    600: {
      slidesPerView: 2,
    },

    1: {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.also__arrow.prev',
    nextEl: '.also__arrow.next'
  },

});

const productSmallSlider = new Swiper('.product__small-slider', {
  slidesPerView: 4,
  spaceBetween: 10,
  speed: 500,
});

const productBigSlider = new Swiper('.product__big-slider', {
  slidesPerView: 1,
  speed: 500,
  thumbs: {
    swiper: productSmallSlider
  },


});
productBigSlider.on("slideChange", function () {
  // if (window.innerWidth <= 1024) {
  //   const activeIndex = galInfoSlider.realIndex;
  //   galInfoThumbs?.slideTo(activeIndex);
  // }
});


function updateMinus(e) {
  const parent = this.parentElement;
  const input = parent.querySelector('.catalog__input');
  if (input) {
    const currentValue = Number(input.value) || 0;
    if (currentValue <= 1) {
      return;
    }
    input.value = currentValue - 1;
  }
}

function updatePlus(e) {
  const parent = this.parentElement;
  const input = parent.querySelector('.catalog__input');
  if (input) {
    const currentValue = Number(input.value) || 0;
    input.value = currentValue + 1;
  }
}

const filterItems = document.querySelectorAll('.filter__item:has(.filter__list) .filter__button');
const filterSubmits = document.querySelectorAll('.filter__item:has(.filter__list) .filter__submit');

filterItems.forEach(item => {
  item.addEventListener('click', function (e) {
    item.parentElement.classList.toggle('active');
  })
});
filterSubmits.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    item.closest('.filter__item').classList.remove('active');
  })
});

if (document.getElementById('fileInput')) {
  const fileInput = document.getElementById('fileInput');
  const fileNameSpan = document.querySelector('.checkout__name');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameSpan.textContent = fileInput.files[0].name;
      fileNameSpan.classList.add('active');
    } else {
      fileNameSpan.textContent = 'Прикрепить';
    }
  });
}


window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.phone-type'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});

if (document.querySelector('[data-fancybox]')) {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
}