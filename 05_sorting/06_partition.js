function swap(arr, i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
}

function partition(arr, pivotIndex) {
     let pivotElem = arr[pivotIndex];
     let l = 0;
     let r = arr.length - 1;
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
}

const arr = [1, 6, 3, 8, 9, 2, 5];

const pivotIndex = 2;
partition(arr, pivotIndex);
console.log(arr);
