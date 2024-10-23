/*
    Data Attributes in HTML

    - used to store custom data private to the page or application.
    - the stored custom data can then be used in the page's JS to create more engaging user experience.
    - consists of 2 parts:- data-"filter"="about"
    - can be read using getAttribute or via dataset property
*/

const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Old way
        // const filter = e.target.getAttribute("data-link");
        
        // New way
        let filter = e.target.dataset.link;
        console.log(filter);

        text.textContent = `${filter} page`;
    })
})
