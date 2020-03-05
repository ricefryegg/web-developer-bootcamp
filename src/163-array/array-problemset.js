var printReverse = (arr) => {
    for (let i = arr.length - 1; i >= 0;  i--){
        console.log(arr[i]);
        
    }
}

var isUniform = (arr) => {
    e1 = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== e1){
            return false;
        }
    }

    return true;
}

var sumArray = (arr) => {
    if (arr.length < 1){ return 0; }

    sum = 0;
    arr.forEach(e => { sum += e; });

    return sum;
}

var max = (arr) => {
    max_e = arr[0];

    for (let i = 1; i < arr.length; i++){
        max_e = max_e > arr[i] ? max_e : arr[i];
    }

    return max_e
}