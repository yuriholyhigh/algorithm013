// 242. 有效的字母异位词
var isAnagram = function(s, t) {
  const map = {}
  for (let str of s) {
    if (map[str]) {
      map[str]++
    } else {
      map[str] = 1
    }
  }

  for (let str of t) {
    if (map[str]) {
      map[str]--
    } else {
      return false
    }
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false
    }
  }
  return true
};

// 1. 两数之和
var twoSum = function(nums, target) {
  const map = {}
  let i = 0, length = nums.length
  while (i <length) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    } else {
      map[nums[i]] = i
    }
    i++
  }
  return []
};

// 589. N叉树的前序遍历
// 递归
var preorder1 = function(root) {
  if (!root) { return [] }
  const res = []
  function helper(node) {
    res.push(node.val)
    if (node.children) {
      for (let item of node.children) {
        helper(item)
      }
    }
  }
  helper(root)
  return res
};
// 迭代1
var preorder2 = function(root) {
  if (!root) { return [] }

  let res = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    if (node.children) {
      while (node.children.length)  {
        stack.push(node.children.pop())
      }
    }
  }
  return res
};
// 迭代2
var preorder = function(root) {
  if (!root) { return [] }

  let res = []
  let stack = [root]
  while (stack.length) {
    const node = stack.shift()
    res.push(node.val)
    if (node.children) {
      stack = node.children.concat(stack)
    }
  }
  return res
};

// 49. 字母异位词分组
var groupAnagrams = function(strs) {
  const aCode = 'a'.charCodeAt()
  const map = {}
  for (let word of strs) {
    let keys = new Array(26).fill(0)
    for (let str of word) {
      keys[str.charCodeAt() - aCode]++
    }
    const key = keys.join('')
    if (map[key]) {
      map[key].push(word)
    } else {
      map[key] = [word]
    }
  }
  return Object.values(map)
};

// 94. 二叉树的中序遍历
//递归
var inorderTraversal1 = function(root) {
  const res = []
  function recursion(node) {
    if (node) {
      recursion(node.left)
      res.push(node.val)
      recursion(node.right)
    }
  }
  recursion(root)
  return res
};
// 迭代
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
    res.push(node.val)
    root = node.right
  }
  return res
};

// 144. 二叉树的前序遍历
// 递归
var preorderTraversal1 = function(root) {
  const res = []
  function recursion(node) {
    if (node) {
      res.push(node.val)
      recursion(node.left)
      recursion(node.right)
    }
  }
  recursion(root)
  return res
};
// 迭代
var preorderTraversal = function(root) {
  const res = []
  const stack = []
  root && stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return res
};

// 429. N叉树的层序遍历
// 迭代, 逐层遍历 O(n)
var levelOrder11 = function(root) {
  const res = []
  let stack = []
  root && stack.push(root)
  while (stack.length) {
    const levelRes = []
    let levelStack = []
    for (let node of stack) {
      levelRes.push(node.val)
      if (node.children) {
        levelStack = levelStack.concat(node.children)
      }
    }
    res.push(levelRes)
    stack = levelStack
  }
  return res
};
// 迭代, 双端队列 O(n)
var levelOrder22 = function(root) {
  const res = []
  let stack = []
  root && stack.push(root)
  while (stack.length) {
    const levelCount = stack.length
    const levelRes = []
    for (let i = 0; i < levelCount; i++) {
      const node = stack.shift()
      levelRes.push(node.val)
      if (node.children) {
        stack = stack.concat(node.children)
      }
    }
    res.push(levelRes)
  }
  return res
};
// 深度优先 O(n)
var levelOrder = function(root) {
  const res = []
  if (!root) { return [] }
  function recursion(level, node) {
    if (res.length < level) {
      res.push([])
    }
    res[level - 1].push(node.val)
    if (node.children) {
      for (let item of node.children) {
        recursion(level + 1, item)
      }
    }
  }
  recursion(1, root)
  return res
};

// TODO: 264. 丑数 II (https://leetcode-cn.com/problems/ugly-number-ii/)
// TODO: 347. 前 K 个高频元素 (https://leetcode-cn.com/problems/top-k-frequent-elements/)
// 347. 前 K 个高频元素
// 第一次: 使用功能函数
var topKFrequent = function(nums, k) {
  const map = {}
  for (let val of nums) {
    if (map[val]) {
      map[val].count++
    } else {
      map[val] = {
        val,
        count: 1
      }
    }
  }
  return Object.values(map).sort((a, b) => b.count - a.count).slice(0, k).map(item => item.val)
};
























