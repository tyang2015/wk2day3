/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    let smallest = Infinity
    if (cb){
        for (let i=0 ; i<arr.length; i++){
            let ele = arr[i]
            // let cb = cb(ele)
            if(cb(ele)< smallest){
                smallest = cb(ele)
            }

        }
        return smallest


    }
    else {
        let smallestValue = arr.reduce( (accum, value) => {
            if (value < accum){
                return value
            }
            else {return accum}

        }, Infinity)
        return smallestValue
        
    }
};

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
