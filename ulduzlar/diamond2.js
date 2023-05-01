function rightTriangle(n) {
    let mid = Math.floor(n / 2);
    let space, ast;
    let diamond = '';
    for (let i = 1; i <= n; i++) {
        space = i <= mid ? mid - i : i - mid;
        ast = n - 2 * space;
        let kod = ''
        for (let j = 1; j <= space; j++) {
            kod += ' ';
        }
        for (let k = 1; k <= ast; k++) {
            kod += '*'
        }
        diamond += kod + '\n'
    }
    console.log(diamond);
}
rightTriangle(9);
