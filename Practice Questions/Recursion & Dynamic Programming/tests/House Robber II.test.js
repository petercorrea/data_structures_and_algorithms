import { assert } from "chai"
import { houseRobber2, houseRobber2DP } from "../House Robber II"

describe("Testing House Robber", () => {
  it("Test 1 - Recursion", () => {
    const input = [2, 3, 2]
    const expected = 3
    const actual = houseRobber2(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - Recursion", () => {
    const input = [1, 2, 3, 1]
    const expected = 4
    const actual = houseRobber2(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - Recursion", () => {
    const input = [1, 2, 3]
    const expected = 3
    const actual = houseRobber2(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4 - DP", () => {
    const input = [2, 3, 2]
    const expected = 3
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5 - DP", () => {
    const input = [1, 2, 3, 1]
    const expected = 4
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6 - DP", () => {
    const input = [2, 3, 2]
    const expected = 3
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 7 - DP", () => {
    const input = [1, 2, 3]
    const expected = 3
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 8 - DP", () => {
    const input = [1, 2, 1, 1]
    const expected = 3
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 9 - DP", () => {
    const input = [1, 3, 1, 3, 100]
    const expected = 103
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 10 - DP", () => {
    const input = [4, 1, 2, 7, 5, 3, 1]
    const expected = 14
    const actual = houseRobber2DP(input)
    assert.deepEqual(actual, expected)
  })
})
