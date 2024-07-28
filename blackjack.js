let player = {
    name : "Himel",
    chips : 100
}
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.querySelector("#sem-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNum =  Math.floor(Math.random()*13) + 1
    if(randomNum > 10){
        return 10
    } else if(randomNum ===1){
        return 11
    } else {
        return randomNum
    }
}

function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
   
    cardsEl.textContent = "CARDS: "
    for(let i=0 ; i < cards.length ; i++){
        cardsEl.textContent +=   cards[i] + " "
        cardsEl.textcontent += cards[i] + " " 
    }
    
    sumEl.textContent = "Sum:" + sum
    if(sum<=20){
        message = "Do you want to draw a card"
    }
    else if(sum === 21){
        message = "You got a blackjack!!"
        hasBlackjack = true
    }
    else{
        message = "You lost"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
