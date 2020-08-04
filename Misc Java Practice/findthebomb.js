function duckOrNo(sentence){
    sentence = sentence.toLowerCase();
    if(sentence.includes("bomb")){
        console.log("DUCK!!")
    }else{
        console.log("There is no bomb, relax.");
    }
}

duckOrNo("dhcdkcuwd BomB");