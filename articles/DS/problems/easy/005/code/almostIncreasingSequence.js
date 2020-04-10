function almostIncreasingSequence(seq) {
  let count = 0;
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      count++;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;
}

let seq = [1, 3, 2]; // true
console.log(almostIncreasingSequence(seq));

seq = [1, 3, 2, 1]; // false
console.log(almostIncreasingSequence(seq));