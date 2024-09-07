document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(sliderContainer => {
        const slides = sliderContainer.querySelectorAll('.slide');
        const dotsContainer = sliderContainer.querySelector('.dots-container');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            slides.forEach((slide, i) => {
                slide.classList.toggle('show', i === currentIndex);
            });

            // Update dots
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => showSlide(i));
            dotsContainer.appendChild(dot);
        });

        // Initial call to show the first slide
        showSlide(currentIndex);

        // Add event listeners to navigation buttons
        sliderContainer.querySelector('.nav-button.next').addEventListener('click', nextSlide);
        sliderContainer.querySelector('.nav-button.prev').addEventListener('click', prevSlide);
    });
});
