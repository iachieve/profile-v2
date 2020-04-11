var preorderTraversal = function (root) {
  if (root === null) return [];
  let stack = [root], result = [];
  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
};