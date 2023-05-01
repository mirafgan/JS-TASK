let arr = [1, 3, 4, 5, 66, 77, 88, 99, 110]

function binarySearch(arr, n, min = 0, max = arr.length - 1) {
    let mid = Math.round((min + max) / 2);
    if (min > max) return -1;
    if (arr[mid] == n) return mid;
    else if (arr[mid] < n) {
        min = mid + 1;
        binarySearch(arr, n, min, max)
    }
    else {
        max = mid - 1;
        binarySearch(arr, n, min, max)
    }
}
console.log(binarySearch(arr, 4));
