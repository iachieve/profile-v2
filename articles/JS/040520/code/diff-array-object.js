// clone in arrays
let arr1 = [1, 2, 3];
let arr2 = [].concat(arr1);
console.log(arr2); // [ 1, 2, 3 ]
arr2.push(4, 5, 6);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// clone in Objects is very different
let obj = { a: 'a', b: 'b', c: 'c' };

// option one
// this will not work because the two will point to the location in memory
let obj1 = obj;

// option 2: using Object.assign
let obj2 = Object.assign({}, { obj });
console.log(obj2); // { obj: { a: 'a', b: 'b', c: 'c'} }

// option 3: using the spread operator
let obj3 = { ...obj };
console.log(obj3);


// Actually the two previous options do shallow copy
// let's make a small test

let object = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let cloneOne = Object.assign({}, object);
let cloneTwo = { ...object };
object.c.deep = "whatever";
console.log(cloneOne); // { a: 'a', b: 'b', c: { deep: 'whatever' } }
console.log(object); // { a: 'a', b: 'b', c: { deep: 'whatever' } }

cloneTwo.c.deep = "welcome to JS";
console.log(cloneTwo); // { a: 'a', b: 'b', c: { deep: 'welcome to JS' } }
console.log(object); // { a: 'a', b: 'b', c: { deep: 'welcome to JS' } }

// again what Object.assign and the spread operator did
// is a shallow copy not a deep copy

// THE SOLUTION
// there's multiple ways to perform a deep copy
// I will mention one way here as it's out of the Arrays scope
let newObject = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let superClone = JSON.parse(JSON.stringify(object));
superClone.c.deep = "hello";
console.log(superClone); // { a: 'a', b: 'b', c: { deep: 'hello' } }
console.log(newObject); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }