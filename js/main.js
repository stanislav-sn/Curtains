"use strict";
// ---------------------------header animation-----------------------
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

// ---------------------------header animation-----------------------
$(document).ready(function () {
  $("#carousel-header").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop: true,
      navText: []
  });
});
// ---------------------------/header animation-----------------------

// ---------------------------cards-------------------------------
class CatalogCard {
    constructor(src, alt, title, number, oldPrice, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.number = number;
        this.price = price;
        this.oldPrice = oldPrice;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 36; // курс валют $
        this.changeToUAH(),
        this.changeToUAHoldPrice();
    }

    changeToUAH() {
        this.price = this.price * this.transfer;
    }
    changeToUAHoldPrice() {
        this.oldPrice = this.oldPrice * this.transfer;
    }

    render() {
        const element = document.createElement('div');
        
        if (this.classes.length === 0) {
            this.element = 'stock__1-section-catalog-grid-type';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
    
        element.innerHTML = `
        <img class='s__1-catalog-inner-img' src=${this.src} alt=${this.alt}>
        <div class="s__1-catalog-inner-text">
            <div class="s__1-catalog-inner-text-sale"></div>
            <div class="s__1-catalog-inner-text-name">${this.title}</div>
            <div class="s__1-catalog-inner-text-item_number">
                <div class="s__1-cat-in-t-item_num-text">Код товара:</div>
                <div class="s__1-cat-in-t-item_num-number">${this.number}</div>
            </div>
        </div>
        <div class="s__1-catalog-inner-price">
            <div class="s__1-catalog-inner-price-old">
                <div class="s__1-catalog-inner-price-old-value">${this.oldPrice}</div>
                <div class="s__1-catalog-inner-price-old-currency">грн</div>
            </div>
            <div class="s__1-catalog-inner-price-new">
                <div class="s__1-catalog-inner-price-new-value">${this.price}</div>
                <div class="s__1-catalog-inner-price-new-currency">грн</div>
            </div>
        </div>
        <a href="#" class="s__1-catalog-button-buy"><img
            src="img/header/shop_cart-heart-libra/shop_cart.png" alt="shop_cart"> Купить
        </a>
        <div class="s__1-catalog-inner-icons">
            <span class="header-link__icon shop-cart">
                <a href="#"><img src="img/stock1/shop_cart-heart-libra-dark/heart.png"
                        alt="shop_cart"></a>
            </span>
            <span class="header-link__icon heart">
                <a href="#"><img src="img/stock1/shop_cart-heart-libra-dark/libra.png"
                        alt="heart"></a>
            </span>
            <span class="header-link__icon libra">
                <a href="#"><img src="img/stock1/shop_cart-heart-libra-dark/chat.png"
                        alt="libra"></a>
            </span>
        </div>
        `;
        this.parent.append(element);
    }
}
new CatalogCard(
    "/../../img/stock1/Shtory_1.jpg",
    'shtory',
    'Glamorous Nits',
    66123,
    23, // старая цена в $
    20, // нова цена в $
    '.stock__1-section-catalog .stock__1-section-catalog-grid',
    'stock__1-section-catalog-grid-type'
).render(); 

new CatalogCard(
    "/../../img/stock1/Shtory_2.jpg",
    'shtory',
    'Elegant Provence',
    66123,
    25, // старая цена в $
    22, // нова цена в $
    '.stock__1-section-catalog .stock__1-section-catalog-grid',
    'stock__1-section-catalog-grid-type'
).render();

new CatalogCard(
    "/../../img/stock1/Shtory_3.jpg",
    'shtory',
    'Stylish Classic',
    66123,
    22, // старая цена в $
    19, // нова цена в $
    '.stock__1-section-catalog .stock__1-section-catalog-grid',
    'stock__1-section-catalog-grid-type'
).render();

// ---------------------------- modal -----------------------------------------
const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');
    
const modalTimerId = setTimeout(openModal, 3000);

function openModal() {
    document.body.style.overflow = 'hidden';
    modal.classList.toggle('show');
    clearInterval(modalTimerId);
}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalCloseBtn.addEventListener('click', openModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        openModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        openModal();
    }
});

function shomModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', shomModalByScroll);
    }
}
window.addEventListener('scroll', shomModalByScroll);

// ---------------------------- /modal -----------------------------------------