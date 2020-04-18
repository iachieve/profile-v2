function areSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  let diff = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      diff.push(i);
      if (diff.length > 2) return false;
      if (diff.length === 2) {
        if (arr1[diff[0]] !== arr2[diff[1]] || arr1[diff[1]] !== arr2[diff[0]]) {
          return false;
        }
      }
    }
  }
  return diff.length === 0 || diff.length === 2;
}

let a = [2, 3, 1];
let b = [1, 3, 2];
console.log(areSimilar(a, b));
