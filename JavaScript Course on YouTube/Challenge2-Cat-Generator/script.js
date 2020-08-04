//Challenge 2: Cat Generator

function generateCat(){
    let image = document.createElement("img");
    let div = document.getElementById("flex-cat-gen");
    image.src = getCatImage();
    div.appendChild(image);
}

function getCatImage(){
    return "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
}

