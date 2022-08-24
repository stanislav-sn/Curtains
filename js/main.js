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

// ---------------------------cards-------------------------------
class CatalogCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
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
                                <div class="s__1-catalog-inner-text-name">Glamorous Nits</div>
                                <div class="s__1-catalog-inner-text-item_number">
                                    <div class="s__1-cat-in-t-item_num-text">Код товара:</div>
                                    <div class="s__1-cat-in-t-item_num-number">66123</div>
                                </div>
                            </div>
                            <div class="s__1-catalog-inner-price">
                                <div class="s__1-catalog-inner-price-old">
                                    <div class="s__1-catalog-inner-price-old-value">2 070</div>
                                    <div class="s__1-catalog-inner-price-old-currency">грн</div>
                                </div>
                                <div class="s__1-catalog-inner-price-new">
                                    <div class="s__1-catalog-inner-price-new-value">1 700</div>
                                    <div class="s__1-catalog-inner-price-new-currency">грн</div>
                                </div>
                            </div>
                //=================================================
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total">
                        <span>${this.price}</span> грн/день
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    new CatalogCard(
        "../../img/stock1/Shtory_1.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render(); //можно использовать без const если будет использоваться один раз. Это альтернативный вариант, но можно и const прописать

    new CatalogCard(
        "../../img/stock1/Shtory_2.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new CatalogCard(
        "../../img/stock1/Shtory_3.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        6,
        '.menu .container',
        'menu__item'
    ).render();