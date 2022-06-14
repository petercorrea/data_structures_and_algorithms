// You are given a string s and an integer k.You can choose any character of the
// string and change it to any other uppercase English character.You can perform
// this operation at most k times.
// Return the length of the longest substring containing the same letter you can get
// after performing the above operations.

export const LRCP = (str, limit) => {
  let l = 0
  let r = 0
  const k = limit
  let maxLength = 0
  const visited = {}

  while (r < str.length) {
    const char = str[r]
    if (visited[char]) {
      visited[char] += 1
    } else {
      visited[char] = 1
    }

    if (visited[char] > maxLength) {
      maxLength = visited[char]
    }

    if (r - l + 1 - maxLength > k) {
      visited[str[l]]--
      l++
    }
    r++
  }
  return r - l
}
