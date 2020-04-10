/* 
  Example 2
  At position 2 add two items
*/
let arr = ["first", "second", "third"];
let spliced = arr.splice(2, 2);
console.log("spliced: ", spliced);
// Splice returns the removed item
console.log("original: ", arr);
// Splice mutate the original array