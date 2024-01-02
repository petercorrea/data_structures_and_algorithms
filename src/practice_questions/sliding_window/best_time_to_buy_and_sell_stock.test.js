import { assert } from "chai"
import { bestTime } from "./best_time_to_buy_and_sell_stock"

describe("Testing ", () => {
  it("Test 1", () => {
    const input = [7, 1, 5, 3, 6, 4]
    const expected = 5
    const actual = bestTime(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [7, 6, 4, 3, 1]
    const expected = 0
    const actual = bestTime(input)
    assert.deepEqual(actual, expected)
  })
})
