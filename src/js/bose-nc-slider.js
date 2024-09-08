let items = document.querySelectorAll('.slider .item');  // Вибірка всіх слайдів
let active = 0;
let lengthitems = items.length - 1;

// Функція для перемикання на наступний слайд
function nextSlide() {
    active = (active + 1 > lengthitems) ? 0 : active + 1;  // Циклічне переключення слайдів
    reloadSlider();
}

// Функція для перемикання на попередній слайд
function prevSlide() {
    active = (active - 1 < 0) ? lengthitems : active - 1;  // Циклічне переключення слайдів
    reloadSlider();
}

// Функція для оновлення слайдера: додає/видаляє клас 'show'
function reloadSlider() {
    items.forEach((slide, index) => {
        if (index === active) {
            slide.classList.add("show");   // Додаємо клас активного слайда
            slide.style.opacity = "1";     // Показуємо слайд з анімацією
            slide.style.visibility = "visible";
            slide.style.transition = "opacity 1s ease-in-out"; // Додаємо плавний перехід
        } else {
            slide.classList.remove("show");  // Видаляємо клас неактивних слайдів
            slide.style.opacity = "0";       // Приховуємо інші слайди
            slide.style.visibility = "hidden";
        }
    });
}

// Автоматичне перемикання слайдів кожні  секунд
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 1500);
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
