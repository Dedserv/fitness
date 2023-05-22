import Swiper from '../vendor/swiper';
const swiper = document.querySelector('.swiper');
const swiperReviews = document.querySelector('.reviews__swiper');

const initSwiper = () => {
  if (swiper) {
    (() => new Swiper('.swiper', {
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 1,
        },

        920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        580: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
        },

        320: {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
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
