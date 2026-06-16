const findTheOldest = function (objArray) {
    oldestPerson = objArray.reduce((oldest, person) => {
        if (oldest == "") {
            oldest = person
        }
        let oldestAge = "yearOfDeath" in oldest ? (oldest.yearOfDeath - oldest.yearOfBirth) : new Date().getFullYear() - oldest.yearOfBirth
        let personAge = "yearOfDeath" in person ? (person.yearOfDeath - person.yearOfBirth) : new Date().getFullYear() - person.yearOfBirth

        return personAge > oldestAge ? person : oldest
    }, "")
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
