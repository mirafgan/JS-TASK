
let str = 'hannah'
function palindrome(str) {
    let mid = Math.floor(str.length / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[str.length - 1 - i]) return false;
    }
    return true;
}
palindrome(str)