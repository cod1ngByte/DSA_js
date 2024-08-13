//LC - 448
//array length = n
//range = [1,n]
//every element present in the array to be in the range of the arary which is [1,n]
//return the array containing all the missing numbers from the range [1,n]

// using mapping

const findAllMissingNumbers = function (arr) {
    const objMap = {};
    const missingEleArray = [];

    for (const value of arr) {
        if (objMap[value]) {
            //if key :value is present don't do anything else add key and value and value should be the element itself
            // objMap[value] = objMap[value];
        } else {
            //value in object is element of array itself
            objMap[value] = value;
        }
    }

    // console.log(objMap);
    //since range is from [1,n] and n is no of element in an array
    for (let i = 1; i <= arr.length; i++) {
        if (!objMap[i]) {
            missingEleArray.push(i);
        }
    }
    // console.log(missingEleArray);
    return missingEleArray;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];

const arrWithMissingEle = findAllMissingNumbers(arr);
console.log(arrWithMissingEle);
