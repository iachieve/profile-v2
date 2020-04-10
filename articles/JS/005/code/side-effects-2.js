const array = [1, 2, 3];
function functionWithNoSideEffect(array) {
  const newArray = [].concat(array);
  newArray.pop();
  return newArray;
};
let result = functionWithNoSideEffect(array);
console.log(result);  // [1, 2]
console.log(array); // [1, 2, 3]