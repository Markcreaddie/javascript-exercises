const fibonacci = function(num) {
    sequence=[0,1]
    num= +num
    if (num<0){
        return "OOPS"
    }else if(num<2){
        return sequence[num]
    }else{
        for (let i=2; i<=num;i++){
            sequence.push(sequence[i-1]+sequence[i-2])
        }
    }
    return sequence[num]
};

// Do not edit below this line
module.exports = fibonacci;
