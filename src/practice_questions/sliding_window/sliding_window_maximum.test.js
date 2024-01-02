import { assert } from "chai"
import { maxSlidingWindow } from "./sliding_window_maximum"

describe("Testing Sliding Window Maximum", () => {
  it("Test 1", () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7]
    const k = 3
    const expected = [3, 3, 5, 5, 6, 7]
    const actual = maxSlidingWindow(nums, k)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const nums = [1]
    const k = 1
    const expected = [1]
    const actual = maxSlidingWindow(nums, k)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const nums = [1, -1]
    const k = 1
    const expected = [1, -1]
    const actual = maxSlidingWindow(nums, k)
    assert.deepEqual(actual, expected)
  })
})
