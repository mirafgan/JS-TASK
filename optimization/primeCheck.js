function primeCheck(n) {
    let range = Math.floor(n / 2);
    for (let i = 2; i <= range; i++) {
        if (n % i == 0) return `prime deyil`;
        else return `primedır`
    }
}
let b = primeCheck(13);
console.log(b);