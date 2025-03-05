let slides = document.querySelectorAll(".slide");
let thumbnails = document.querySelectorAll(".thumbnails img");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        thumbnails[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            thumbnails[i].classList.add("active");
        }
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    showSlide(index);
}

// Touch/Swipe Support
let startX = 0;
document.querySelector(".slider").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide();
    } else if (endX - startX > 50) {
        prevSlide();
    }
});
