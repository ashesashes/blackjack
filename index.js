
let player = {
    name: "Mr. Bond",
    chips: 200
};

let cards = []; 
let sum = 0; 
let isAlive = false;
let hasBlackJack = false; 
let cardsEl = document.getElementById("cards-el"); 
let sumEl = document.getElementById("sum-el"); 
let messageEl = document.getElementById("message-el"); 
let message = ""; 
let playerEl = document.getElementById("player-el"); 

playerEl.textContent = player.name + ": $" + player.chips; 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; 
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11; 
    } else {
        return randomNumber; 
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard(); 
    cards = [ firstCard, secondCard];
    sum = firstCard + secondCard; 
    renderGame(); 
}

function newGame() {

    if (isAlive && !hasBlackJack) {
        let card = getRandomCard(); 
        sum += card; 
        cards.push(card); 
        renderGame(); 
    }
}

function renderGame() {
    

    cardsEl.textContent = "Cards: "; 

    for (i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; 
    }

    sumEl.textContent = "Sum: " + sum; 
    //check if sum == 21, then blackjack, sum> 21 then out of game, sum < 21, draw another card 
    if (sum < 21) {
        message = "Do you want to draw a new card?"; 
    } else if (sum === 21) {
        message = "You've got Blackjack."; 
        hasBlackJack = true; 
    } else {
        message = "You're out of the game";
        isAlive = false; 
    }

    messageEl.textContent = message; 

}
