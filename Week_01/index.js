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

































































