let callBtn = document.querySelector('.btn_call')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.popup__close')

// Изменение при наведении
// callBtn.addEventListener('mouseover', function () {
//     callBtn.style.background = 'orange'
// })
//
// callBtn.addEventListener('mouseleave', function () {
//     callBtn.style.background = 'green'
// })

callBtn.addEventListener('click', function () {
    overlay.style.display = 'block'
})

close.addEventListener('click', function () {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', function (e) {
    if (e.target.className.includes('overlay')) {
        overlay.style.display = 'none'
    }
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed : 2000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }
});


let phoneInput = document.querySelector('#phone')
var im = new Inputmask("+\\9\\96(999)99-99-99");
im.mask(phoneInput);

let burger = document.querySelector('.header__burger')
let botRow = document.querySelector('.header__bot-row')
burger.addEventListener("click", function () {
    burger.classList.toggle('header__burger_active')
    botRow.classList.toggle('header__bot-row_active')
})