import { assert } from "chai"
import { validParenthesis } from "./valid_parenthesis"

describe("Testing Valid Parenthesis", () => {
  it("Test 1", () => {
    const input = "{()([])}"
    const expected = true
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = "{()([[])}"
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = "{[(("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = ")("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5", () => {
    const input = ")((("
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6", () => {
    const input = "([)]"
    const expected = false
    const actual = validParenthesis(input)
    assert.deepEqual(actual, expected)
  })
})
