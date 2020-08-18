// 236. 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return (left && right) ? root : left || right
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 105. 从前序与中序遍历序列构造二叉树
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  const root = new TreeNode(preorder[0])
  const index = inorder.findIndex(val => val === preorder[0])
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))

  return root
};

// 77. 组合
// 回溯
var combine = function(n, k) {
  const res = []
  function recursion(start, list) {
    if (list.length === k) {
      res.push(list.slice(0))
      return
    }
    for (let i = start; i <= n; i++) {
      list.push(i)
      recursion(i + 1, list)
      list.pop()
    }
  }
  recursion(1, [])
  return res
};

// 46. 全排列
// 回溯
var permute = function(nums) {
  const res = []
  const length = nums.length
  function recursion(list, usedMap) {
    if (list.length === length) {
      res.push(list.slice(0))
      return
    }
    for (let i = 0; i < length; i++) {
      if (usedMap[i] !== true) {
        list.push(nums[i])
        usedMap[i] = true
        recursion(list, usedMap)
        list.pop()
        usedMap[i] = false
      }
    }
  }
  recursion([], {})
  return res
};

// 47. 全排列 II
// 第一次, 利用Set结构
var permuteUnique1 = function(nums) {
  const res = new Set()
  const length = nums.length
  function recursion(list, usedMap) {
    if (list.length === length) {
      res.add(list.join(','))
      return
    }
    for (let i = 0; i < length; i++) {
      if (usedMap[i] !== true) {
        usedMap[i] = true
        list.push(nums[i])
        recursion(list, usedMap)
        list.pop()
        usedMap[i] = false
      }
    }
  }
  recursion([], {})
  return [...res].map(str => str.split(',').map(val => +val))
};
// 第二次, 每一层使用map避免重复运算
var permuteUnique = function(nums) {
  const res = []
  const length = nums.length
  function recursion(list ,usedMap) {
    const valueUsedCache = {}
    if (list.length === length) {
      res.push(list.slice(0))
      return
    }
    for (let i = 0; i < length; i++) {
      if (usedMap[i] || valueUsedCache[nums[i]]) {
        continue
      }
      list.push(nums[i])
      usedMap[i] = true
      recursion(list, usedMap)
      list.pop()
      usedMap[i] = false
      valueUsedCache[nums[i]] = true
    }
  }
  recursion([], {})
  return res
};

