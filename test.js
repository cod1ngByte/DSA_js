function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let minEle = arr[i];
        while (j >= 0 && arr[j] > minEle) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = minEle;
    }
}

const arr = [20, 8, -1, 10, 50, 100, 0];

console.log("before ", arr);
insertionSort(arr);

console.log("after", arr);
