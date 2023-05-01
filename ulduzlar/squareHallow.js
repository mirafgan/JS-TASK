function squareHallow(n) {
    n = n - 1;
    let kod = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (j == 0 || i == n || j == n || i == 0) kod += '* ';
            else kod += '  ';
        }
        kod+= '\n';
    }
    console.log(kod);
}
squareHallow(5)