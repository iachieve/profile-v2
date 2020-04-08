/* 
  Example 1
  At position 2 do the following: 
    1- add two new items
    2- and remove 1 item:
*/
let arr = ["first", "second", "third"];
let spliced = arr.splice(2, 1, "item 1", "item 2");
console.log("spliced: ", spliced);
// Splice returns the removed item
console.log("original: ", arr);
// Splice mutate the original array