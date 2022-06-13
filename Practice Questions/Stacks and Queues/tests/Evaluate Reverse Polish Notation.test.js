import { assert } from "chai"
import { RPN } from "../Evaluate Reverse Polish Notation"

describe("Testing Evaluate Reverse Polish Notation", () => {
  it("Test 1", () => {
    const input = ["2", "1", "+", "3", "*"]
    const expected = 9
    const actual = RPN(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = ["4", "13", "5", "/", "+"]
    const expected = 6
    const actual = RPN(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
    const expected = 22
    const actual = RPN(input)
    assert.deepEqual(actual, expected)
  })
})
