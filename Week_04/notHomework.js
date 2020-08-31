// 每日一题: 109. 有序链表转换二叉搜索树
var sortedListToBST = function(head) {
  const list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  function recursion(list) {
    if (list.length === 0) {
      return null
    }
    const middle = Math.floor(list.length / 2)
    const root = new TreeNode(list[middle])
    root.left = recursion(list.slice(0, middle))
    root.right = recursion(list.slice(middle + 1))
    return root
  }
  return recursion(list)
};

// 每日一题: 459. 重复的子字符串
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s)
};

// 每日一题: 491. 递增子序列
var findSubsequences = function(nums) {
  const res = []
  const set = new Set()
  function recursion(i, list) {
    if (list.length > 1) {
      const val = list.slice(0)
      if (!set.has(val.join('-'))) {
        res.push(val)
        set.add(val.join('-'))
      }
    }
    for (let j = i; j < nums.length; j++) {
      if (list.length && nums[j] < list[list.length - 1]) { continue }
      list.push(nums[j])
      recursion(j + 1, list)
      list.pop()
    }
  }
  recursion(0, [])
  return res
};

// 每日一题: 17. 电话号码的字母组合
var letterCombinations = function(digits) {
  if (!digits.length) { return [] }
  const collection = [
      '',
      '', 'abc', 'def',
      'ghi', 'jkl', 'mno',
      'pqrs', 'tuv', 'wxyz'
  ]
  const res = []

  function recursion(i, str) {
    if (i >= digits.length) {
      res.push(str)
      return
    }
    for (let val of collection[digits[i]]) {
      recursion(i + 1, str + val)
    }
  }
  recursion(0, '')
  return res
};

// 每日一题: 332. 重新安排行程
var findItinerary = function(tickets) {
  const res = ['JFK']
  const map = {}
  for (let item of tickets) {
    const [from , to] = item
    if (!map[from]) {
      map[from] = []
    }
    map[from].push(to)
  }
  for (let key in map) {
    map[key].sort()
  }
  function recursion(city, used) {
    if (used === tickets.length) {
      return true
    }
    const cities = map[city]
    if (!cities || !cities.length) {
      return false
    }
    for (let i = 0; i < cities.length; i++) {
      const next = cities.splice(i, 1)[0]
      res.push(next)
      if (recursion(next, used + 1)) {
        return true
      } else {
        res.pop()
        cities.splice(i, 0, next)
      }
    }
  }
  recursion('JFK', 0)
  return res
};

// 每日一题: 657. 机器人能否返回原点
var judgeCircle = function(moves) {
  let x = 0
  let y = 0
  for (let val of moves) {
    if (val === 'U') {
      y++
    } else if (val === 'R') {
      x++
    } else if (val === 'D') {
      y--
    } else {
      x--
    }
  }
  return x === 0 && y === 0
};

