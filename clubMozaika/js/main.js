//  отслеживание окончания загрузки страницы, после выполнение функци
$(document).ready(function () {

  var openAddress = $('.header__list-clubs'),
      openList = $('.club-address'),
      modalVisit = $('.modal__visit'),
      modalCallback = $('.modal__callback'),
      openCallbackBtn = $('.button-callback'),
      openVisitBtn = $('.record__button'),
      closeVisitBtn = $('.modal__visit-close'),
      closeCallbackBtn = $('.modal__callback-close'),
      closeThanksBtn = $('.modal__thanks-close'),
      scrollUp = $('.page-scroll__up'),
      modalThanks = $('.modal__thanks');

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

  // close address list onclick out modal
  // $(document).mouseup(function (e) {
  //   if (openAddress.has(e.target).length === 0) {
  //     openList.css('visibility', 'hidden')
  //     openAddress.removeClass('open')
  //   }
  //   else if (openAddress.has(e.target).length === 1) {
  //     openAddress.removeClass('open');
  //   }
  // });

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


  // modal__callback
  // open modal__callback
  openCallbackBtn.on('click', function () {
    modalCallback.addClass('modal__callback--visible')
  });

  // close modal__callback
  closeCallbackBtn.on('click', function () {
    modalCallback.removeClass('modal__callback--visible')
  });

  // close modal__callback onclick out modal
  $(document).mouseup(function (e) {
    if (modalCallback.has(e.target).length === 0) {
      modalCallback.removeClass('modal__callback--visible')
    }
  });

  // close modal__callback onclick key esc
  $(document).keydown(function (e) {
    if (e.which === 27) {
      modalCallback.removeClass('modal__callback--visible')
    } 
  });


  // modal__Thanks
  // close modal__Thanks
  closeThanksBtn.on('click', function () {
    modalThanks.removeClass('modal__thanks--visible')
  });

  // close modal__Thanks onclick out modal
  $(document).mouseup(function (e) {
    if (modalThanks.has(e.target).length === 0) {
      modalThanks.removeClass('modal__thanks--visible')
    }
  });

  // close modal__Thanks onclick key esc
  $(document).keydown(function (e) {
    if (e.which === 27) {
      modalThanks.removeClass('modal__thanks--visible')
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
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  })


  // scroll page up
   // плавающая кнопка прокрутки станицы вверх
	scrollUp.click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
  });

  // показывать и скрывать кнопку прокрутки вверх
  $(window).scroll(function() {
		if($(this).scrollTop() >= 350) {
			scrollUp.css('height', '2.857rem');
    } 
    else {
			scrollUp.css('height', '0');
    }
  });


  // mask for input type tel
  //  маска телефона
  $('[type=tel]').mask('+7(000) 000-00-00');


  // resize
  $(function(){
    $('.resize-slide').height($('.resize-slide').width()/3);
  
    $(window).resize(function(){
      $('.resize-slide').height($('.resize-slide').width()/3);
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

  // validation form
  // validation first form
  $(".form__visit").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25
    },
      tel:  {
        required: true,
        minlength: 17
    },
      policy: "required",

    },
    messages: {
      name: {
        required: "Введите Ваше имя",
        minlength: "Минимум два символа",
        maxlength: "Не допустимая длина имени"
      },
      tel: {
        required: "Введите ваш номер телефона",
        minlength: "Заполните номер полностью"
      },
      policy: "Необходимо дать согласие на обработку данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendVisit.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modalVisit.removeClass('modal__visit--visible');
          modalThanks.toggleClass('modal__thanks--visible')
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response)
        }
      });
    }
  });

  // validation second form
  $(".form__callback").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25
    },
      tel:  {
        required: true,
        minlength: 17
    },
      policy: "required",

    },
    messages: {
      name: {
        required: "Введите Ваше имя",
        minlength: "Минимум два символа",
        maxlength: "Не допустимая длина имени"
      },
      tel: {
        required: "Введите ваш номер телефона",
        minlength: "Заполните номер полностью"
      },
      policy: "Необходимо дать согласие на обработку данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendCallback.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modalCallback.removeClass('modal__callback--visible');
          modalThanks.toggleClass('modal__thanks--visible')
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response)
        }
      });
    }
  });


  // validation third form
  $(".register__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25
    },
      tel:  {
        required: true,
        minlength: 17
    },
      policy: "required",

    },
    messages: {
      name: {
        required: "Введите Ваше имя",
        minlength: "Минимум два символа",
        maxlength: "Не допустимая длина имени"
      },
      tel: {
        required: "Введите ваш номер телефона",
        minlength: "Заполните номер полностью"
      },
      policy: "Необходимо дать согласие на обработку данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendVisit.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modalVisit.removeClass('modal__visit--visible');
          modalThanks.toggleClass('modal__thanks--visible')
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response)
        }
      });
    }
  });


  // validation third form
  $(".cards__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25
    },
      tel:  {
        required: true,
        minlength: 17
    },
      policy: "required",

    },
    messages: {
      name: {
        required: "Введите Ваше имя",
        minlength: "Минимум два символа",
        maxlength: "Не допустимая длина имени"
      },
      tel: {
        required: "Введите ваш номер телефона",
        minlength: "Заполните номер полностью"
      },
      policy: "Необходимо дать согласие на обработку данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modalCallback.removeClass('modal__callback--visible');
          modalThanks.toggleClass('modal__thanks--visible')
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response)
        }
      });
    }
    
  });



  // Карта
  // Яндекс карта с загрузкой при новедении

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.map-wrap').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;

// иницифлизация карт яндекс
function init () {
    // Создание карты.
    var myMap = new ymaps.Map("Y-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.710572, 37.675027],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Фитнес клуб',
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/logo.png',
      // Размеры метки.
      iconImageSize: [140, 55],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-15, -105]
  });
  myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects
      .add(myPlacemark)
      //.add(myPlacemarkWithContent); // с этим загрузка карты по наведению не работает

  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
var layer = myMap.layers.get(0).get(0);    
// Решение по callback-у для определения полной загрузки карты
waitForTilesLoad(layer).then(function() {
  // Скрываем индикатор загрузки после полной загрузки карты
  spinner.removeClass('is-active');
  });
}
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
return new ymaps.vow.Promise(function (resolve, reject) {
  var tc = getTileContainer(layer), readyAll = true;
  tc.tiles.each(function (tile, number) {
    if (!tile.isReady()) {
      readyAll = false;
    }
  });
  if (readyAll) {
    resolve();
  } else {
    tc.events.once("ready", function() {
      resolve();
    });
  }
});
}
function getTileContainer(layer) {
for (var k in layer) {
  if (layer.hasOwnProperty(k)) {
    if (
      layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
      || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
    ) {
      return layer[k];
    }
  }
}
return null;
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
var script = document.createElement("script");

if (script.readyState){  // IE
  script.onreadystatechange = function(){
    if (script.readyState == "loaded" ||
            script.readyState == "complete"){
      script.onreadystatechange = null;
      callback();
    }
  };
} else {  // Другие браузеры
  script.onload = function(){
    callback();
  };
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
$('.map-wrap').mouseenter(function(){
    if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

    // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
      check_if_load = true; 

  // Показываем индикатор загрузки до тех пор, пока карта не загрузится
      spinner.addClass('is-active');

  // Загружаем API Яндекс.Карт
      loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
         // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
         ymaps.load(init);
      });                
    }
  }
);  
}

$(function() {

//Запускаем основную функцию
ymap();

});

})