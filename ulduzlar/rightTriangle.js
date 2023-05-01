function rightTriangle(n){
    let kod = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            kod+= (j + i) > n ? '*' : ' '
        }
        kod+= '\n'
    }
    console.log(kod);
    
}
rightTriangle(5)