// Variables
const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.querySelector(".clear");

let notesObj = [];
showNotes();

// Function that loads the notes from local storage to notesObj variable
function getNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
}

// Event listener to add notes
noteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (noteTitle.value == "" || noteText.value == "") {
        alert("Please add note title and details!");
        return ;
    }

    getNotes();

    let myObj = {
        title: noteTitle.value,
        text: noteText.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    document.querySelector("form").reset();
    showNotes();
});


// Function to display notes on the page
function showNotes() {
    getNotes();

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="note">
            <div class="note-cta">
                <p class="note-counter">
                Note ${index + 1}
                </p>
                <div class="note-cta-btn">
                <button id="${index}" class="note-btn" onclick="deleteNote(this.id)"><i class="fas fa-trash"></i>Delete</button>
                <button id="${index}" class="note-btn edit-btn" onclick="editNote(this.id)"><i class="fas fa-edit"></i>Edit</button>
                </div>
            </div>
            <hr>
            <h3 class="note-title">${element.title}</h3>
            <p class="note-text">${element.text}</p>
            </div>
        </div>
        `
    });

    const notesElm = document.getElementById("notes");
    
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "No notes added, please add a note";
    }
}

// Delete a single note
function deleteNote(index) {
    let confirmDelete = confirm("Delete this note?");
    if (confirmDelete) {
        getNotes();
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

// Delete all notes
clear.addEventListener("click", () => {
    localStorage.clear();
    showNotes();
})


// Edit a note
function editNote(index) {
    if (noteText.value != "" || noteTitle.value != "") {
        alert("Please clear the form before editting.");
        return ;
    }

    getNotes();

    noteTitle.value = notesObj[index].title;
    noteText.value = notesObj[index].text;

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

