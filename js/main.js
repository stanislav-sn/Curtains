"use strict";

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.header').addClass("sticky-header");
    $('.header__container').addClass("sticky-header__container");
    $('.header__logo').addClass("sticky-header__logo");
    $('.header__logo-img').addClass("sticky-header__logo-img");
    $('.header__buttons-text').addClass("sticky-header__buttons-text");
    $('.header__search').addClass("sticky-header__search");
    $('.header-link-button').addClass("sticky-header-link-button");
  }
  else{
    $('.header').removeClass("sticky-header");
    $('.header__container').removeClass("sticky-header__container");
    $('.header__logo').removeClass("sticky-header__logo");
    $('.header__logo-img').removeClass("sticky-header__logo-img");
    $('.header__buttons-text').removeClass("sticky-header__buttons-text");
    $('.header__search').removeClass("sticky-header__search");
    $('.header-link-button').removeClass("sticky-header-link-button");
  }
});

$(document).ready(function () {
    $("#carousel-header").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        navText: []    
    });
  });
  