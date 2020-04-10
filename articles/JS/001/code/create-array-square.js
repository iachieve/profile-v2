/* --------------------------------------
  1- using the square parameter syntax
-------------------------------------- */
// example 1:
let arr1 = [1, 2, 3];
console.log(`length is ${arr1.length}, and 1st ele[0] = ${arr1[0]}`);
// the previous line will print the following
// length is 3, and 1st ele[0] = 1

// example 2:
arr1[1000] = "whatever";
console.log(`length is ${arr1.length}, and 1st ele[0] = ${arr1[0]}`);
// the previous line will print the following
// length is 1001, and 1st ele[0] = 1