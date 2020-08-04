//Challenge 5: Blackjack

let blackjackGame = {
    "you": {"scoreSpan": "#your-blackjack-result", "div": "#your-box", "score": 0},
    "dealer": {"scoreSpan": "#dealer-blackjack-result", "div": "#dealer-box", "score": 0},
    "cards": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    "cardsMap": {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 10,
        "Q": 10,
        "K": 10,
        "A": [1, 11]
    },
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "isStand": false,
    "turnOver": false
};

//Players
const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

//Sound effects
const hitSound = new Audio("C:\\Users\\Trigg\\Downloads\\blackjack_assets\\sounds\\swish.m4a");
const winSound = new Audio("C:\\Users\\Trigg\\Downloads\\blackjack_assets\\sounds\\cash.mp3");
const lossSound = new Audio("C:\\Users\\Trigg\\Downloads\\blackjack_assets\\sounds\\aww.mp3");

//Adding click functionality to buttons
document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);

//Hit button
function blackjackHit(){
    if(blackjackGame["isStand"] === false){
        let card = randomCard();
        showCard(YOU, card);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Dealer AI logic
async function dealerLogic(){

    blackjackGame["isStand"] = true;

    if(YOU["score"] <= 21){
        while(DEALER["score"] < 16 && blackjackGame["isStand"] === true){
            let card = randomCard();
            showCard(DEALER, card);
            updateScore(card, DEALER);
            showScore(DEALER);
            await sleep(1000);
        }

        if(DEALER["score"] > 15){
            blackjackGame["turnOver"] = true;
            showResult(computeWinner());
        }
    }else{
        blackjackGame["turnOver"] = true;
        showResult(computeWinner());
    }

    
}

//Deal button
function blackjackDeal(){
    if(blackjackGame["turnOver"] === true){

        blackjackGame["isStand"] = false;

        let yourImages = document.querySelector("#your-box").querySelectorAll("img");
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");

        for(let i = 0; i < yourImages.length; i++){
            yourImages[i].remove();
        }

        for(let j = 0; j < dealerImages.length; j++){
            dealerImages[j].remove();
        }

        let resetScores = 0;

        YOU["score"] = resetScores;
        document.querySelector(YOU["scoreSpan"]).textContent = 0;
        document.querySelector(YOU["scoreSpan"]).style.color = "white";

        DEALER["score"] = resetScores;
        document.querySelector(DEALER["scoreSpan"]).textContent = 0;
        document.querySelector(DEALER["scoreSpan"]).style.color = "white";

        document.querySelector("#blackjack-result").textContent = "Let's play!";
        document.querySelector("#blackjack-result").style.color = "black";
        
        blackjackGame["turnOver"] = false;
    }
}

//Make card appear on either the user's side or the computer's side.
function showCard(activePlayer, card){
    if(activePlayer["score"] < 21){
        let cardImage = document.createElement("img");
        cardImage.setAttribute("src", `C:/Users/Trigg/Downloads/blackjack_assets/images/${card}.png`);
        document.querySelector(activePlayer["div"]).appendChild(cardImage);
        hitSound.play();
    }
}

//Generates a random card
function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);

    return blackjackGame["cards"][randomIndex];
}

//Updates score for players as they draw a card
function updateScore(card, activePlayer){

    if(card === "A"){
        if(activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21){
            activePlayer["score"] += blackjackGame["cardsMap"][card][1];
        }else{
            activePlayer["score"] += blackjackGame["cardsMap"][card][0];
        }
    }else{
        activePlayer["score"] += blackjackGame["cardsMap"][card];
    }
}

//Updates score on the front end
function showScore(activePlayer){
    if(activePlayer["score"] <= 21){
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
    }else{
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST...";
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
    }
}

//A function to decide the winner
function computeWinner(){
    let winner;
    if(YOU["score"] <= 21){
        if(YOU["score"] > DEALER["score"] || (DEALER["score"] > 21)){
            winner = YOU;
            blackjackGame["wins"]++;
        }else if(YOU["score"] < DEALER["score"]){
            winner = DEALER;
            blackjackGame["losses"]++;
        }else if(YOU["score"] == DEALER["score"]){
            winner = null;
            blackjackGame["draws"]++;
        }
    }else if(YOU["score"] > 21){
        winner = DEALER;
        blackjackGame["losses"]++;
    }else if(YOU["score"] == DEALER["score"]){
        winner = null;
        blackjackGame["draws"]++;
    }

    return winner;
}

//Shows who won the exchange
function showResult(winner){
    let message, messageColour;

    if(blackjackGame["turnOver"] === true){
        if(winner === YOU){
            message = "You won!";
            messageColour = "green";
            document.querySelector("#wins").textContent = blackjackGame["wins"];
            winSound.play();
        }else if(winner === DEALER){
            message = "You lost...";
            messageColour = "red";
            document.querySelector("#losses").textContent = blackjackGame["losses"];
            lossSound.play();
        }else if(winner === null){
            document.querySelector("#draws").textContent = blackjackGame["draws"];
            message = "It's a draw.";
            messageColour = "black";
        }
    
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColour;
    }
}