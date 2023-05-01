let arr = [1, 3, 5, 7, 8, 9];
let arr2 = [2, 3, 4, 5, 7, 8, 9, 11];
function intersection(arr, arr2) {
    let insArr = [];
    let i = 0;
    let j = 0;
    while (arr.length > i && arr2.length > j) {
        if (arr[i] < arr2[j]) i++
        else if (arr[i] > arr2[j]) j++
        else {
            insArr.push(arr[i]);
            i++;
            j++;
        }
    }
    console.log(insArr);
}

intersection(arr, arr2)