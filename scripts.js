let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
