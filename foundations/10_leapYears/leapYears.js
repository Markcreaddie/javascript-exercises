const leapYears = function (year) {
    //if year is not divisible by 4, not a leap year
    if (year % 4 !== 0) {
        return false
    }
    //if year is divisible by 4 but not 100, is a leap year
    if (year % 100 !== 0) {
        return true
    }
    //if year is divisible by 4, 100 and 400, is a leap year
    if (year % 400 === 0) {
        return true
    } else {
        //divisible by 4 & 100 but not 400
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
