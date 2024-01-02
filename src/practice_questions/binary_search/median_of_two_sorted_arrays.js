/*
Problem Statement:
    Given two sorted arrays of length m and n, return the median of the two arrays,
    in O(log(m+n)) time.

Clarifications and Assumptions:
    The input arrays are already sorted.

Test Case:
    [1, 3], [2] => 2
    [1, 3], [2, 4] => (2+3)/2 = 2.5

Notes:
    m = [1, 3, 4, 6]
    n = [2, 3, 5, 8, 9, 10]
    sorted m + n = [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] = 4.5

    determine an initial partition of arrays:
        find the middle index of smaller array: m (3+0)/2 = 1
        total of 10 elements, 5 per partition
        m.left has 2 elements so n.left should have 3 elements

            P
        [1, 3, 4, 6]
               P
        [2, 3, 5, 8, 9, 10]

    determine if the partitioning is correct:
    the correct partition for this problem would be:
                P
        [1, 3, 4, 6]
            P
        [2, 3, 5, 8, 9, 10]

        generally speaking, a problem is
        correctly partitioned when m[l] < n[r] && n[l] < m[r]

    if not partition correctly, we conduct binary search on the
    incorrect partition to determine a new middle and reevaluate.
        if the m[l] is larger than n[r] => binary search left side of smaller array
        if the m[r] is smaller than n[l] => binary search right side of smaller array

    we conduct binary search on the right half of m and determine a new middle
    for both arrays using the facts we know about their lengths
                P
        [1, 3, 4, 6]
            P
        [2, 3, 5, 8, 9, 10]

    once a correct partition has been found, determine the median by
    evaluating:
        if combined length is even:
            (max(m[l], n[l]) + min(m[r], n[r])) / 2
        if combined length is odd:
            min(m[r], n[r])
*/

const indexArray = (i, arr) => {
  if (i === -1) {
    return Number.NEGATIVE_INFINITY
  }

  if (i === arr.length) {
    return Number.POSITIVE_INFINITY
  }

  return arr[i]
}

const getIndices = (rShort, aLong, aShort) => {
  const midpoint = Math.floor((aShort.length + aLong.length) / 2)
  const rLong = midpoint - rShort

  // lLong, rLong, lShort, rShort

  return [rLong - 1, rLong, rShort - 1, rShort]
}

const getDirection = (lLong, rLong, lShort, rShort, aLong, aShort) => {
  // if longer array is greater than shorter array
  if (indexArray(lLong, aLong) > indexArray(rShort, aShort)) {
    return 1
  }

  // if shorter array is greater than longer array
  if (indexArray(lShort, aShort) > indexArray(rLong, aLong)) {
    return -1
  }

  return 0
}

const getResult = (lLong, rLong, lShort, rShort, aLong, aShort) => {
  const odd = (aShort.length + aLong.length) % 2

  if (odd === 1) {
    return Math.min(indexArray(rLong, aLong), indexArray(rShort, aShort))
  }
  return (
    (Math.max(indexArray(lLong, aLong), indexArray(lShort, aShort))
      + Math.min(indexArray(rLong, aLong), indexArray(rShort, aShort)))
    / 2
  )
}

export const medianOfTwoSortedArrays = (arr1, arr2) => {
  // Identify arrays
  let aShort = arr1
  let aLong = arr2

  if (aShort.length > aLong.length) {
    aShort = arr2
    aLong = arr1
  }

  // Binary search
  let l = 0
  let r = aShort.length
  let d
  let m
  let lLong
  let rLong
  let lShort
  let rShort

  while (d !== 0) {
    m = Math.floor(l + (r - l) / 2);
    [lLong, rLong, lShort, rShort] = getIndices(m, aLong, aShort)

    d = getDirection(lLong, rLong, lShort, rShort, aLong, aShort)

    if (d < 0) {
      // pushing smaller array towards the right
      r = m - 1
    } else if (d > 0) {
      // pushing smaller array towards the left
      l = m + 1
    }
  }

  return getResult(lLong, rLong, lShort, rShort, aLong, aShort)
}
