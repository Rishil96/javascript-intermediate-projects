// BMI
/*
Underweight: below 18.5
Normal: 18.5 - 24.9
Overweight: 25 - 29.9
Obese: 30 and above
*/

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    let height = document.querySelector(".height").value;
    let weight = document.querySelector(".weight").value;

    // Validate
    if (height === "" || weight === "") {
        result.innerHTML = "Provide all the details!";
    }
    else {
        height = height / 100;
        let bmi = (weight / Math.pow(height, 2)).toFixed(2);

        if (bmi < 18.5) {
            showResult(`Underweight: <span>${bmi}</span>`, "orange");
        }
        else if (bmi >= 18.5 && bmi <=24.9) {
            showResult(`Normal Weight: <span>${bmi}</span>`, "green");
        }
        else if (bmi >= 25 && bmi < 30) {
            showResult(`Overweight: <span>${bmi}</span>`, "blue");
        }
        else {
            showResult(`Obese: <span>${bmi}</span>`, "red");
        }
    }

    reset.style.display = 'block';
}


function showResult(val, color) {
    result.style.display = 'block';
    result.innerHTML = val;
    result.style.backgroundColor = color;
}


reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    reset.style.display = 'none';
    result.style.display = 'none';
})