// Best T(C):  (O)nlogn
// Worse T(C): (O)n^2

// Pros: cache locality, no additional memory (in-place), good for indexed structures
// Cons: unstable

export const swap = (itemsParam, leftIdx, rightIdx) => {
  const items = [...itemsParam]
  const temp = items[leftIdx]
  items[leftIdx] = items[rightIdx]
  items[rightIdx] = temp
  return items
}

// Implemented here using Hoare’s partitioning scheme as opposed to Lomuto.
export const partition = (items, left, right) => {
  const middle = items[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    // stops when left item is >= than pivot
    while (items[i] < middle) {
      i++
    }

    // stops when right item is <= than pivot
    while (items[j] > middle) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }

  const idx = i
  return idx
}

export const quickSort = (items, left, right) => {
  if (items.length > 1) {
    if (left >= right) {
      return []
    }

    const partIdx = partition(items, left, right)

    // sort left side
    quickSort(items, left, partIdx - 1)

    // sort right side
    quickSort(items, partIdx, right)
  }

  return items
}
