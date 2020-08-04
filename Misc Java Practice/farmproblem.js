const chickenLegs = 2;
const cowLegs = 4;
const pigLegs = 4;

function totalAmountOfLegs(chickens, cows, pigs){
    return chickens * chickenLegs + cows * cowLegs + pigs * pigLegs;
}

console.log(totalAmountOfLegs(2, 3, 5));