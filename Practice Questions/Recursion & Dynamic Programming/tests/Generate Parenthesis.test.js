import { assert } from "chai"
import { generateParenthesis } from "../Generate Parenthesis"

describe("Testing Generate Parenthesis", () => {
  it("Test 1 - valid", () => {
    const input = 3
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - valid", () => {
    const input = 2
    const expected = ["(())", "()()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - valid", () => {
    const input = 1
    const expected = ["()"]
    const actual = generateParenthesis(input)
    assert.deepEqual(actual, expected)
  })
})
