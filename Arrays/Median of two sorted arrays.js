/*

1.	By finding a pivot point where all elements to the left are smaller
	and all elements to the right are greater, you can find the median.

		y y [y]|[y] y y
		  x [x]|[x] x

		y y [y][x]|[y] y [x] y x x

2.	A pivot point in the smaller array has a corresponding point on the larger array,
	that divides the total elements equally.

		y y y|y y y
		  x x|x x

		y y y y|y y
			  x|x x x

		  y y|y y y y
		x x x|x

3.	After picking a pivot point, it's possible to determine the direction to shift by performing a cross check.

		4 < 3 false
		2 < 5 true
		The smaller array must shift towards the left...
		1 2 3 [4]|[5] 6
			  [2]|[3] 4 5

		3 < 5 true
		4 < 4 false
		The smaller array must shift towards the right...
		1 2 [3]|[4] 5 6
		2 3 [4]|[5]

		Ideal position
		1 2 [3]|[4] 5 6
		  2 [3]|[4] 5

4.	Code Outline
	1. Binary search in smaller array
	2. getIndices from the midpoint: m -> lLong, rLong, lShort, rShort
	3. getDirection: lLong, rLong, lShort, rShort -> direction
	4. getResult: lLong, rLong, lShort, rShort -> median

*/

function indexArray(i, arr) {
  if (i === -1) {
    console.log("before the array")
    return Number.NEGATIVE_INFINITY
  }

  if (i === arr.length) {
    console.log("after the array")
    return Number.POSITIVE_INFINITY
  }

  return arr[i]
}

function getIndices(rShort, aLong, aShort) {
  console.log(rShort)
  const midpoint = Math.floor((aShort.length + aLong.length) / 2)
  const rLong = midpoint - rShort

  // lLong, rLong, lShort, rShort
  console.log(rLong - 1, rLong, rShort - 1, rShort)
  return [rLong - 1, rLong, rShort - 1, rShort]
}

function getDirection(lLong, rLong, lShort, rShort, aLong, aShort) {
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

function getResult(lLong, rLong, lShort, rShort, aLong, aShort) {
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

function medianOfTwoSortedArrays(arr1, arr2) {
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
    m = Math.floor((l + r) / 2)
    console.log("l, r", l, r)
    console.log("m", m);
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

const nums1 = [1]
const nums2 = [3, 4, 5, 5, 6]

console.log(medianOfTwoSortedArrays(nums1, nums2))
