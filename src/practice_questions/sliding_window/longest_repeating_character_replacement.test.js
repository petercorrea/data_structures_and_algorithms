import { assert } from "chai"
import { LRCP } from "./longest_repeating_character_replacement"

describe("Testing Longest Repeating Character Replacement", () => {
  it("Test 1", () => {
    const input = "ABAB"
    const ops = 2
    const expected = 4
    const actual = LRCP(input, ops)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = "AABABBA"
    const ops = 1
    const expected = 4
    const actual = LRCP(input, ops)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input =
      "IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR"
    const ops = 2
    const expected = 6
    const actual = LRCP(input, ops)
    assert.deepEqual(actual, expected)
  })
})
