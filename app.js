// Variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");
let tasks;

window.onload = function() {
    displayTask();
}

btn.addEventListener("click", addTask);

function addTask() {
    if (input.value !== "") {
        addTaskToLS();
        displayTask();
    } else {
        alert("Please enter a task");
    }
}

// Get tasks from local storage
function getTasks() {

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    return tasks;
}

// Add task to local storage
function addTaskToLS() {

    getTasks();

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
}


// Display tasks on the page
function displayTask() {

    todoList.innerHTML = "";
    getTasks();

    tasks.forEach((task, index) => {
        const newListItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt" id=${index} onclick="deleteTask(this.id)"></i>`;

        newListItem.appendChild(document.createTextNode(task));
        newListItem.appendChild(deleteBtn);
        todoList.appendChild(newListItem);

    });

}


// Delete Tasks
function deleteTask(index) {
    const del = confirm("Do you want to delete this task?");
    if (del === true) {
        getTasks();
    }
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTask();
}


// Clear tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
    const delTasks = confirm("Do you want to clear all tasks?");
    
    if (delTasks === true) {
        localStorage.clear();
        displayTask();
    }
}
