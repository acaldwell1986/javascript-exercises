const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (let element of array) {
    sum += element;
  }
  return sum;
};


const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
  const num = a;
	for (let i = 0; i < b; i++) {
    a *= num;
  }
  return a;
};

//10

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      console.log(num = num * i);
    }
  }return num;
}


//Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
