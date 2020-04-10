/* 
  Example 4
  Passing negative values to slice method
  At position 2 select two items
*/
let arr = ["first", "second", "third", "fourth", "fifth"];
let slice = arr.slice(1, 3);
console.log(slice); // [ 'second', 'third' ]

slice = arr.slice(-4, -2);
// first parameter: -4 => "second"
// second parameter: -2 => "fourth"
// the result will not include the "fourth" element
console.log(slice);