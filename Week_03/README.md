学习笔记
- “回溯”指的是“状态重置”，可以理解为“回到过去”、“恢复现场”，是在编码的过程中，是为了节约空间而使用的一种技巧
  
   比如, 为什么下探到下一层之前先push, 回溯回来后又pop. 而不是直接使用Array.concat传入下一层
   
- [从全排列问题开始理解「回溯」算法（深度优先遍历 + 状态重置 + 剪枝）](https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/)
- 剪枝去重, 避免重复运算. 可参考[全排列 II 题解: 回溯 + 剪枝 （等价基础全排列）](https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-jian-zhi-deng-jie-ji-chu-quan-pai-lie-by-ge/)
