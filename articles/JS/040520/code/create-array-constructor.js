/* --------------------------------------
  1- using the Array constructor
  This is a little bit confusing syntax
  but on the other hand, it's dynamic
-------------------------------------- */
// example 1:
let arr1 = new Array();
console.log(arr1);  // []

//===========================

/* 
  example 2:
  in this example, the first parameter passed to the Array function
  is the length of the array.
  So arr2 is array with length of 10 elements, 
    and each element value is undefined
*/
let arr2 = new Array(10);
console.log(arr2); // [ <10 empty items> ]
console.log(arr2[1]);

//===========================

/*
  in this example, the parameters considered the elements in the array
  so arr3 length will be three and initialized with the passed parameters
*/

let arr3 = new Array(1, 2, 3);
console.log(arr3.length); // length is 3
console.log(arr3); // [ 1, 2, 3 ]
console.log(arr3[2]); // 3


