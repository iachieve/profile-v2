function checkPalindrome(inputString) {
  let right = 0;
  let left = inputString.length - 1;
  while (right < left) {
    if (inputString[left] != inputString[right]) {
      return false;
    }
    right++;
    left--;
  }
  return true;
}
console.log(checkPalindrome('aabaa'));