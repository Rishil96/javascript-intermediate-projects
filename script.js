// 
let celcius = document.querySelector(".celcius");
let fahrenheit = document.querySelector(".fahrenheit");
let kelvin = document.querySelector(".kelvin");

let form = document.querySelector("form");


// Event delegator
form.addEventListener("input", convertTemp);

function convertTemp(e) {
    if (e.target.classList.contains("celcius")) {
        let x = Number(e.target.value);
        fahrenheit.value = (x * (9/5) + 32).toFixed(2);
        kelvin.value = x + 273.15;
    }
    if (e.target.classList.contains("fahrenheit")) {
        let x = e.target.value;
        celcius.value = ((x - 32) * 5/9).toFixed(2);
        kelvin.value = ((x - 32) * 5/9 + 273.15).toFixed(2);
    }
    if (e.target.classList.contains("kelvin")) {
        let x = e.target.value;
        celcius.value = (x - 273.15).toFixed(2);
        fahrenheit.value = ((x - 273.15) * 9/5 + 32).toFixed(2);
    }
}