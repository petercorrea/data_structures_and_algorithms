import { assert } from "chai"
import { validParenthesis } from "../Valid Parenthesis"

describe("Testing Valid Parenthesis", () => {
  it("Test 1 - valid", () => {
    const input = "{()([])}"
    const expected = true
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - not valid", () => {
    const input = "{()([[])}"
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - not valid", () => {
    const input = "{[(("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4 - not valid", () => {
    const input = ")("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5 - not valid", () => {
    const input = ")((("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6 - not valid", () => {
    const input = "([)]"
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })
})
