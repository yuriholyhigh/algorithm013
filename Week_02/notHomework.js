// 非作业, 扩展练习

// 145. 二叉树的后序遍历
// 递归
var postorderTraversal1 = function(root) {
  const res = []
  function recursion(node) {
    if (node) {
      recursion(node.left)
      recursion(node.right)
      res.push(node.val)
    }
  }
  recursion(root)
  return res
};
// 迭代
var postorderTraversal = function(root) {
  const res = []
  const stack = []
  root && stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.unshift(node.val)
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  return res
};

// 102. 二叉树的层序遍历
// 迭代1, 逐层遍历 O(n)
var levelOrder1 = function(root) {
  const res = []
  let stack = []
  root && stack.push(root)
  while (stack.length) {
    let currentRes = []
    let currentStack = []
    for (let node of stack) {
      currentRes.push(node.val)
      node.left && currentStack.push(node.left)
      node.right && currentStack.push(node.right)
    }
    res.push(currentRes)
    stack = currentStack
  }
  return res
};
// 迭代2, 双端队列 O(n)
var levelOrder2 = function(root) {
  const res = []
  const stack = []
  root && stack.push(root)
  while (stack.length) {
    const levelCount = stack.length
    const levelRes = []
    for (let i = 0; i < levelCount; i++) {
      const node = stack.shift()
      levelRes.push(node.val)
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res.push(levelRes)
  }
  return res
};
// 深度优先, 使用递归前序遍历 O(n)
var levelOrder3 = function(root) {
  let res = []
  function recursion(level, node) {
    if (node) {
      if (res.length < level) {
        res.push([])
      }
      res[level - 1].push(node.val)
      recursion(level + 1, node.left)
      recursion(level + 1, node.right)
    }
  }
  recursion(1, root)
  return res
};

// 263. 丑数
// 第一次: 递归
var isUgly = function(num) {
  if (num < 1) { return false }
  if (num === 1) { return true }
  const map = {
    2: 2,
    3: 3,
    5: 5,
  }
  function recursion(number) {
    if (map[number]) { return true }
    for (let key in map) {
      if (number % map[key] === 0) {
        return recursion(number / map[key])
      }
    }
    return false
  }
  return recursion(num)
};
// 第二次: 迭代
var isUgly1 = function(num) {
  if (num <= 0) {
    return false
  }
  const map = [2, 3, 5]
  for (let item of map) {
    while (num % item === 0) {
      num = num / item
    }
  }
  return num === 1
};

// 264. 丑数 II
// 第一次
// TODO: 未完成
var nthUglyNumber = function(n) {
  const factor = [2, 3, 5]
  const cache = {}

  function isUglyNum(num) {
    for (let item of factor) {
      while (num % item === 0) {
        num = num / item
        if (typeof cache[num] === 'boolean') { return cache[num] }
      }
    }
    return num === 1
  }
  let i = 1
  let j = 0
  while (j < n) {
    if (isUglyNum(i)) {
      cache[i] = true
      j++
    } else {
      cache[i] = false
    }
    i++
  }
  return i - 1
};


















































