function allLongestStrings(inputArray) {
  let longestStrings = [];
  let longestLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let curr = inputArray[i]
    if (curr.length > longestLength) {
      longestStrings = [curr];
      longestLength = curr.length;
    } else if (curr.length == longestLength) {
      longestStrings.push(curr)
    }  
  }
  return longestStrings;
}

let arr = ["aba",
  "aa",
  "ad",
  "vcd",
  "aba"];

console.log(allLongestStrings(arr));