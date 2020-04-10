const multiply = (a, b, c) => a * b * c;

// here the first parameter is fixed to be 5
const partialMultiplyBy5 = multiply.bind(null, 5);

console.log(partialMultiplyBy5(2, 3)); // 5 * 2 * 3 = 30