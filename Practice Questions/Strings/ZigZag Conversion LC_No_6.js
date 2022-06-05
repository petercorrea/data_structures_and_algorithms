// INPUT:  PAYPALISHIRING
// OUTPUT: PAHNAPLSIIGYIR

// P   A   H   N
// A P L S I I G
// Y   I   R

// INPUT:  PAYPALISHIRING
// OUTPUT: PINALSIGYAHRPI

// A cycle = No.Rows * 2 - 2
// second item = charIdx + cycleSize - 2 * rowIdx

// P     I      N
// A   L S   I  G
// Y A   H  R
// P     I

export const sortByRow = (s, numOfRows) => {
  if (numOfRows === 1 || s.length <= numOfRows) {
    return s
  }

  const rows = []
  const result = []
  let currentRow = 0
  let direction = -1

  // initialize rows
  for (let i = 0; i < numOfRows; i++) {
    rows.push([])
  }

  // iterate rows and push char
  for (const c of s) {
    rows[currentRow].push(c)

    // Change direction once the ends have been reached, else increment current position
    if (currentRow === 0 || currentRow === rows.length - 1) {
      direction *= -1
    }

    currentRow += direction
  }

  return result.concat(...rows).join("")
}

export const visitByRow = (s, numOfRows) => {
  if (numOfRows === 1) {
    return s
  }

  const result = []
  const cycleSize = numOfRows * 2 - 2

  for (let i = 0; i < numOfRows; i++) {
    for (let j = i; j < s.length; j += cycleSize) {
      result.push(s[j])

      // Second item
      const k = j + cycleSize - 2 * i

      if (i !== 0 && i !== numOfRows - 1 && k < s.length) {
        result.push(s[k])
      }
    }
  }

  return result.join("")
}
