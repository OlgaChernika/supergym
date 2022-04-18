export const initSwiperTrainers = () => {
  const swiper = new window.Swiper('.swiper-trainers', {
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

export const initSwiperReviews = () => {
  const swiper = new window.Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });
  return swiper;
};
