import { assert } from "chai"
import { isPalindrome } from "../Valid Palindrome"

describe("Testing Valid Palindrome", () => {
  it("Test 1", () => {
    const input = "A man, a plan, a canal: Panama"
    const expected = true
    const actual = isPalindrome(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = "race a car"
    const expected = false
    const actual = isPalindrome(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = " "
    const expected = true
    const actual = isPalindrome(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = "ab_a"
    const expected = true
    const actual = isPalindrome(input)
    assert.deepEqual(actual, expected)
  })
})
