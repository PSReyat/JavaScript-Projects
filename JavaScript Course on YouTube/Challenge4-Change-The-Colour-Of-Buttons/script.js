//Challenge 4: Change the Colour of Buttons

let allButtons = document.getElementsByTagName("button");

let copyAllButtons = [];

for(let i = 0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColourChange(buttonObject){
    if(buttonObject.value === "red"){
        buttonsRed();
    }else if(buttonObject.value === "green"){
        buttonsGreen();
    }else if(buttonObject.value === "yellow"){
        buttonsYellow();
    }else if(buttonObject.value === "blue"){
        buttonsBlue();
    }else if(buttonObject.value === "random"){
        randomColours();
    }else if(buttonObject.value === "reset"){
        buttonReset();
    }
}

function buttonsRed(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function buttonsGreen(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function buttonsYellow(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-warning");
    }
}

function buttonsBlue(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-primary");
    }
}

function buttonReset(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColours(number){
    let choices = ["btn-primary", "btn-success", "btn-warning", "btn-danger"];
    for(let i = 0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}
