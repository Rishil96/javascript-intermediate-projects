const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let autoScroll = true;
let slideInterval;
const intervalTime = 3000;

const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling && !current.nextElementSibling.classList.contains("buttons")) {
        current.nextElementSibling.classList.add("current");
    }
    else {
        slides[0].classList.add("current");
    }
    current.classList.remove("current");
}


const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    }
    else {
        slides[slides.length - 1].classList.add("current");
    }
    current.classList.remove("current");
}

next.addEventListener("click", () => {
    nextSlide();
    if (autoScroll) {
        clearInterval(slideInterval);
        auto();
    }
});

prev.addEventListener("click", () => {
    prevSlide();
    if (autoScroll) {
        clearInterval(slideInterval);
        auto();
    }
});


function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Auto Scroll
if (autoScroll) {
    auto();
}