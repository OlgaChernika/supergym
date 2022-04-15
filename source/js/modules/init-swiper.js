export const initSwiper = () => {
  const swiper = new window.Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  return swiper;
};
