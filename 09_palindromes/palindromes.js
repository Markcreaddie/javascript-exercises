const palindromes = function (str) {
    cleanStr=str.replace(/[^a-zA-Z]/g, "").toLowerCase()
    chars= cleanStr.split("")
    reverseStr=chars.reverse().join("")
    return cleanStr===reverseStr
};

// Do not edit below this line
module.exports = palindromes;
