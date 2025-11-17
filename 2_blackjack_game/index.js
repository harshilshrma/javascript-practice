let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "You",
    chips: 143
}

playerEl.textContent = `${player.name} have: $${player.chips}`; 

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let started = false;
let message = "";

function startGame() {
    isAlive = true;
    
    if (isAlive && !started) {
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum += firstCard + secondCard;
        started = true;
    }

    renderGame();
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum == 1) {
        return 11;
    } else if (randomNum >= 11 && randomNum <= 13) {
        return 10;
    } else {
        return randomNum;
    }
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
    messageEl.textContent = message;

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function restartGame() {
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = false;
    started = false;

    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
}
