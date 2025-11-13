let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent += " " + count + " - ";
    count = 0;
    countEl.textContent = count;
}
