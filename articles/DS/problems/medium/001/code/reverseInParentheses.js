// solution one
function reverseInParentheses(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ')') {
      stack.push(str[i]);
    } else {
      let temp = '';
      let pop_char = stack.pop();
      console.log('stack', stack)
      while (pop_char != '(') {
        temp += pop_char;
        pop_char = stack.pop();
      }
      temp = temp.split('');
      stack.push(...temp);
    }
  }
  return stack.join('');
}