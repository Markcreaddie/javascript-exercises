const findTheOldest = function(people) {
    const currentYear =new Date().getFullYear()
    return people.sort((a,b)=>{  
        a.yearOfDeath?
            oldest = a.yearOfDeath-a.yearOfBirth:
            oldest =currentYear-a.yearOfBirth;
        b.yearOfDeath?
            next = b.yearOfDeath-b.yearOfBirth:
            next = currentYear - b.yearOfBirth;
        return oldest>next?-1:1;
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
