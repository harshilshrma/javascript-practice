let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = 4;
let secondCard = 7;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    messageEl.textContent = message;
}

let card = 5;

function newCard() {
    sum += card;

    renderGame();
}
