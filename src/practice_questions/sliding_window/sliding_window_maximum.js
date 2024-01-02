// You are given an array of integers nums,
// there is a sliding window of size k which is moving from
// the very left of the array to the very right.
// You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.
// Return the max sliding window.

export const maxSlidingWindow = (nums, k) => {
  let r = 0
  const queue = []
  const result = []

  while (r < nums.length) {
    const current = nums[r]
    while (queue.length && current >= queue[queue.length - 1][1]) {
      queue.pop()
    }
    queue.push([r, current])

    // check to see if we have reached window size k
    if (r >= k - 1) {
      // if outside of window size
      while (queue[0][0] < r - k + 1) {
        queue.shift()
      }
      // push max value
      result.push(queue[0][1])
    }
    r++
  }

  return result
}
