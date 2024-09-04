let items = document.querySelectorAll('.slider .slide');
let active = 0;
let lengthitems = items.length - 1;
let autoSlide; 

function nextSlide() {
    if (active + 1 > lengthitems) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}

function reloadSlider() {
    items.forEach(slide => slide.classList.remove("show"));
    items[active].classList.add("show");
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 7000); 
}

function stopAutoSlide() {
    clearInterval(autoSlide); 
}

startAutoSlide();


let iframes = document.querySelectorAll('.reviews__video');
iframes.forEach(iframe => {
    iframe.addEventListener('play', stopAutoSlide);
    iframe.addEventListener('pause', startAutoSlide);
});
