let items = document.querySelectorAll('.slider .item');  // Селекція всіх слайдів
let active = 0;
let lengthitems = items.length - 1;
let autoSlide;

// Функція перемикання на наступний слайд
function nextSlide() {
    active = (active + 1 > lengthitems) ? 0 : active + 1;  // Безкінечний цикл
    reloadSlider();
}

// Функція перемикання на попередній слайд
function prevSlide() {
    active = (active - 1 < 0) ? lengthitems : active - 1;  // Безкінечний цикл
    reloadSlider();
}

// Оновлення слайдера: додавання та видалення класу 'show'
function reloadSlider() {
    items.forEach((slide, index) => {
        if (index === active) {
            slide.classList.add("show");   // Показуємо активний слайд
            slide.style.opacity = "1";     // Плавно показуємо слайд
            slide.style.visibility = "visible";
            slide.style.transition = "opacity 1s ease-in-out"; // Додаємо анімацію
        } else {
            slide.classList.remove("show");  // Прибираємо клас у інших слайдів
            slide.style.opacity = "0";       // Приховуємо інші слайди
            slide.style.visibility = "hidden"; // Забезпечуємо приховання слайдів
        }
    });
}

// Автоматичне перемикання слайдів кожні 5 секунд
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 10000);
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
