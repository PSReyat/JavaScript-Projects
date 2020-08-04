//Challenge 3: Rock/Paper/Scissors

function rpsGame(yourChoice){
    let humanChoice, botChoice, results, message;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomBotChoice());

    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randomBotChoice(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(humanChoice, botChoice){
    let rpsDatabase = {
        "rock": {
            "rock": 0.5,
            "paper": 0,
            "scissors": 1
        },

        "paper": {
            "rock": 1,
            "paper": 0.5,
            "scissors": 0
        },

        "scissors": {
            "rock": 0,
            "paper": 1,
            "scissors": 0.5
        }
    };

    return rpsDatabase[humanChoice][botChoice];
}

function finalMessage(score){
    if(score === 0){
        return {"message": "You Lost...", "color": "red"};
    }else if(score === 1){
        return {"message": "You Won!", "color": "green"};
    }else{
        return {"message": "Draw", "color": "blue"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imgDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let replayDiv = document.createElement("button");

    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImageChoice] + "' id = 'human' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    botDiv.innerHTML = "<img src='" + imgDatabase[botImageChoice] + "' id = 'bot' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
    messageDiv.innerHTML = "<h1 class = 'first-header' id = 'final-message' style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; name = 'final-message'>" + finalMessage['message'] + "</h1>";

    replayDiv.innerHTML = "<button class= 'btn btn-default' id = 'reset-button' onclick = 'reset()'>Another match?</button>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

    document.getElementById("flex-box-reset-div").appendChild(replayDiv);

}

function reset(){
    let restoreRock, restorePaper, restoreScissors;

    document.getElementById("flex-box-rps-div").innerHTML = "";
    document.getElementById("flex-box-reset-div").innerHTML = "";

    restoreRockImage();
    restorePaperImage();
    restoreScissorsImage();
}

function restoreRockImage(){
    restoreRock = document.createElement("img");

    restoreRock.setAttribute("id", "rock");
    restoreRock.setAttribute("src", "C:\\Users\\Trigg\\Pictures\\rock.png");
    restoreRock.setAttribute('alt', '');
    restoreRock.setAttribute('height', '150px');
    restoreRock.setAttribute('width', '150px');
    restoreRock.setAttribute("onclick", "rpsGame(this)");

    document.getElementById("flex-box-rps-div").appendChild(restoreRock);
}

function restorePaperImage(){
    restorePaper = document.createElement("img");

    restorePaper.setAttribute("id", "paper");
    restorePaper.setAttribute("src", "C:\\Users\\Trigg\\Pictures\\paper.png");
    restorePaper.setAttribute('alt', '');
    restorePaper.setAttribute('height', '150px');
    restorePaper.setAttribute('width', '150px');
    restorePaper.setAttribute("onclick", "rpsGame(this)");

    document.getElementById("flex-box-rps-div").appendChild(restorePaper);
}

function restoreScissorsImage(){
    restoreScissors = document.createElement("img");

    restoreScissors.setAttribute("id", "scissors");
    restoreScissors.setAttribute("src", "C:\\Users\\Trigg\\Pictures\\scissors.png");
    restoreScissors.setAttribute('alt', '');
    restoreScissors.setAttribute('height', '150px');
    restoreScissors.setAttribute('width', '150px');
    restoreScissors.setAttribute("onclick", "rpsGame(this)");
    
    document.getElementById("flex-box-rps-div").appendChild(restoreScissors);
}