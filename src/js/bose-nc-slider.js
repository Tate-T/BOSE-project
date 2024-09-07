document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .item');  
    let active = 0;
    let lengthitems = items.length;

    // Функція для перемикання на наступний слайд
    function nextSlide() {
        items[active].classList.remove("show");
        active = (active + 1) % lengthitems;
        items[active].classList.add("show");
    }

    // Функція для перемикання на попередній слайд
    function prevSlide() {
        items[active].classList.remove("show");
        active = (active - 1 + lengthitems) % lengthitems;
        items[active].classList.add("show");
    }

    // Запуск автоматичного перемикання слайдів
    setInterval(nextSlide, 500000); // Перемикання кожні 5 секунд

    // Додаємо обробники подій для кнопок (якщо є)
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    document.querySelector('.prevs').addEventListener('click', prevSlide);
    document.querySelector('.nexts').addEventListener('click', nextSlide);
});

