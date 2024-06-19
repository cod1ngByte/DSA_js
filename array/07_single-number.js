// LC - 136
//every elements appears twice except for one element, find that single numbers

//using xor operator
//  0 ^ 0 = 0
//  x ^ 0 = x

var singleNumber = function (arr) {
    let result = 0;
    for (const val of arr) {
        result = result ^ val;
    }
    return result;
};

const arr = [4, 1, 2, 1, 3, 2, 3];
const number = singleNumber(arr);
console.log(number);
