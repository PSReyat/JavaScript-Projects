function toSeconds(hours, minutes){
    let hSeconds = hours * 3600;
    let mSeconds = minutes * 60;

    return hSeconds + mSeconds;
}

console.log(toSeconds(3, 40));