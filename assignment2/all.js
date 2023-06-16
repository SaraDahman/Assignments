const all = (arr, cb) => {
    let result = true;

    for(let i = 0; i < arr.length; i++){
        result = result && cb(arr[i]);
    }

    return result;
}

var allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7;
});

console.log(allAreLessThanSeven); // prints false