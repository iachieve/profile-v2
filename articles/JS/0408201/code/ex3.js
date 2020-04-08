/* 
  Example 3
  At position 2 select two items
*/
let arr = ["first", "second", "third", "fourth", "fifth"];
let slice = arr.slice(1, 3);
// first parameter: 1 => arr[1] => "second"
// second parameter: 3 => arr[3] => "fourth"
// the result will not include the arr[3] / "fourth"
console.log(slice); // [ 'second', 'third' ]