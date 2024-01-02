import { assert } from "chai"
import { groupAnagrams } from "../Group Anagrams"

describe("Testing Group Anagrams", () => {
  it("Test 1 - group correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    const actual = groupAnagrams(input)
    assert.deepEqual(actual, expected)
  })

  // key collision due to these having the same count frequency
  // bdddddddddd = 1010
  // bbbbbbbbbbc = 1010
  it("Test 2 - avoid key collisions", () => {
    const input = ["bdddddddddd", "bbbbbbbbbbc"]
    const expected = [["bdddddddddd"], ["bbbbbbbbbbc"]]
    const actual = groupAnagrams(input)
    assert.deepEqual(actual, expected)
  })
})
