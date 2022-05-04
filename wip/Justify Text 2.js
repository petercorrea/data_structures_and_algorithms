// eslint-disable-file
/*
Problem Statement:
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified and no extra space is inserted between words.

Clarifying Questions and Assumptions:

Sample Input and Output:
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Notes:
    How do we determine an optimal answer?
    Our optimization should seek to minimize the number of spaces per line.
    If we attempt to merely count the number of spaces per line, we may end up having the same count
    for different and less optimized results. So, we'll take the square of each count.

    - cost matrix: determine the cost of each string by adding one word at a time and counting the number of left
    over spaces from the max width. Do not include naturally occurring spaces.

    - minimal cost array: we will loop the cost matrix to determine the minimal cost of the subproblem.
    If we reach Inf, this means we will need to determine a split in the string. Here is
    where we will use an optimization function.

    tabulation table
    cost table
    position table

*/

// Solution #1 - O() time | O() space:
export const textJustification = (words, maxWidth) => {
  // guard to check all word lengths and if ANY is over maxwidth return false
  const mx = generateCostMx(words)
  const costMx = calculateCosts(words, maxWidth, mx)
  const minCosts = generateMinimumCosts(costMx, maxWidth)

  return generateText(words, minCosts, maxWidth)
}

const generateCostMx = (words) =>
  new Array(words.length).fill(0).map((r) => new Array(words.length).fill(0))

const calculateCosts = (words, maxWidth, mx) => {
  for (let i = 0; i < words.length; i++) {
    let sentenceLength = 0
    for (let j = i; j < words.length; j++) {
      const spacesNeeded = j - i
      sentenceLength += words[j].length
      const cost =
        sentenceLength + spacesNeeded > maxWidth
          ? Number.POSITIVE_INFINITY
          : (maxWidth - sentenceLength - spacesNeeded) ** 2

      mx[i][j] = cost
    }
  }
  return mx
}

const generateMinimumCosts = (mx) => {
  const minimumCosts = new Array(2).fill(0).map((r) => Array(mx.length).fill(0))
  for (let i = 0; i < mx.length; i++) {
    minimumCosts[0][i] = Number.POSITIVE_INFINITY
    minimumCosts[1][i] = mx.length
  }

  for (let i = 0; i < mx.length; i++) {
    for (let j = 0; j < mx.length; j++) {
      console.log(j)
      if (mx[0][j] !== Number.POSITIVE_INFINITY) {
        minimumCosts[0][j] = mx[0][j]
        minimumCosts[1][0] = j + 1
      } else {
        for (let k = 1; k <= j; k++) {
          const before = minimumCosts[0][j]
          const min = Math.min(
            minimumCosts[0][j],
            minimumCosts[0][k - 1] + mx[k][j]
          )

          minimumCosts[0][j] = min

          console.log(before > min)
          if (before > min) {
            minimumCosts[1][0] = k
            minimumCosts[1][k] = j + 1
          }
          console.log(minimumCosts)
        }
      }
      if (j === mx.length - 1) break
    }
    break
  }
  return minimumCosts
}

const generateText = (words, minCosts, maxWidth) => {
  let start = 0
  let final = minCosts[1][start]
  const result = []
  let temp = []
  const spaces = []
  const justifiedText = []

  // seperate senetence
  while (start < words.length) {
    temp.push(words[start])
    if (start + 1 == final) {
      result.push(temp)
      temp = []
      start = final
      final = minCosts[1][start]
      continue
    }
    start++
  }

  console.log(minCosts)

  // determine spaces to add
  for (const sentence of result) {
    let diff = maxWidth
    for (const word in sentence) {
      diff -= sentence[word].length
    }
    diff -= sentence.length - 1
    spaces.push(diff)
  }

  // add spaces
  for (const sentence in result) {
    const wordCount = result[sentence].length
    const spacesPerWord = Math.floor(spaces[sentence] / wordCount)
    const remainder = spaces[sentence] % wordCount

    let extraSpaces = ""
    let remainderSpaces = ""

    for (let i = 0; i < spacesPerWord; i++) {
      extraSpaces += "@"
    }

    for (let i = 0; i < remainder; i++) {
      remainderSpaces += "@"
    }

    for (const word in result[sentence]) {
      result[sentence][word] += extraSpaces
    }

    result[sentence] = result[sentence].join("@")
    result[sentence] += remainderSpaces
  }
  return result
}

// Tests
const input = ["tushar", "roy", "likes", "to", "code"]
const input2 = ["This", "is", "an", "example", "of", "text", "justification."]
console.log(textJustification(input, 10))
