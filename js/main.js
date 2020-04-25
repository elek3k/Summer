//  отслеживание окончания загрузки страницы, после выполнение функци
$(document).ready(function () {

  // инициализация 1 слайдера
  var mySwiper = new Swiper ('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },

  })

  // инициализация 2 слайдера
  var mySwiper = new Swiper ('.services__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.services__prev',
      prevEl: '.services__next',
    },
  })

  // инициализация 3 слайдера
  var mySwiper = new Swiper ('.gallery__swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.gallery__pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  })

  // resize
  $(function(){
    $('.resize-slide').height($('.resize-slide').width()/2.3);
  
    $(window).resize(function(){
      $('.resize-slide').height($('.resize-slide').width()/2.3);
    });
  });



})