"use strict";

let titles = ['test'];
let notes = ['notiz als test'];
load();

function addNote() {
    let title = document.getElementById('title').value;
    let note = document.getElementById('note').value;
    titles.push(title);
    notes.push(note);
    render();
    save();
}

function render() {
    let content = document.getElementById('savedNotes');
    content.innerHTML = '';
    content.innerHTML += `<h2 class="header">Gespeicherte Notizen:</h2>`;
    for (let i = 0; i < titles.length; i++) {
        content.innerHTML += `<div class="card">
        <h3>${titles[i]}</h3>
        <p class="hide" id="${i}">${notes[i]}</p>
        <div class="menu-container">
        <button onclick="showNote(${i})">V</button>
        <button onclick="hideNote(${i})">O</button>
<button onclick="deleteNote(${i})">X</button>
</div>
</div>`;
    }
}


function showNote(i) {
    document.getElementById(i).classList.remove('hide');
}

function hideNote(i) {
    document.getElementById(i).classList.add('hide');
}

function deleteNote(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes', notesAsText);
}
function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');
    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }


}
