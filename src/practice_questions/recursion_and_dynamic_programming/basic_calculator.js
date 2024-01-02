import { assert } from "chai"
import { calc } from "../Basic Calculator"

describe("Testing Basic Calculator", () => {
  it("Test 1", () => {
    const input = "1 + 1"
    const expected = 2
    const actual = calc(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = " 2-1 + 2 "
    const expected = 3
    const actual = calc(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = "(1+(4+5+2)-3)+(6+8)"
    const expected = 23
    const actual = calc(input)
    assert.deepEqual(actual, expected)
  })
})
