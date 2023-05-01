function diamond(n) {
    let mid = Math.ceil(n / 2);
    let kod = '';
    let duplicat = '';
    for (let i = 1; i <= mid; i++) {
        for (let j = 1; j <= n; j++) {
            kod += (j + i > mid) && (n - mid >= j - i) ? '*' : ' ';
            duplicat += (j + i > mid) && (n - mid >= j - i) && (i==1 || i!==mid) ? '*' : ' ';
        }
        if(mid>i) {
            kod += '\n';
            duplicat += '\n';
        }
    }
    duplicat = duplicat.split('').reverse().join('');
    console.log(kod+duplicat);
}
diamond(13);