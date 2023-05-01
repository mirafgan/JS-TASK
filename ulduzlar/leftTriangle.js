function leftTriangle(n){
    let kod = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            kod+= i < j ? ' ' : '*';
        }
        kod+= '\n'
    }
    console.log(kod)
}
leftTriangle(5)