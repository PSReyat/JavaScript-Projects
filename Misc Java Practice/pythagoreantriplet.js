let array = [13, 5, 12];

function isTriplet(arr){

    arr.sort(function(a, b){
        return a - b;
    });

    let firstTwo = (arr[0] * arr[0]) + (arr[1] * arr[1]);
    let last = arr[2] * arr[2];

    if(firstTwo == last){
        return true;
    }

    return false;
}

console.log(isTriplet(array));