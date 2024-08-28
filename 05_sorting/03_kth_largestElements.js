function kthLargestElement(arr, k) {
     const n = arr.length;
     const m = k;
     for (let i = 0; i < k; i++) {
          for (let j = 0; j < n - i - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
               }
          }
     }
}

const arr = [4, 1, 16, 3, 2, 9];
const k = 2;
kthLargestElement(arr, k);
console.log(arr);
console.log(arr[arr.length - k]);
