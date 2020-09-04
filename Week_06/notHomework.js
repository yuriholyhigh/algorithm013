// 每日一题: 257. 二叉树的所有路径
var binaryTreePaths1 = function(root) {
  if (!root) { return [] }
  const res = []
  const stack = []
  function recursion(node) {
    stack.push(node.val)
    if (!node.left && !node.right) {
      res.push(stack.join('->'))
      return
    }
    if (node.left) {
      recursion(node.left)
      stack.pop()
    }
    if (node.right) {
      recursion(node.right)
      stack.pop()
    }
  }
  recursion(root)
  return res
};
// 直接使用字符串, 可省略回溯
var binaryTreePaths = function(root) {
  const res = []
  if (!root) { return res }
  function recursion(node, pathStr) {
    if (!node.left && !node.right) {
      return res.push(pathStr + node.val)
    }
    node.left && recursion(node.left, pathStr + node.val + '->')
    node.right && recursion(node.right, pathStr + node.val + '->')
  }
  recursion(root, '')
  return res
};
