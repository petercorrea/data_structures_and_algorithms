import { assert } from "chai"
import { generateParenthesis } from "../Generate Parenthesis"

describe("Testing Generate Parenthesis", () => {
  it("Test 1", () => {
    const input = 3
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = 2
    const expected = ["(())", "()()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = 1
    const expected = ["()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })
})
