import { assert } from "chai"
import { count } from "./subdomain_visit_count"

describe("Testing Subdomain Visit Count", () => {
  it("Test 1", () => {
    const input = ["9001 discuss.leetcode.com"]
    const expected = [
      "9001 com",
      "9001 leetcode.com",
      "9001 discuss.leetcode.com"
    ]
    const actual = count(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 wiki.org"
    ]
    const expected = [
      "951 com",
      "901 mail.com",
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 org",
      "5 wiki.org"
    ]
    const actual = count(input)
    assert.deepEqual(actual, expected)
  })
})
