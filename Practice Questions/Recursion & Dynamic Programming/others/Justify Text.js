// Sample Input
// const textFromInternet =
//   "In computer science, mathematics, management science, economics, dynamic programming."

const LINE_LENGTH = 40
const calcBadness = (line) => {
  const diff = LINE_LENGTH - line.length
  if (diff >= 0) {
    return (LINE_LENGTH - line.length) ** 2
  }
  return Number.MAX_VALUE
}

export const dp = (text) => {
  const words = text.split(" ")
  const memo = []
  memo[words.length] = [0, 0]

  // Work backwards
  for (let i = words.length - 1; i >= 0; i--) {
    // i is the preceding index
    let best = [Number.MAX_VALUE, i + 1]

    // Work forwards, j is the preceding index
    for (let j = i + 1; j <= words.length; j++) {
      const totalScore = calcBadness(words.slice(i, j).join(" ")) + memo[j][0]
      //

      if (totalScore > 13000) {
        break
      }
      if (totalScore < best[0]) {
        best = [totalScore, j]
      }
    }
    memo[i] = best
    //
  }

  //
  let pointer = 0
  const results = []

  while (pointer < words.length) {
    const line = words.slice(pointer, memo[pointer][1]).join(" ")
    results.push(line)
    // eslint-disable-next-line semi-style, no-undef
    ;[_, pointer] = memo[pointer]
  }
  return results
}
