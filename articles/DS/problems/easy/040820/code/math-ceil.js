// Math.ceil
// General Examples
console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

// Math.ceil
// Century From Year Example

let year = 2005;
let century = 2005/100
console.log(century); // 20.05
century = Math.ceil(century);
console.log(century) // 21

// another example
 year = 1700;
 century = 1700 / 100
console.log(century); // 17
century = Math.ceil(century);
console.log(century) // 17