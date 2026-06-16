const palindromes = function (word) {
    const validChars = "abcdefghijklmnopqrstuvwxyz1234567890"

    const wordChars = word
        .toLowerCase()
        .split('')
        .filter((char) => validChars.includes(char))
        .join('')


    const reverseWordChars = wordChars.split("").reverse().join("")

    return wordChars === reverseWordChars

};

// Do not edit below this line
module.exports = palindromes;
