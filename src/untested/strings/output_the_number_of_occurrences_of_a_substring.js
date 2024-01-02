// Given a document, implement an algorithm to count and print the
// number of word occurrences.

// Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

let s = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

const countSubstring = () => {
  const pattern = /[A-Z]*[a-z]*/
  const map = new Map()
  let result = " "

  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === " ") {
      let sub = s.substring(0, idx)

      sub = sub.trim()
      const result = pattern.exec(sub)
      let match = result[0]
      match = match.toLocaleLowerCase()
      s = s.substring(idx)
      idx = 0
      map.set(match, map.has(match) ? map.get(match) + 1 : 1)
    }
  }

  s = s.trim()
  s = s.toLocaleLowerCase()
  const sResult = pattern.exec(s)
  const match = sResult[0]
  map.set(match, map.has(match) ? map.get(match) + 1 : 1)

  for (const [word, count] of map.entries()) {
    const sub2 = `${word} = ${count}, `
    result = result.concat(sub2)
  }
}

countSubstring(s)
