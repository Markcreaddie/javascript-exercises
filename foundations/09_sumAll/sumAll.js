const sumAll = function (a, b) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        !Number.isInteger(a) ||
        !Number.isInteger(a) ||
        a < 0 ||
        b < 0) {
        return "ERROR"
    }
    start = (a < b) ? a : b
    end = (a < b) ? b : a
    sum = 0
    for (i = start; i <= end; i++) {
        sum += i
    }
    return sum
}
    ;

// Do not edit below this line
module.exports = sumAll;
