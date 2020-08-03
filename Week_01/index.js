// 26. 删除排序数组中的重复项
// (1) 双指针 O(n)
var removeDuplicates = function(nums) {
  if (nums.length === 0) { return 0 }

  let i = 0
  let j = 0
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      j++
      nums[j] = nums[i]
    }
    i++
  }
  return j + 1
};

// 189. 旋转数组
var rotate = function(nums, k) {
  k = k % nums.length

  while (k > 0) {
    nums.unshift(nums.pop())
    k--
  }
  return nums
};

// 21. 合并两个有序链表
// 迭代 O(m+n)
var mergeTwoLists1 = function(l1, l2) {
  const resHead = new ListNode()
  let tail = resHead
  while (l1 && l2) {
    if (l1.val === l2.val) {
      tail.next = l1
      l1 = l1.next
      tail.next.next = l2
      l2 = l2.next
      tail = tail.next.next
    } else if (l1.val < l2.val) {
      tail.next = l1
      tail = tail.next
      l1 = l1.next
    } else {
      tail.next = l2
      tail = tail.next
      l2 = l2.next
    }
  }
  tail.next = l1 || l2
  return resHead.next
};
// 递归 O(m+n)
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
};

// 88. 合并两个有序数组
// 双指针, 从前至后
const merge1 = function(nums1, m, nums2, n) {
  if (n === 0) { return nums1 }

  const copy_nums1 = nums1.slice(0, m)
  let i = 0
  let p = 0
  let q = 0
  while (p < m && q < n) {
    if (copy_nums1[p] < nums2[q]) {
      nums1[i] = copy_nums1[p]
      p++
    } else {
      nums1[i] = nums2[q]
      q++
    }
    i++
  }
  let rest = p >= m ? nums2.slice(q) : copy_nums1.slice(p)
  nums1.splice(i, m + n - i, ...rest)
  return nums1
}
// 双指针, 从后至前
const merge = function(nums1, m, nums2, n) {
  if (n === 0) { return nums1 }

  let p = m - 1
  let q = n - 1
  let tail = m + n - 1

  while (p >= 0 && q >= 0) {
    if (nums2[q] >= nums1[p]) {
      nums1[tail] = nums2[q]
      q--
    } else {
      nums1[tail] = nums1[p]
      p--
    }
    tail--
  }
  while (q >=0) {
    nums1[tail--] = nums2[q--]
  }

  return nums1
}

// 1. 两数之和
var twoSum = function(nums, target) {
  let i = 0
  let length = nums.length
  const map = {}
  while (i < length) {
    if (map[target - nums[i]]) {
      return [i, map[target - nums[i]].index]
    } else {
      map[nums[i]] = {
        index: i
      }
    }
    i++
  }
  return []
};

// 283. 移动零
var moveZeroes = function(nums) {
  let i = 0, j = 0, length = nums.length
  while (i < length) {
    if (nums[i] !== 0) {
      if (i > j) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
    i++
  }
  return nums
};

// 66. 加一
// 递归
var plusOne1 = function(digits, tail = digits.length - 1) {
  if (tail < 0) {
    return [1].concat(digits)
  }
  const sum = digits[tail] + 1
  if (sum < 10) {
    digits[tail] = sum
    return digits
  }
  digits[tail] = sum % 10
  return plusOne(digits, tail - 1)
};
// 迭代
var plusOne2 = function(digits) {
  let tail = digits.length - 1
  let over = 1
  while (true) {
    if (tail < 0) {
      return [1].concat(digits)
    }
    const sum = digits[tail] + over--
    if (sum < 10) {
      digits[tail] = sum
      return digits
    }
    over = 1
    digits[tail] = sum % 10
    tail--
  }
};
// 迭代优化
var plusOne = function(digits) {
  let tail = digits.length - 1
  while (tail >= 0) {
    digits[tail]++
    if (digits[tail] < 10) {
      return digits
    }
    digits[tail] = 0
    tail--
  }
  return [1].concat(digits)
};























































