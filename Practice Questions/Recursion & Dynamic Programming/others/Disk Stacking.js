// Given an array of disks, determine the greatest height one can achieve by stacking the disks.
// 		- Each dish must be stricly larger on all dimensions than the disk above it
// 		- Each disk item in the array, will itself be an array with 3 values representing width, height, and depth
// 		- The orientation of the disk must not change

const isBLarger = (a, b) => {
  if (a[0] < b[0] && a[1] < b[1] && a[2] < b[2]) return true
  return false
}

const buildSequence = (disks, sequences, currentIdx) => {
  const sequence = []
  while (currentIdx !== undefined) {
    sequence.unshift(disks[currentIdx])
    currentIdx = sequences[currentIdx]
  }

  return sequence
}

export const diskStacking = (disks) => {
  // sort disks
  disks.sort((a, b) => a[2] - b[2])

  // generate result array
  const heights = []
  for (const disk of disks) {
    heights.push(disk[2])
  }

  // compute
  let maxHeightIdx = 0
  const sequences = Array(disks.length)
  for (let i = 1; i < disks.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isBLarger(disks[j], disks[i])) {
        if (heights[i] <= disks[i][2] + heights[j]) {
          heights[i] = disks[i][2] + heights[j]
          sequences[i] = j
        }
      }
    }

    if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i
  }

  return buildSequence(disks, sequences, maxHeightIdx)
}
