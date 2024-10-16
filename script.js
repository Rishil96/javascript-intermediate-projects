// Word Count Tool

let input = document.querySelector(".input");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let wordLimit = document.querySelector(".word-limit");
let readingTime = document.querySelector(".reading-time");
let WORD_LIMIT = 225;


input.addEventListener("keyup", characterCounter);
input.addEventListener("keyup", wordCounter);


function characterCounter() {
    character.innerHTML = input.value.length;
}

function wordCounter(e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    
    if (words) {
        word.innerHTML = words.length;
        wordLimit.innerHTML = WORD_LIMIT - words.length;
    }
    else {
        word.innerHTML = 0;
        wordLimit.innerHTML = WORD_LIMIT;
    }

    // Word Limit block
    input.addEventListener("keydown", function(e) {
        let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
        if (words) {
            if (words.length >= WORD_LIMIT && e.code != "Backspace") {
                e.preventDefault();
                console.log("Word limit reached");
            }
        }
    })

    // Reading time based on average 
    if (words) {
        let seconds = Math.floor((words.length * 60) / 225);
        if (seconds > 59) {
            let minutes = Math.floor(seconds / 60);
            seconds = seconds - minutes * 60;
            readingTime.innerHTML = minutes + "m " + seconds + "s";
        }
        else {
            readingTime.innerHTML = seconds + "s";
        }
    } else {
        readingTime.innerHTML = "0";
    }
}