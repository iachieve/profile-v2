// brute force
function makeArrayConsecutive2(statues) {
  let sorted = statues.sort((a, b) => a - b);
  let diff = 0;
  for (let i = 1; i <= sorted.length; i++) {
    let currDiff = sorted[i] - sorted[i - 1];
    if (currDiff > 1) {
      console.log('currDiff', currDiff)
      diff += ((sorted[i] - 1) - (sorted[i - 1]))
      console.log('diff', diff)
    }
  }
  return diff;
}