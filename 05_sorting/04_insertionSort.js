function insertionSort(arr) {
     // i -> [1,n-1]
     for (let i = 1; i < arr.length; i++) {
          let currEle = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > currEle) {
               arr[j + 1] = arr[j]; // shifting the element to right index
               j--;
          }
          arr[j + 1] = currEle;
     }
}

const arr = [7, 1, 9, 3, 6, 15, 2];
insertionSort(arr);
console.log(arr);

// tc - worst case - n^2
// best case - n
// inplace - yes
// stable - yes
//comparison and shifting, no swapping op
