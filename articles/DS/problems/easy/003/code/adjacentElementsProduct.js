function adjacentElementsProduct(inputArray) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(inputArray[i] * inputArray[i - 1], max);
  }
  return max;
}