function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPalindrome(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

function checkPrimePalindrome(num) {
    if (isPrime(num)) {
        let palindrome = getPalindrome(num);
        return isPrime(palindrome) ? "Palindrome is also Prime" : "Palindrome is Not Prime";
    }
    return "Number is Not Prime";
}

console.log(checkPrimePalindrome(13));
console.log(checkPrimePalindrome(31));
console.log(checkPrimePalindrome(10));
