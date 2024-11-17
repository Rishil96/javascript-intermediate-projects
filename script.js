// API KEY: 4bb1b1ce60a1cfa61f655a15d2cf7736
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bb1b1ce60a1cfa61f655a15d2cf7736&page=1";

const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=4bb1b1ce60a1cfa61f655a15d2cf7736&query=";

const imgPath = "https://image.tmdb.org/t/p/w1280";

let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let input = document.querySelector(".search");


async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    displayMovies(data.results);
}

function displayMovies(movies) {
    moviesDiv.innerHTML = "";
    movies.forEach((movie) => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
        <img src="${imgPath + movie.backdrop_path}" alt="">
            <div class="details">
              <h2 class="title">${movie.title}</h2>
              <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
              <p class="overview">${movie.overview}</p>
            </div>
        `;
        moviesDiv.appendChild(div);
    })
}


getMovies(apiURL);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    moviesDiv.innerHTML = "";

    const inputVal = input.value;

    if (inputVal) {
        getMovies(searchAPI + inputVal);
        input.value = "";
    }
})

