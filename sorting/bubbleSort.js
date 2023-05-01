let arr = [1, 5, 8, 42, 2, 3, 4, 8, 99, 45, 66, 34]
function bubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] && i < arr.length - 1) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
        else {
            count++;
        }
    }
    console.log(arr);
    if (count !== arr.length) bubbleSort(arr);
    else return arr;
}
bubbleSort(arr)