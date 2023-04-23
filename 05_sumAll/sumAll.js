const sumAll = function(num1,num2) {
    if (num1<0 ||
        num2 <0 || 
        typeof(num1)!=='number'||
        typeof(num2)!=='number'){
        return "ERROR"
    }

    let start;
    let end;
    if (num1<num2){
        start = num1;
        end = num2;
    }else{
        start = num2;
        end = num1;
    }
    sum = 0;
    for (let i = start; i<=end; i++){
        sum+=i;
    }return sum
};

// Do not edit below this line
module.exports = sumAll;
