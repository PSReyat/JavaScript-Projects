//Challenge 1: Your age in days.

function getAgeInDays(years){
    let age;
    let ageInDays;
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "ageInDays");

    if(document.getElementById("ageInDays") != null){

        reset();
        let error = document.createTextNode("Reset first!");
        h1.appendChild(error);
        document.getElementById("flex-box-result").appendChild(h1);

    }else{

        age = prompt("What is your age in years?");
        ageInDays = age * 365;
        let answer = document.createTextNode("You are " + ageInDays + " days old.");
        h1.appendChild(answer);
        document.getElementById("flex-box-result").appendChild(h1);
        console.log(ageInDays);

    }
}

function reset(){
    if(document.getElementById("ageInDays") != null){
        document.getElementById("ageInDays").remove();
    }
}