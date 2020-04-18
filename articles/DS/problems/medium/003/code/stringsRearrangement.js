function stringsRearrangement(inputArray) {
  function differByOne(str1, str2) {
    let mismatches = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) mismatches++;
    }
    return mismatches == 1;
  }

  function getPermutations(arr) {
    const fullLength = arr.length;
    let sequence = [];
    let permutations = [];
    function permute(arr) {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        sequence.push(curr);
        if (sequence.length === fullLength) {
          permutations.push([...sequence]);
        } else {
          let remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
          permute(remaining);
        }
        sequence.pop();
      }
    }
    permute(arr);
    return permutations;
  }

  let sequences = getPermutations(inputArray);
  for (const seq of sequences) {
    let possible = true;
    for (let i = 1; i < seq.length; i++) {
      let thisOne = seq[i];
      let prev = seq[i - 1];
      if (!differByOne(thisOne, prev)) {
        possible = false;
        break;
      }
    }
    if (possible) return true;
  }
  return false;
}
// [...a.slice(0,i), ...a.slice(i+1)]
// a.slice(0, i).concat(a.slice(i+1))
let inputArray = ["aba", "bbb", "bab"];
console.log(stringsRearrangement(inputArray));

inputArray = ["ab", "bb", "aa"];
console.log(stringsRearrangement(inputArray));