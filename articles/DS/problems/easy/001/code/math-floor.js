
// Math.floor general examples
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6

// Math.ceil
// Century From Year Example
let year = 2005;
let century = Math.floor((year - 1)/100) + 1;
console.log(century);

// another example
year = 1700;
century = Math.floor((year - 1) / 100) + 1;
console.log(century);