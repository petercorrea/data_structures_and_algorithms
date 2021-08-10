// Problem Statement:
// You're given:
// 		-a list representing contiguous blocks on a street where each block contains an apartment that you could move into.
// 		-a list representing buildings you are optimizing to live near by.

// The list of blocks contains information at every block about all of
// the buildings that are present and absent at the block in question.
// For instance, for every block, you might know whether a school, a pool, an office, and a gym are present.

// In order to optimize your life, you want to pick an apartment block such that
// you minimize the farthest distance you'd have to walk from your apartment to
// reach any of your required buildings.

// Write a function that takes in a list of contiguous blocks
// and a list of your required buildings and that returns the location(the index) of
// the block that's most optimal for you.

// If there are multiple most optimal blocks, your function can return the index of any one of them.

// Sample Input:
// let blocks = [
// 	{ gym: false, school: true, store: false },
// 	{ gym: true, school: false, store: false },
// 	{ gym: true, school: true, store: false },
// 	{ gym: false, school: true, store: false },
// 	{ gym: false, school: true, store: true },
// ];
// let reqs = ["gym", "school", "store"];

// Sample Output:
// 3 - at index 3, the farthest you'd have to walk to reach a gym, a school, or a store is 1 block;
// at any other index, you'd have to walk farther.

console.log("test" === "Test")

// Time: br
// Space: br
export default apartmentHunting = (blocks, reqs) => {
  // Initialize distances
  const distances = []

  for (let i = 0; i < blocks.length; i++) {
    distances[i] = {}

    for (let j = 0; j < reqs.length; j++) {
      distances[i][reqs[j]] = Infinity
    }
  }

  // Compute distances going right
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]] === false && blocks[i - 1]) {
        distances[i][reqs[j]] = distances[i - 1][reqs[j]] + 1
      } else if (blocks[i][reqs[j]] === true) {
        distances[i][reqs[j]] = 0
      }
    }
  }

  let smallestMax = Infinity
  let idx

  // Compute distances going left
  for (let i = blocks.length - 1; i >= 0; i--) {
    let currentMax = 0

    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]] === false && blocks[i + 1]) {
        distances[i][reqs[j]] = Math.min(
          distances[i + 1][reqs[j]] + 1,
          distances[i][reqs[j]]
        )
      }

      if (distances[i][reqs[j]] > currentMax) currentMax = distances[i][reqs[j]]
    }

    if (currentMax < smallestMax) {
      smallestMax = currentMax
      idx = i
    }
  }

  // Find smallest index
  return idx
}
