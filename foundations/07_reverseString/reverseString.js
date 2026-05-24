const reverseString = function (str) {
    result = ""
    for (let i = 0; i < str.length; i++) {
        result = str.charAt(i) + result
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
