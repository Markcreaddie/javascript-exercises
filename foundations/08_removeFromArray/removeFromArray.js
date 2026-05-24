const removeFromArray = function (arr, ...args) {
    result = []
    for (item of arr) {
        if (args.includes(item)) {
            continue
        }
        result.push(item)
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
