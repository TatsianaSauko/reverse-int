module.exports = function reverse (n) {
    let nReverse = n > 0 ? n : Math.abs(n);
    return Number(nReverse.toString().split('').reverse().join(''));
}
