// It's photo day at the local school, and you're the photographer assigned to
// take class photos. The class that you'll be photographing has an even number
// of students, and all these students are wearing red or blue shirts. In fact,
// exactly half of the class is wearing red shirts, and the other half is wearing
// blue shirts. You're responsible for arranging the students in two rows before
// taking the photo. Each row should contain the same number of the students and
// should adhere to the following guidelines:

// All students wearing red shirts must be in the same row.
// All students wearing blue shirts must be in the same row.

// Each student in the back row must be strictly taller than the student
// directly in front of them in the front row.

// You're given two input arrays: one containing the heights of all the students
// with red shirts and another one containing the heights of all the students
// with blue shirts. These arrays will always have the same length, and each
// height will be a positive integer. Write a function that returns whether or
// not a class photo that follows the stated guidelines can be taken.

// Note: you can assume that each class has at least 2 students.

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)

  let index = 0

  while (redShirtHeights[index] < blueShirtHeights[index]) {
    index++
    if (index === redShirtHeights.length) {
      return true
    }
  }

  index = 0

  while (blueShirtHeights[index] < redShirtHeights[index]) {
    index++
    if (index === redShirtHeights.length) {
      return true
    }
  }

  return false
}

// Do not edit the line below.
exports.classPhotos = classPhotos
