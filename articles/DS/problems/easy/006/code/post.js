
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [], stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    result.unshift(curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return result
}