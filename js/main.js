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
      el: '.custom-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },

  })

  // resize
  $(function(){
    $('.swiper-slide').height($('.swiper-slide').width()/2.3);
  
    $(window).resize(function(){
      $('.swiper-slide').height($('.swiper-slide').width()/2.3);
    });
  });



})