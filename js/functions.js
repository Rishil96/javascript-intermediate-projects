import * as v from "./variables.js";

// Get users
export async function getUser(username) {
    const response = await fetch(v.apiURL + username);
    const data = await response.json();

    if (!response.ok) {
        errorMessage("User not found, try another");
    } else {
        displayData(data);
        getRepos(username);
    }
}

export function errorMessage(msg) {
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = "none";
    return v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`
}


async function getRepos(username) {
    const response = await fetch(v.apiURL + username + "/repos");
    const data = await response.json();
 
    displayRepos(data);
}

function displayRepos(repoData) {
    let repo_data = repoData.map((repo) => {
        return `
        <span class="repo border border-rounded p-3">
            <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
            <p>
                <strong>Stars: ${repo.stargazers_count} |</strong>
                <strong>Watchers: ${repo.watchers_count} |</strong>
                <strong>Forks: ${repo.forks_count}</strong>
            </p>
        </span>
        `;
    })

    v.repos.innerHTML = repo_data.slice(0, 8).join("");
    document.querySelector(".hide").style.display = "block";
}


function displayData(user) {
    console.log(user);
    const html = `
            <img src="${user.avatar_url}" alt="${user.name}" class="img-thumbnail rounded-circle">
            <h2>${user.name}</h2>
            <p>${user.login}</p>
            <div class="d-grid">
            <a href="https://github.com/${user.login}" class="btn btn-outline-secondary" target="_blank" rel="noopener">View Profile</a>
            </div>
            <p class="pt-2">
            <span>${user.followers} followers</span>
            <span>${user.following} following</span>
            </p>

            <p>${user.public_repos}</p>
            <p><i class="fas fa-marker-alt"></i>${user.location}</p>
    `;
    v.profile.innerHTML = html;
}
