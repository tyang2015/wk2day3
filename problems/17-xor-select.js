/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callbacks as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(arr, cb1, cb2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i ++) {
    let res1 = cb1(arr[i]);
    let res2 = cb2(arr[i]);
    if ((res1 || res2) && !(res1 && res2))
    {
      newArr.push(arr[i])
    }
  }
  return newArr;
};

// let isEven = function(n) {
//   return n % 2 === 0;
// };

// let isPositive = function(n) {
//   return n > 0;
// };

// console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// // [ -2, 1, 3 ]


// let longString = function(s) {
//   return s.length > 4;
// };

// let startsA = function(s) {
//   return s[0] === "a";
// };

// console.log(
//   xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
// );
// // [ 'art', 'app', 'buttery' ]




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
