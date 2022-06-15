/*
1. declare variables

1. Start Game by clicking Start Game button which will generate random numbers
sum them up
- start game function

Random cards will be generated
Click card to add more cards if random cards generated do not sum up to 21
*/


let cards = [];
let sum = 0;
let startEl   = document.querySelector('#start-el');
let newcard   = document.querySelector('#new-card');
let messageEl = document.querySelector('#message-el');
let cardEl    = document.querySelector('#cards-el');
let sumEl    = document.querySelector('#sum-el');
let isAlive  = false;
let hasBlackJack = false;

function getRandomCards() {
    let randomCards = Math.floor(Math.random()* 13) + 1;
    if (randomCards === 1) {
        return 11;
    }
    else if (randomCards > 10) {
        return  10;
    }
    else {
        return randomCards;
    }
    
}

function startGame() {
    firstCard = getRandomCards();
    secondCard = getRandomCards();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;   
    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        messageEl.textContent = "You've got a BlackJack!";
        hasBlackJack = true; 
    }
    else {
        messageEl.textContent = "You're out of the game!";
        isAlive = false; 
    }

}

function newCard() {
    let newcard = getRandomCards();
if (isAlive === true && hasBlackJack === false) {
    sum += newcard;
    cards.push(newcard);
    renderGame();
}
}

startEl.addEventListener("click", startGame);
newcard.addEventListener("click", newCard);