document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider");
    const buttons = document.querySelectorAll(".reviews__minisubtext");
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");
  
        // Move slider to the clicked slide
        slides.forEach(slide => {
          slide.style.transform = `translateX(-${index * 100}%)`;
        });
      });
    });
  });
  