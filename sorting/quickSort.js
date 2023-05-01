let arr = [6, 55, 8, 42, 3, 4, 7, 45, 66, 2, 34, 1];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };
    let mid = Math.floor(arr.length / 2)
    let pivot = arr[mid];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == mid) continue
        if (arr[i] < pivot) left[left.length] = arr[i]
        else right[right.length] = arr[i]
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
let sortArr = quickSort(arr);
console.log(sortArr);

