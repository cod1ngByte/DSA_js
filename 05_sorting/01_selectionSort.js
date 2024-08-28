function getMinIndex(arr, i) {
     //this function return the min index in the range of [i,n-1]
     let minIndex = i; // assume the min index of element as first index
     for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
               minIndex = j;
          }
     }
     return minIndex;
}

function selectionSort(arr) {
     // array of intereger
     //unsorted area [i,n-1]
     //before i, sorted area
     for (let i = 0; i < arr.length; i++) {
          //finding the minimum index element in unsorted area
          let minIndex = getMinIndex(arr, i);
          // swap the minindex element with ith element
          if (i !== minIndex) {
               let temp = arr[i];
               arr[i] = arr[minIndex];
               arr[minIndex] = temp;
          }
     }
}

// const arr = [15, -1, 3, 8, 2, 6];
// const arr = [1, 2, 3, 4, 5, 6];
const arr = [6, 5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);
