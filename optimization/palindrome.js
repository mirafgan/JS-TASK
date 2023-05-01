
let str = 'hanna'
function palindrome(str) {
    let part1 = '';
    let part2 = '';
    let mid = Math.floor(str.length / 2);
    for (let i = 0; i < str.length; i++) {
        if (part1[i] !== part2[i]) return false;
        if (i == mid && str.length % 2) continue
        if (i < mid) part1 += str[i];
        else part2 = str[i] + part2;
    }
    return part1 == part2 ?  true : false;
}
palindrome(str)