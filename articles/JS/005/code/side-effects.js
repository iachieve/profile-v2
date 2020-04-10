const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
};
mutateArray(array);
console.log(array); // [1, 2]