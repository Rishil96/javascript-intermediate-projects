// Random Joke Generator
const JOKE_ENDPOINT = "https://api.chucknorris.io/jokes/random";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getJoke2);


// Use promises for HTTP request to API
function getJoke() {
    fetch(JOKE_ENDPOINT)
        .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        joke.innerHTML = data.value;
    });
}

// Use async/await for HTTP request to API
async function getJoke2() {
    const response = await fetch(JOKE_ENDPOINT);
    const data = await response.json();
    console.log(data);
    joke.innerHTML = data.value;
}