const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextButton = document.getElementById("slide-right");
const prevButton = document.getElementById("slide-left");

nextButton.addEventListener("click", () => {
    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
        slider.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 100) {
            window.clearInterval(slideTimer);
        }
    }, 25);
})

prevButton.addEventListener("click", () => {
    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
        slider.scrollLeft -= 10;
        scrollAmount += 10;
        if (scrollAmount >= 100) {
            window.clearInterval(slideTimer);
        }
    }, 25);
})

// Slider width values
function sw() {
    alert(slider.scrollWidth);
}

function sl() {
    alert(slider.scrollLeft);
}

function cw() {
    alert(slider.clientWidth);
}

function calc() {
    alert(slider.scrollWidth - slider.clientWidth);
}

// Auto Play function
function autoPlay() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 10);

// Pause the slide on hover
for (let i=0; i<thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play);
    })
    thumbnails[i].addEventListener("mouseout", () => {
        return (play = setInterval(autoPlay, 10));
    })
}