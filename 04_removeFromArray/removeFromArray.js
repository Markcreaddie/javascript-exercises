const removeFromArray = function(myArray,...args) {
    newList = []
    items: for (item of myArray){
        for (obj of [...args]){
            if (item===obj){
                continue items
            }
        } newList.push(item)
    }return newList
    };

// Do not edit below this line
module.exports = removeFromArray;
