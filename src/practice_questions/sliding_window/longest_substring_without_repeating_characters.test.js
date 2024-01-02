import { assert } from "chai"
import { LSS } from "./longest_substring_without_repeating_characters"

describe("Testing Longest Substring Without Repeating Characters", () => {
  it("Test 1", () => {
    const input = "abcabcbb"
    const expected = 3
    const actual = LSS(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = "bbbbb"
    const expected = 1
    const actual = LSS(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = "pwwkew"
    const expected = 3
    const actual = LSS(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = "dvdf"
    const expected = 3
    const actual = LSS(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5", () => {
    const input = "tmmzuxt"
    const expected = 5
    const actual = LSS(input)
    assert.deepEqual(actual, expected)
  })
})
