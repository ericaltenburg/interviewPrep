
let memo = new Array(7).fill(-1);

const fibMemo = (n) => {
    if (n <= 1) {
        return n;
    } else if (memo[n] === -1) {
        memo[n] = fibMemo(n-1)+fibMemo(n-2);
    }
    return memo[n];
}

console.log(fibMemo(6));