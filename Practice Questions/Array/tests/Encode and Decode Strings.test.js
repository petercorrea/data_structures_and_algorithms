import { assert } from "chai"
import { decode, encode } from "../Encode and Decode Strings"

describe("Testing Encode and Decode String", () => {
  it("Test 1 - valid", () => {
    const input = ["lint", "code", "love", "you"]
    const expected = ["lint", "code", "love", "you"]
    let actual = encode(input)
    actual = decode(actual)
    assert.deepEqual(actual, expected)
  })
})
