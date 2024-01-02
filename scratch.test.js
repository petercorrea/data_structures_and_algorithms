import { assert } from "chai"

const myFunc = (days, t) => {
  const profits = Array(t + 1)
    .fill()
    .map(() => Array(days.length).fill(0))

  // iterate transactions
  for (let i = 1; i <= t; i++) {
    // iterate days
    for (let j = 1; j <= days.length - 1; j++) {
      // previous day profit keeping same t
      const noTrade = profits[i][j - 1]

      let trade = 0
      const todaysPrice = days[j]
      // max prev profit plus todays price
      for (let k = j - 1; k >= 0; k--) {
        // note: undo the act of selling on the prior day, since we're selling on the curent day
        const prevProfit = profits[i - 1][k]
        const prevPrice = days[k]
        trade = Math.max(trade, prevProfit - prevPrice + todaysPrice)
      }

      profits[i][j] = Math.max(trade, noTrade)
    }
  }

  return profits[profits.length - 1][days.length - 1]
}

describe("Testing...", () => {
  it("Test 1", () => {
    const input = [[5, 11, 3, 50, 60, 90], 2]
    const expected = 93

    const actual = myFunc(...input)
    assert.deepEqual(actual, expected)
  })
})

//      5  11  3  50  60  90
// 0    0  0   0  0   0   0
// 1    0  6   6  47  57  87
// 2    0  6   6  53  63  93
