const getTheTitles = function(myArray) {
    let titles =[];
    for (myObject of myArray){
        titles.push(Object.values(myObject)[0]);
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
