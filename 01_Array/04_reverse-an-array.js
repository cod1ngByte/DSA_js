//reverse an array --> don't create a new array and don't print array in reverse order

const swap = function (arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
};

var reverseAnArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

reverseAnArray(arr);

console.log(arr);
