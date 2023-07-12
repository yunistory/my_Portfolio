$(function () {
  var swiper = new Swiper('.swiper2', {
    // slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.btn.btn-s-next',
    //   prevEl: '.btn.btn-s-prev',
    // },
  });
});
