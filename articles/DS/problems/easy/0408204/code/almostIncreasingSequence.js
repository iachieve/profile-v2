function almostIncreasingSequence(seq) {

  function isSequence(sequence) {
    for (let j = 0; j < sequence.length - 1; j++) {
      if (sequence[j] >= sequence[j + 1]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < sequence.length; i++) {
    var sliceCopy = sequence.slice(0);

    sliceCopy.splice(i, 1);
    if (isSequence(sliceCopy)) {
      return true;
    }
  }
  return false;

}
// let sequence = [1, 3, 2];
// console.log(almostIncreasingSequence(sequence));

sequence = [1, 3, 2, 1]; // false
console.log(almostIncreasingSequence(sequence));