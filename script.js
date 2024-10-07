// Local Storage
console.log(Object.getOwnPropertyNames(window));

// Local Storage Guide
/*
setItem(): Add key and value to Local storage
getItem(): This is how you get items from local storage
removeItem(): Remove an item by key from local storage
clear(): clear all local storage
key(): allows us to get key as we would in an array using index
*/

window.localStorage.setItem("firstName", "Rishil");
localStorage.setItem("lastName", "Kayampurath");


// Save objects in local storage
const person = {
    fullName: "Peter Parker",
    heroName: "Spiderman",
    organization: "Avengers"
}
localStorage.setItem("spiderman", JSON.stringify(person));


// Save arrays in local storage
const fruits = ["apple", "mango", "banana", "peach", "pineapple", "grapes"];
localStorage.setItem("fruits", JSON.stringify(fruits));


// Get items from local storage
console.log(localStorage.getItem("firstName"));


// Remove items
localStorage.removeItem("fruits");


// Clear local storage
localStorage.clear();


// Key method
localStorage.setItem("name", "Rishil");
localStorage.setItem("age", "28");

console.log(localStorage.key(0));
