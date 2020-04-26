// -----------------------------

//   JS INDEX
/* =================== */
/* 

    ## Preloder
    ## Stiky menu
    ## Stiky menu logo
    ## Scrool Menu
    ## Scrool Up
    ## smart menu
    ## Counter Up 
    ## smoothscroll 
    ## Wow
    ## slick slider
    ## Timer Js
    ## Youtube puse
    ## Googel Map
    ## Ajax

*/

(function($) {
  "use strict"; 

//**================== Preloder 1========================*//
$(window).on('load', function() {
  $('#preloader-1').fadeOut('slow', function() { $(this).remove(); });
});

//**================= End of Preloder =====================**//


//**================== Preloder 2========================*//
$(window).on('load', function() {
  $('#preloader-2').fadeOut('slow', function() { $(this).remove(); });
});

//**================= End of Preloder =====================**//


//**================== Preloder 3========================*//
$(window).on('load', function() {
  $('#preloader-3').fadeOut('slow', function() { $(this).remove(); });
});

//**================= End of Preloder =====================**//


//**================== Preloder 4========================*//
$(window).on('load', function() {
  $('#preloader-4').fadeOut('slow', function() { $(this).remove(); });
});

//**================= End of Preloder =====================**//







//**================= Sticky =====================**//

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
      $('.header-area').addClass('nav-fixed');
  } else {
      $('.header-area').removeClass('nav-fixed');
  }
});

//*==========Scroll Up Logo===============*//
var initialSrc = "assets/img/logo.png";
var scrollSrc = "assets/img/logo-red.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 50)
      $(".top-logo").attr("src", scrollSrc);
   else
      $(".top-logo").attr("src", initialSrc);
});

//*==========Scroll Up Logo===============*//

//**===================Scroll UP ===================**//

$(document).ready(function () {

  $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
          $('.scrollup-icon').fadeIn();
      } else {
          $('.scrollup-icon').fadeOut();
      }
  });

  $('.scrollup-icon').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

});
//**===================Scroll UP ===================**//

//**================= Smart Menu =====================**//
// SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -8
  });
});

// SmartMenus mobile menu toggle button
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

//**================= End Smart Menu =====================**//

//**================= CounterUp =====================**//
if ($('.counterUp').length > 0) {   
    $('.counterUp').counterUp({
        delay: 10,
        time: 1000
    });
  } 
  
  //**================= End CounterUp =====================**//

    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;

      $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - 80
      }, 1200);
  });

  /*---------------------
//*Animation js */

//**=================== WOW ================================**//
   var wowSel = 'wow';
   var wow = new WOW({
       boxClass: wowSel,
       animateClass: 'animated',
       offset: 0,
       mobile: true,
       live: true,
       callback: function(box) {
       },
       scrollContainer: null
   });
   wow.init();

//**============== End of WOW =============================**//


/*---------------------
        Hero Slider JS
    --------------------- */

    if ($('.hero-slide1').length > 0) {

      $(window).on('load', function() {
          $('.hero-slide1').on('init', function(e, slick) {
              var $firstAnimatingElements = $('.slide:first-child').find('[data-animation]');
              doAnimations($firstAnimatingElements);
          });
          $('.hero-slide1').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('.slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);
          });


          function heroSlider() {
              if ($(".hero-slide1").length) {
                  $(".hero-slide1").slick({
                      autoplay: true,
                      autoplaySpeed: 5000,
                      pauseOnHover: true,
                      arrows: false,
                      prevArrow:false,
                      nextArrow: false,
                      dots: false,
                      fade: true,
                      cssEase: 'linear'
                  });
              }
          }
          heroSlider();


          function doAnimations(elements) {
              var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
              elements.each(function() {
                  var $this = $(this);
                  var $animationDelay = $this.data('delay');
                  var $animationType = 'animated ' + $this.data('animation');
                  $this.css({
                      'animation-delay': $animationDelay,
                      '-webkit-animation-delay': $animationDelay
                  });
                  $this.addClass($animationType).one(animationEndEvents, function() {
                      $this.removeClass($animationType);
                  });
              });
          }

      });

  }




    //Timer Js//

 if ($('body').find('#clockdiv').length !== 0) {

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
    
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = new Date("May5, 2020 19:37:25"); 
    initializeClock('clockdiv', deadline);
  } 

  //**=================End Timer=====================**//


}(jQuery));


//**==================Video Play- Pause-Stop===================================**//

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var pauseButton = document.getElementById("pause-button");
  var fullbody = document.querySelector('body');

  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
    
  });

  fullbody.addEventListener("click", function() {
    player.pauseVideo();
      
  });
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//***================== End YouTube Video Pause-Play-Stop =============******//


//**=================== Google Map ==========================**//

if ($('#googleMap').length > 0) { 
var user_lat, user_lng;
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: {
                lat: 23.782062,
                lng: 90.416053
            },
            zoom: 15,
            scrollwheel: false
        });
              
      var marker = new google.maps.Marker({
        position:  {  lat: 23.782062, lng: 90.416053},
        map: map,
        icon: "assets/img/locator.png"
      });

          } 
        }

//*================ End Google Map ============*//


//**=================== Google Map2 ==========================**//

if ($('#googleMap2').length > 0) { 
    var user_lat, user_lng;
        var map;
    
        function initMap() {
            map = new google.maps.Map(document.getElementById('googleMap2'), {
                center: {
                    lat: 23.782062,
                    lng: 90.416053
                },
                zoom: 15,
                scrollwheel: false
            });
    
              } 
            }
    
    //*================ End Google Map2 ============*//

/*---------------------
    // Ajax Contact Form
    --------------------- */

   $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
    
        var name = $('#name').val();
        var email = $('#email').val();
        var website = $('#website').val();
        var msg = $('#msg').val();2
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }
    
        name = $.trim(name);
        email = $.trim(email);
        msg = $.trim(msg);
    
        if (name != '' && email != '' && website != '' && msg != '') {
            var values = "name=" + name + "&email=" + email + "&website=" + website + "&msg=" + msg;
            $.ajax({
                type: "POST",
                url: "assets/mail-sender/contact.php",
                data: values,
                success: function() {
                    $('#name').val('');
                    $('#email').val('');
                    $('#website').val('');
                    $('#msg').val('');
    
                   $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')   
            $('.cf-msg').fadeOut(2000)
        }
        return false;
    });

// Ajax Contact Form JS END



