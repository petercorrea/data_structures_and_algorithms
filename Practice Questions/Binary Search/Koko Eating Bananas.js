/*
Problem Statement:
    Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
    The guards have gone and will come back in h hours.
    Koko can decide her bananas-per-hour eating speed of k. 
    Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
    If the pile has less than k bananas, she eats all of them instead and will not 
    eat any more bananas during this hour.
    Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
    Return the minimum integer k such that she can eat all the bananas within h hours.

Clarifications and Assumptions:
    This is some sample text.

Test Case:
    Input: piles = [3,6,7,11], h = 8
    Output: 4  

    Input: piles = [30,11,23,4,20], h = 5
    Output: 30

    Input: piles = [30,11,23,4,20], h = 6
    Output: 23

Notes:
    This is some sample text.

*/

// Solution #1 - O() time | O() space:
const eat = (arr, k, h) => {
  let totalHoursToEat = 0
  arr.forEach((item) => {
    totalHoursToEat += Math.ceil(item / k)
  })
  if (totalHoursToEat <= h) return true
  return false
}

const findMax = (arr) => {
  let max = 0
  for (const idx in arr) {
    if (arr[idx] > max) {
      max = arr[idx]
    }
  }

  return max
}

export const koko = (arr, h) => {
  // base case: if the amount of hour is equal to the amount of piles,
  // then we need to take as many bananas as we can. The minimum
  // would be equal to the largest pile
  if (arr.length === h) {
    return findMax(arr)
  }

  // binary search through min and max
  let l = 1
  let r = findMax(arr)

  while (l <= r) {
    const middle = Math.floor((l + r) / 2)

    if (r - l === 1) {
      if (eat(arr, l, h) && eat(arr, r, h)) return Math.min(l, r)
      if (eat(arr, l, h)) return l
      if (eat(arr, r, h)) return r
      return -1
    }

    // determine which side to binary search
    if (eat(arr, middle, h)) {
      r = middle
    } else {
      l = middle
    }
  }

  return -1
}

// Testing
