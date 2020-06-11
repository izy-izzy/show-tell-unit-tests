function makeMeANumber(x) {
    if (x > 20) { 
        return x * 2;
    } else {
        return typeof x === 'number' && x !== 0 && !isNaN(x) ? (20 / x) : 0;
    } 
}

module.exports = makeMeANumber;