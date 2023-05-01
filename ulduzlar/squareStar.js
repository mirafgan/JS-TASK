function squareStar(n) {
    let kod = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            kod += '*' 
        }
        kod+= '\n'
    }
    console.log(kod)
}
squareStar(5);
