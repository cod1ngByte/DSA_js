function swap(arr, i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
}

function partition(arr, pivotIndex, l, r) {
     let pivotElem = arr[pivotIndex];

     let m = l - 1;
     let i = l;
     //swap the pivot element with last element
     swap(arr, pivotIndex, r);

     while (i <= r - 1) {
          if (arr[i] < pivotElem) {
               m++;
               swap(arr, i, m);
          }
          i++;
     }
     //swap the pivot element and m;   left side < pivotElement <= right side
     m++;
     swap(arr, r, m);
     return m;
}

function getRandomPivot(l, r) {
     return Math.floor(Math.random() * (r - l) + l);
}

function helper(arr, l, r) {
     if (l >= r) return; //single element or no element
     const pivotIndex = getRandomPivot(l, r);
     let m = partition(arr, pivotIndex, l, r);
     helper(arr, l, m - 1);
     helper(arr, m + 1, r);
}

function quickSort(arr) {
     helper(arr, 0, arr.length - 1);
}

// const arr = [1, 6, 3, 8, 9, 2, 5];
// const arr = [1, 2, 3, 4, 5, 6];
const arr = [6, 5, 4, 3, 2, 1, 8, 9, -2, 0];
quickSort(arr);

console.log(arr);
