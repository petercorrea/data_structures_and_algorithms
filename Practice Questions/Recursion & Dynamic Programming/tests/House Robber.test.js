import { assert } from "chai"
import { houseRobber, houseRobberDP } from "../House Robber"

describe("Testing House Robber", () => {
  it("Test 1 - Recursion", () => {
    const input = [1, 2, 3, 1]
    const expected = 4
    const actual = houseRobber(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - Recursion", () => {
    const input = [2, 7, 9, 3, 1]
    const expected = 12
    const actual = houseRobber(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - Recursion", () => {
    const input = [2, 1, 1, 2]
    const expected = 4
    const actual = houseRobber(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4 - DP", () => {
    const input = [1, 2, 3, 1]
    const expected = 4
    const actual = houseRobberDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5 - DP", () => {
    const input = [2, 7, 9, 3, 1]
    const expected = 12
    const actual = houseRobberDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6 - DP", () => {
    const input = [2, 1, 1, 2]
    const expected = 4
    const actual = houseRobberDP(input)
    assert.deepEqual(actual, expected)
  })
})
