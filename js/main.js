//  отслеживание окончания загрузки страницы, после выполнение функци
$(document).ready(function () {

  var openAddress = $('.header__list-clubs'),
      openList = $('.club-address'),
      modalVisit = $('.modal__visit'),
      modalCallback = $('.modal__callback'),
      openCallbackBtn = $('.button-callback'),
      openVisitBtn = $('.record__button');
      closeVisitBtn = $('.modal__visit-close'),
      closeCallbackBtn = $('.modal__callback-close'),

  // open address list
  openAddress.on('click', function () {
    openAddress.toggleClass('open');
    if(openList.css('visibility') == "hidden"){
      openList.css('visibility', 'visible')
    }
      else if(openList.css('visibility') == "visible"){
        openList.css('visibility', 'hidden')
      }
  });

  // modal
  // open modal__visit
  openVisitBtn.on('click', function () {
    modalVisit.addClass('modal__visit--visible')
  });

  // close modal__visit
  closeVisitBtn.on('click', function () {
    modalVisit.removeClass('modal__visit--visible')
  });

  // close modal__visit onclick out modal
  $(document).mouseup(function (e) {
    if (modalVisit.has(e.target).length === 0) {
      modalVisit.removeClass('modal__visit--visible')
    }
  });

  // close modal__visit onclick key esc
  $(document).keydown(function (e) {
    if (e.which === 27) {
      modalVisit.removeClass('modal__visit--visible')
    } 
  });


  // open modal__visit
  openCallbackBtn.on('click', function () {
    modalCallback.addClass('modal__visit--visible')
  });

  // close modal__visit
  closeCallbackBtn.on('click', function () {
    modalCallback.removeClass('modal__visit--visible')
  });

  // close modal__visit onclick out modal
  $(document).mouseup(function (e) {
    if (modalCallback.has(e.target).length === 0) {
      modalCallback.removeClass('modal__visit--visible')
    }
  });

  // close modal__visit onclick key esc
  $(document).keydown(function (e) {
    if (e.which === 27) {
      modalCallback.removeClass('modal__visit--visible')
    } 
  });

  // slaiders
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

  // show * in placeholder
  $('#cards__name').focus(function() {
      $('#placeholderName').hide();
  });
  $('#cards__name').blur(function() {
      if ($(this).val().trim() === '') {
          $('#placeholderName').show();
      }
  });
    $('#cards__tel').focus(function() {
      $('#placeholderTel').hide();
  });
  $('#cards__tel').blur(function() {
      if ($(this).val().trim() === '') {
          $('#placeholderTel').show();
      }
  });

})