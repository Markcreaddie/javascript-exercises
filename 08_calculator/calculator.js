const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
return x-y
};

const sum = function(myArray) {
  let sum=0
	for (num of myArray){
    sum+=num
  }
  return sum
};

const multiply = function(myArray) {
let result=1
for (num of myArray){
  result *=num
}
return result
};

const power = function(x,y) {
	return x**y
};

const factorial = function(num) {
	if (num===0){
    return 1
  }else{
    let result=1
    for (i=1; i<=num; i++){
      result*=i
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
