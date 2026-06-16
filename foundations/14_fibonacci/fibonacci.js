const fibonacci = function (num) {
    num = +num
    if (num == 0) return 0
    if (num < 0) return "OOPS"
    sequence = [1]
    for (i = 0; i < num; i++) {
        if (i == 0) {
            sequence.push(1)
        } else {
            sequence.push(sequence[i] + sequence[i - 1])
        }
    }
    return sequence[num - 1]


};

// Do not edit below this line
module.exports = fibonacci;
