import { assert } from "chai"
import { dailyTemps } from "../Daily Temperatures"

describe("Testing Daily Temperatures", () => {
  it("Test 1 - valid", () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73]
    const expected = [1, 1, 4, 2, 1, 1, 0, 0]
    const actual = dailyTemps(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [30, 40, 50, 60]
    const expected = [1, 1, 1, 0]
    const actual = dailyTemps(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [30, 60, 90]
    const expected = [1, 1, 0]
    const actual = dailyTemps(input)
    assert.deepEqual(actual, expected)
  })
})
