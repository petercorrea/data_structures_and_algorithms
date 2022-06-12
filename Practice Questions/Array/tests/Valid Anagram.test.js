import { assert } from "chai"
import { validAnagram } from "../Valid Anagram"

describe("Testing Valid Anagram", () => {
  it("Test 1 - valid", () => {
    const input = "Peter"
    const input2 = "Pteer"
    const expected = true
    const actual = validAnagram(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - not valid", () => {
    const input = "Peter"
    const input2 = "Ptaer"
    const expected = false
    const actual = validAnagram(input, input2)
    assert.deepEqual(actual, expected)
  })
})
