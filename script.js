// 913a5a406e43da55c28c7e75

const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");

const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "913a5a406e43da55c28c7e75";

const countries = {
    "EUR": "https://www.worldometers.info/img/flags/au-flag.gif",
    "GBP": "https://www.worldometers.info/img/flags/uk-flag.gif",
    "USD": "https://www.worldometers.info/img/flags/us-flag.gif",
};

// Get exchange rate
async function getExchangeRate() {
    const cur1Value = cur1.value;
    const cur2Value = cur2.value;

    const fromFlag = document.querySelector(".from img");
    const toFlag = document.querySelector(".to img");

    document.querySelector(".from img").setAttribute("src", countries[cur1Value]);
    document.querySelector(".to img").setAttribute("src", countries[cur2Value]);

    const response = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
    const data = await response.json();
    const rate = data.conversion_rates[cur2Value];
    baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

    cur2Input.value = (Number(cur1Input.value) * Number(rate)).toFixed(2);

}

getExchangeRate();

cur1.addEventListener("change", () => {
    getExchangeRate();
});

cur2.addEventListener("change", () => {
    getExchangeRate();
});

cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

switchCur.addEventListener("click", () => {
    const cur1Val = cur1.value;
    cur1.value = cur2.value;
    cur2.value = cur1Val;
    switchCur.classList.toggle("rotate");
    getExchangeRate();
});