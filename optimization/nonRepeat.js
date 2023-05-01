function nonrepeat(str) {
    for (let i = 0; i < str.length; i++) {
        let status = false;
        for (let j = 0; j < str.length; j++) {
            if(str[i] == str[j] & i !== j) {
                status = true;
                break
            }
        }
        if(!status) return str[i];
    }
    return 'Təkrarlanan yoxdur'
}
let b = nonrepeat('sdfsadf')
console.log(b);