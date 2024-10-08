// Variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");  

// Function to add a list item
const addTask = (e) => {

    e.preventDefault();

    const newListItem = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    if (input.value !== "") {
        newListItem.textContent = input.value;
        newListItem.appendChild(deleteBtn);
        todoList.appendChild(newListItem);
        console.log("Here");
        input.value = "";
    } else {
        alert("Please enter a task")
    }

    // Delete button
    deleteBtn.addEventListener("click", function() {
        const del = confirm("You are about to delete this task!");
        if (del == true) {
            const parent = this.parentNode;
            parent.remove();
        }
    })
}

btn.addEventListener("click", addTask);


// Clear tasks
clear.addEventListener("click", () => {
    todoList.innerHTML = "";
})
