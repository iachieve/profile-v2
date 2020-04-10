let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2.push(55);
console.log(typeof arr1); // object
console.log(arr1); // => result: [ 1, 2, 3, 4, 5, 55 ] // pass by reference
console.log(arr2.toString()); // 1, 2, 3, 4, 5, 55 // toString is object function