$(function () {
  var mySwiper1 = new Swiper('.slider1', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: true,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.btn.btn-next',
      prevEl: '.btn.btn-prev',
    },
  });
});
