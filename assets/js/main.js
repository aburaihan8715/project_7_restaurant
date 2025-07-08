$(document).ready(function () {
  // banner
  $(".banner_area").slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    autoplay: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // testimonials
  $(".testimonials").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 2,
  });
});
