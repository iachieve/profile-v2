// Type Coercion Example
let x = "1";
let y = 1;

console.log(typeof(x + y)); // 11
console.log(typeof (x + y)); // String

/* 
  what happened is JavaScript engine 
  implicitly did a type coercion and 
  converted the y value from type Numeric
  to type String, then
  concatenated the two variables 
  and returned a string.
*/

// Another example on Type Coercion

console.log(typeof String(123))  // explicit
console.log(typeof (123 + ''))    // implicit