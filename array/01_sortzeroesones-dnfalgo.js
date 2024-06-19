//sort zero's and one's [DNF algo]

const swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const sortzeroandone = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    // arr = [1,1,0,0,1,0]
    //        i          j
    // everythig left to i is zero and everything  right to j is one
    while (i <= j) {
        if (arr[i] == 1) {
            swap(arr, i, j);
            j--;
            //after swapping value at i can be 0/1 but value at j will be 1 only so j--;
        } else {
            //arr[i] == 0
            i++;
        }
    }
};

let arr = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1];
sortzeroandone(arr);
console.log(arr);
