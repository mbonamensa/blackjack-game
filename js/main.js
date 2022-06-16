/**********For the Game**********/
let cards = [];
let sum = 0;
let startEl       = document.querySelector('#start-el');
let newcard       = document.querySelector('#new-card');
let messageEl     = document.querySelector('#message-el');
let cardEl        = document.querySelector('#cards-el');
let sumEl         = document.querySelector('#sum-el');
let prize         = document.querySelector('.prize');
let isAlive       = false;
let hasBlackJack  = false;
let hasPrize = false;

//Generate random cards to be summed

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

//Start the Game

function startGame() {
    firstCard = getRandomCards();
    secondCard = getRandomCards();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackJack = false;
    hasPrize = false;
    prize.style.visibility = "hidden";
    renderGame();
}

//Render game based on sum

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
        prize.style.visibility = "visible";
    }
    else {
        messageEl.textContent = "You're out of the game!";
        isAlive = false; 
    }

}

//Show prize when there's a win

function newCard() {
    let newcard = getRandomCards();
if (isAlive === true && hasBlackJack === false) {
    sum += newcard;
    cards.push(newcard);
    renderGame();
}
}

//Event listeners
startEl.addEventListener("click", startGame);
newcard.addEventListener("click", newCard);


/**********For the Game Rules**********/

let getrules = document.querySelector(".rules-text");
let rules    = document.querySelector(".rules-container");
let exitrules = document.querySelector(".close-btn");
let overlay    = document.querySelector(".overlay");

function openRules() {
    rules.style.display = "block";
    overlay.style.display = "block";
}

function closeRules() {
    rules.style.display = "none";
    overlay.style.display = "none";
}


getrules.addEventListener("click", openRules);
exitrules.addEventListener("click", closeRules)
