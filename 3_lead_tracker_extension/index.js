let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    renderList();
})

function renderList() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }

    ulEl.innerHTML = listItems;
}
