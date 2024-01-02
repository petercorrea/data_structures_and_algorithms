import { assert } from "chai"
import { minWindow } from "./minimum_window_substring"

describe("Testing Minimum Window Substring", () => {
  it("Test 1", () => {
    const s = "ADOBECODEBANC"
    const t = "ABC"
    const expected = "BANC"
    const actual = minWindow(s, t)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const s = "a"
    const t = "a"
    const expected = "a"
    const actual = minWindow(s, t)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const s = "a"
    const t = "aa"
    const expected = ""
    const actual = minWindow(s, t)
    assert.deepEqual(actual, expected)
  })
})
