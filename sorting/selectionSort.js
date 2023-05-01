
// function selectionSort(arr, start = 0) {
//     let current = arr[start];
//     let minimum = arr[start];
//     let minPos = 0;
//     if (start == arr.length - 1) return arr;
//     for (let i = start + 1; i < arr.length; i++) {
//         if (minimum > arr[i]) {
//             minimum = arr[i];
//             minPos = i;
//         }
//     }
//     if (current > minimum) {
//         arr[minPos] = current;
//         arr[start] = minimum;
//         start += 1;
//         selectionSort(arr, start)
//     }
//     console.log(arr);
// }

let arr = [-1, -2, -5]
let x = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) x = arr[i]
    // for (let j = i; j < arr.length; j++) {
    //     if (arr[i] > arr[j]) {
    //         temp = arr[j]
    //         arr[j] = arr[i];
    //         arr[i] = temp;
    //     }
    // }
}
console.log(x)



// selectionSort(arr)