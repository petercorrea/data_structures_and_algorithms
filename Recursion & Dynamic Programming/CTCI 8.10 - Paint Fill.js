// Problem Statement:
// Implement the "paint fill" function that one might see on many image
// editing programs.That is, given a screen(represented by a two - dimensional array of colors),
// a point, and a new color, fill in the surrounding area until the color changes from the original color.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
const screenTest = [
  ["red", "red", "red", "black", "black"],
  ["black", "black", "red", "red", "black"],
  ["black", "red", "red", "red", "black"],
  ["black", "red", "red", "red", "black"],
  ["black", "black", "black", "black", "black"]
]

const paintFill = (
  screen,
  newColor,
  rowPoint,
  colPoint,
  originalColor = screen[rowPoint][colPoint]
) => {
  if (
    rowPoint < 0
    || colPoint < 0
    || colPoint > screen[0].length
    || rowPoint > screen.length
    || screen[rowPoint][colPoint] !== originalColor
  ) {
    return
  }

  if (screen[rowPoint][colPoint] === originalColor) {
    screen[rowPoint][colPoint] = newColor
    paintFill(screen, newColor, rowPoint + 1, colPoint, originalColor)
    paintFill(screen, newColor, rowPoint - 1, colPoint, originalColor)
    paintFill(screen, newColor, rowPoint, colPoint + 1, originalColor)
    paintFill(screen, newColor, rowPoint, colPoint - 1, originalColor)
  }

  return screen
}

// Test:
console.log(paintFill(screenTest, "white", 2, 2)) // result

// Notes after implementing:
