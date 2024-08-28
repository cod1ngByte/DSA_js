function bubbleSort(arr) {
     //this function compare adjacent element and immediate swaps with adjacent elements

     for (let i = 0; i < arr.length - 1; i++) {
          //we just need n-1 iteration becoz after that we will be left with smallest element
          let isSwapped = false;
          for (let j = 0; j < arr.length - i - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                    //swap
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
               }
          }
          if (isSwapped === false) break; // already sorted in increasing order no need to check
     }
}

const arr = [5, 4, 3, 2, 1];
// const arr = [1, 2, 3, 4, 5];
bubbleSort(arr);
console.log(arr);

//bubble sort
// --> worst case time - n^2 , swap - n^2, comparison - n^2
// --> best case time - n, swap - 0, comparsion - n
// --> inplace - yes
// --> stable - yes, adjacent element are swapped
