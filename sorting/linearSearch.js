function linearSearch(arr, n) {
    let not = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i;
        }
        else {
            not++
        }
    }
    if (not == arr.length - 1) return -1
}
linearSearch([1, 7, 9, 64, 24, 5, 6], 5)
