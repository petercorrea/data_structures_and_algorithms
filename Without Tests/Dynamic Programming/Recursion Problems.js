// Sum of an array
export const sumOf = (list) => {
  // Base case
  if (list.length === 1) {
    return list[0]
  }

  // Recursive case
  return list[0] + sumOf(list.slice(1))
}

export const numList = [2, 4, 6, 8, 10]

// Counting Sheep
export const countSheep = (num) => {
  // Base case
  if (num === 0) {
    return "All sheep jumped over the fence"
  }

  // Recursive case

  return countSheep(num - 1)
}

// Power Calculator
export const powerCalculator = (base, exp) => {
  if (exp < 0) {
    return "Exponent should be >= 0"
  }

  // Base case
  if (exp === 0) {
    return 1
  }

  // Recursive case
  return base * powerCalculator(base, exp - 1)
}

// Reverse String
export const revString = (string) => {
  const splitString = string.split("")

  // Base case
  if (splitString.length === 1) {
    return splitString[0]
  }

  // Recursive case
  const splitEnd = string.slice(0, -1)
  return splitString.pop() + revString(splitEnd)
}

// nth Triangular Number
export const nthTriangularNum = (sideLength) => {
  // Base case
  if (sideLength === 1) {
    return 1
  }

  // Recursive case
  return sideLength + nthTriangularNum(sideLength - 1)
}

// String Splitter
export const split = (string, splitter) => {
  const idx = string.indexOf(splitter)

  // Base case
  if (idx === -1) {
    return string
  }

  // Recursive case
  const subString1 = string.slice(0, idx)
  const subString2 = string.slice(idx + 1)

  return [subString1].concat(split(subString2, splitter))
}

// Fibonacci
export const fibonacci = (num, array = [0, 1]) => {
  // Base case
  if (num === 1) {
    return array
  }

  // Recursive case
  const last = array.slice(-1)[0]
  const last2 = array.slice(-2, -1)[0]
  const sum = last + last2
  array.push(sum)

  return fibonacci(num - 1, array)
}

fibonacci(7)

// Factorial
export const factorial = (num) => {
  // Base case
  if (num === 1) {
    return 1
  }

  // Recursive case
  return num * factorial(num - 1)
}

// factorial(5)

// Find a way out of the maze
// const mySmallMaze = [
//   [" ", "*", "e"],
//   [" ", " ", " "],
//   [" ", "*", " "]
// ]

// const maze = [
//   [" ", " ", " ", "*", " ", " ", " "],
//   ["*", "*", " ", "*", " ", "*", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", "*", "*", "*", "*", "*", " "],
//   [" ", " ", " ", " ", " ", " ", "e"]
// ]
export const mazeSolver = (maze, positions = [[0, 0]], visited = [[0, 0]]) => {
  const num_rows = maze.length - 1
  const num_columns = maze[0].length - 1

  // print current position
  let current_row = positions.slice(-1)[0][0]
  let current_column = positions.slice(-1)[0][1]

  // Base case
  // Check for exit
  if (maze[current_row][current_column] === "e") {
    return positions
  }

  // Recursive case
  // Down
  if (
    current_row + 1 <= num_rows
    && maze[current_row + 1][current_column] !== "*"
  ) {
    // is point visited?
    const isVisited = visited.filter(
      (x) => x[0] === current_row + 1 && x[1] === current_column
    )

    // if visited is false
    if (isVisited.length === 0) {
      current_row += 1
      visited.push([current_row, current_column])
      positions.push([current_row, current_column])
      return mazeSolver(maze, positions, visited)
    }
  }

  // Up
  if (current_row - 1 >= 0 && maze[current_row - 1][current_column] !== "*") {
    // is point visited?
    const isVisited = visited.filter(
      (x) => x[0] === current_row - 1 && x[1] === current_column
    )

    // if visited is false
    if (isVisited.length === 0) {
      current_row -= 1
      visited.push([current_row, current_column])
      positions.push([current_row, current_column])
      return mazeSolver(maze, positions, visited)
    }
  }

  // Right
  if (
    current_column + 1 <= num_columns
    && maze[current_row][current_column + 1] !== "*"
  ) {
    // is point visited?
    const isVisited = visited.filter(
      (x) => x[0] === current_row && x[1] === current_column + 1
    )

    // if visited is false
    if (isVisited.length === 0) {
      current_column += 1
      visited.push([current_row, current_column])
      positions.push([current_row, current_column])
      return mazeSolver(maze, positions, visited)
    }
  }

  // Left
  if (
    current_column - 1 >= 0
    && maze[current_row][current_column - 1] !== "*"
  ) {
    // is point visited?
    const isVisited = visited.filter(
      (x) => x[0] === current_row && x[1] === current_column - 1
    )

    // if visited is false
    if (isVisited.length === 0) {
      current_column -= 1
      visited.push([current_row, current_column])
      positions.push([current_row, current_column])
      return mazeSolver(maze, positions, visited)
    }
  } else {
    positions.pop()

    return mazeSolver(maze, positions, visited)
  }

  return []
}

// mazeSolver(maze)

// Find ALL the ways out of the maze

// Anagrams
export const getAnagrams = (string) => {
  const results = []

  // Base case
  if (string.length === 1) {
    results.push(string)
    return results
  }

  // Recursive case
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i]
    const otherChars = string.substring(0, i) + string.substring(i + 1)

    const innerPermutations = getAnagrams(otherChars)

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(currentChar + innerPermutations[j])
    }
  }

  return results
}

// getAnagrams('Cat')

// Organization Chart
// const org = {
//   Zuckerberg: [
//     {
//       Schroepfer: [
//         {
//           Bosworth: ["Steve", "Kyle", "Andra"],
//           Zhao: ["Richie", "Sofia", "Jen"]
//         }
//       ],
//       Schrage: [
//         {
//           VanDyck: ["Sabrina", "Michelle", "Josh"],
//           Swain: ["Blanch", "Tom", "Joe"]
//         }
//       ],
//       Sandberg: [
//         {
//           Goler: ["Eddie", "Julie", "Annie"],
//           Hernandez: ["Rowi", "Inga", "Morgan"],
//           Moissinac: ["Amy", "Chuck", "Vinni"],
//           Kelley: ["Eric", "Ana", "Wes"]
//         }
//       ]
//     }
//   ]
// }

export const displayOrg = (obj, indent = "") => {
  // BASE CASE
  if (typeof obj === "string") {
    return
  }

  // Extract keys
  const keys = Object.keys(obj)

  // Iterate keys
  for (const key of keys) {
    if (key !== "0" && key !== "1" && key !== "2" && key !== "3") {
      // print key
    }

    const value = obj[key]

    displayOrg(value, `${indent}\t`)
  }
}

// displayOrg(org)

// Binary Representation
export const toBinary = (num) => {
  let results = []

  // Base case
  if (num === 0) {
    return results
  }

  // Recursive case
  if (num % 2 === 1) {
    results = toBinary((num - 1) / 2)
    results.push("1")
  } else {
    results = toBinary(num / 2)
    results.push("0")
  }

  return results
}

// Tower of Hanoi

export const stepsToSolveHanoiT = (height, source, destination, aux) => {
  if (height >= 1) {
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, source, aux, destination)

    // Move the remaining disk to the destination peg.
    console.log("Move disk from Tower ", source, " to Tower ", destination)

    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.
    stepsToSolveHanoiT(height - 1, aux, destination, source)
  }
}

// stepsToSolveHanoiT(2, "A", "C", "B");
