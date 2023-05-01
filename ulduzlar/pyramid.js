function pyramid(n) {
    let mid = Math.ceil(n / 2);
    let kod = '';
    for (let i = 1; i <= mid; i++) {
        for (let j = 1; j <= n; j++) {
            kod += (j + i > mid) && (n - mid >= j - i) ? '*' : ' '
        }
        kod += '\n'
    }
    console.log(kod);

}
pyramid(9)