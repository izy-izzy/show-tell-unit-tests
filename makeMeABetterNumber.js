const makeMeANumber = require("./makeMeANumber");

function makeMeABetterNumber(x) {
    let outcome = 0;
    for (var i = 0; i < x; i++) {
        outcome = outcome + makeMeANumber(i);
    }
    return outcome;
}

module.exports = makeMeABetterNumber;