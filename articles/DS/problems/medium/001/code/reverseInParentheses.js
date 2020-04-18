// solution one
function reverseInParentheses(str) {
  let stack = []; // f o o ( b a r ( b a z
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ')') {
      stack.push(str[i]);
      console.log('===outside===', stack.join(''))
    } else {
      let temp = '';
      let pop_char = stack.pop();
      while (pop_char != '(') {
        temp += pop_char;
        pop_char = stack.pop();
        console.log('===isdie===', stack.join(''))
      }
      temp = temp.split('');
      stack.push(...temp);
    }
  }
  return stack.join('');
}

let inputString = "foo(bar)baz(blim)";
console.log(reverseInParentheses(inputString) == "foobazrabblim") // "foo(bar)baz(blim)")