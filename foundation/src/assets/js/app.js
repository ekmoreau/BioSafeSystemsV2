import $ from 'jquery';
import 'what-input';
import slick from "slick-carousel"

// import AOS from "aos";

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;

// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


var slides = $('.slide');
$(".slider--single").slick({
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 750,
    arrows: false,
    dots: true,
    fade: true,
    draggable: true,
    lazyLoad: 'ondemand'
})
.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    slides.removeClass('slideInLeft slideInRight');
    //  use custom transition
    slides.eq(nextSlide).addClass('slideInLeft');
    slides.eq(nextSlide + 1).addClass('slideInRight');
});

$('.slider--3up').slick({dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $(function () {
    // AOS.init({
        // duration: 650,
        // once: true
    // });
    // onElementHeightChange(document.body, function () {
    //     AOS.refresh();
    // });
// });

$(document).foundation();