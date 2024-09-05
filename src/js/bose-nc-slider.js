let items = document.querySelectorAll('.slider .item');  // Селекція всіх слайдів
let active = 0;
let lengthitems = items.length - 1;
let autoSlide;

// Функція перемикання на наступний слайд
function nextSlide() {
    if (active + 1 > lengthitems) {
        active = 0; // Безкінечний цикл
    } else {
        active += 1;
    }
    reloadSlider();
}

// Функція перемикання на попередній слайд
function prevSlide() {
    if (active - 1 < 0) {
        active = lengthitems; // Якщо активний слайд перший, йдемо на останній
    } else {
        active -= 1;
    }
    reloadSlider();
}

// Оновлення слайдера: додавання та видалення класу 'show'
function reloadSlider() {
    items.forEach((slide) => {
        slide.classList.remove("show");  // Прибираємо клас 'show' у всіх слайдів
        slide.style.opacity = "0";  // Приховуємо слайд, але з плавною анімацією
        slide.style.transition = "opacity 0.5s";  // Тривалість анімації
    });

    items[active].classList.add("show");  // Показуємо активний слайд
    items[active].style.opacity = "1";  // Плавно показуємо слайд
}

// Автоматичне перемикання слайдів кожні 5 секунд
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

// Зупинка автоматичного слайдування
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Запуск автоматичного слайдування
startAutoSlide();

// Зупинка та запуск авто-слайдування при програванні та паузі відео
let iframes = document.querySelectorAll('.reviews__video');
iframes.forEach(iframe => {
    iframe.addEventListener('play', stopAutoSlide);  // Зупиняємо авто-слайд при програванні відео
    iframe.addEventListener('pause', startAutoSlide);  // Відновлюємо авто-слайд при паузі відео
});
