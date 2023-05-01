// function pyramidReverse(n) {
//     let mid = Math.ceil(n / 2);
//     let kod = '';
//     for (let i = 1; i <= mid; i++) {
//         for (let j = 1; j <= n; j++) {
//             kod += (j + i > mid) && (n - mid >= j - i) ? '*' : ' '
//         }
//         kod += '\n'
//     }
//     console.log(kod.split('').reverse().join(''));

// }
// rightTriangle(9)

function pyramidReverse(n) {
    let mid = Math.ceil(n / 2);
    let kod = '';
    for (let i = 1; i <= mid; i++) {
        for (let j = 1; j <= n; j++) {
            kod += (i + j <= n + 1) && i <= j ? "*" : ' '
        }
        kod += '\n'
    }
    console.log(kod);
}
pyramidReverse(9)    