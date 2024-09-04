let items = document.querySelectorAll('.slider .list .item');
let active = 0;
let lengthitems = items.length - 1;

function nextSlide() {
    if (active + 1 > lengthitems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadslider();
}

function reloadslider() {
    items.forEach(slide => slide.classList.remove("show"));
    items[active].classList.add("show");
}

// Автоматичне перемикання кожні 7 секунд
let autoslide = setInterval(nextSlide, 14000);
