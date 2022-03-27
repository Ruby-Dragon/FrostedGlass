let currentSlide = 1;
showSlides(1)

const nextslide = setInterval(plusSlides, 5000);

function plusSlides() {
    showSlides(currentSlide += 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {currentSlide = 1}
    if (n < 1) {currentSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(slides);
    slides[currentSlide-1].style.display = "block";
}