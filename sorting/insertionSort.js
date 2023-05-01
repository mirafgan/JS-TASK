let arr = [6, 3, 2, 1, 5, 4];
function insertionSort(arr, start = 1) {
    let current = arr[start];
    if (start == arr.length) return arr;

    for (let i = start - 1; i >= 0; i--) {
        if (current < arr[i]) {
            temp = arr[i];
            arr[i] = current;
            arr[i + 1] = temp;
        }
        console.log(arr);
    }
    start += 1;
    insertionSort(arr, start);
}

insertionSort(arr)