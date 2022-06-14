import { assert } from "chai"
import { permutationInString } from "../Permutation in String"

describe("Testing Permutation in String", () => {
  it("Test 1", () => {
    const input = "ab"
    const input2 = "eidbaooo"
    const expected = true
    const actual = permutationInString(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = "ab"
    const input2 = "eidboaoo"
    const expected = false
    const actual = permutationInString(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = "adc"
    const input2 = "dcda"
    const expected = true
    const actual = permutationInString(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = "hello"
    const input2 = "ooolleoooleh"
    const expected = false
    const actual = permutationInString(input, input2)
    assert.deepEqual(actual, expected)
  })
})
