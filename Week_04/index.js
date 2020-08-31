// 860. 柠檬水找零
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    for (let val of bills) {
        if (val === 5) {
            five++
        } else if (val === 10) {
            five--
            ten++
        } else if (ten){
            ten--
            five--
        } else {
            five -= 3
        }
        if (five < 0) {
            return false
        }
    }
    return true
};

// 122. 买卖股票的最佳时机 II
var maxProfit = function(prices) {
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1]
        if (diff > 0) {
            profit += diff
        }
    }
    return profit
};

// 455. 分发饼干
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let i = 0
    let j = 0
    while (i < g.length && j < s.length) {
        if (s[j++] >= g[i]) {
            i++
        }
    }
    return i
};

// 874. 模拟行走机器人
var robotSim = function(commands, obstacles) {
  let curX = 0
  let curY = 0
  const x = [0, 1, 0, -1]
  const y = [1, 0, -1, 0]
  let direction = 0
  const obstaclesSet = new Set()
  for (const val of obstacles) {
    obstaclesSet.add(val[0] + '-' + val[1])
  }

  let res = 0
  for (const step of commands) {
    if (step === -1) {
      direction = (direction + 1) % 4
    } else if (step === -2) {
      direction = (direction + 3) % 4
    } else {
      for (let i = 0; i < step; i++) {
        const nextX = curX + x[direction]
        const nextY = curY + y[direction]
        if (obstaclesSet.has(nextX + '-' + nextY)) {
          break
        } else {
          curX = nextX
          curY = nextY
          res = Math.max(res, curX ** 2 + curY ** 2)
        }
      }
    }
  }
  return res
};
