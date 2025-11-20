import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-1799b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const refInDB = ref(database, "leads");

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

onValue(refInDB, (snapshot) => {
    if (snapshot.exists()) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        render(leads);
    }
})

deleteBtn.addEventListener("dblclick", () => {
    remove(refInDB);
    ulEl.innerHTML = "";
})

inputBtn.addEventListener("click", () => {
    push(refInDB, inputEl.value);
    inputEl.value = "";
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
    }

    ulEl.innerHTML = listItems;
}
