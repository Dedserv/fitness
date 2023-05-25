import Swiper from '../vendor/swiper';
const swiper = document.querySelector('.swiper');
const swiperReviews = document.querySelector('.reviews__swiper');

const initSwiper = () => {
  if (swiper) {
    (() => new Swiper('.swiper', {
      loop: true,
      direction: 'horizontal',

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      maxBackfaceHiddenSlides: 0,

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1310: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    })
    )();
  }
  if (swiperReviews) {
    (() => new Swiper('.reviews__swiper', {
      loop: false,
      slidesPerView: 1,
      centeredSlides: true,

      navigation: {
        nextEl: '.reviews__swiper-next',
        prevEl: '.reviews__swiper-prev',
        disabledClass: 'reviews__swiper-disabled',
      },
    })
    )();
  }
};

export {initSwiper};
