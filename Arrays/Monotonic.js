// Determine is a given array is monotonic, return a boolean.
// The values of a monotonic array either only increases (or stays the same)
// or only decreases (or stays the same).
// Arrays with zero or one value is considered monotonic.

// Time: n
// Space: 1
function monotonic(array) {
  let increasing = true
  let decreasing = true

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) decreasing = false
    if (array[i] > array[i + 1]) increasing = false
  }

  return increasing || decreasing
}

function isMonotonic(array) {
  if (array.length === 0) return true

  let idx = 0
  while (array[idx] <= array[idx + 1]) {
    idx++
  }
  if (idx === array.length - 1) return true

  idx = 0
  while (array[idx] >= array[idx + 1]) {
    idx++
  }
  if (idx === array.length - 1) return true
  return false
}
