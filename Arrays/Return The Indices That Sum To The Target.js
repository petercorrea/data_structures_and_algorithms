// Return the indices of the two values that sum to the target.
let nums = [2, 3, 1, 5];
let target = 8; //[1, 3]

// Brute Force
// Time: O(n)
// Space: O(n)
function bruteForce(arr, tar) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == tar) {
				return [i, j];
			}
		}
	}
}
bruteForce(nums, target);

// HashMap
// Time: O(n)
// Space: O(n)

// x + compliment = target
function hashMap(arr, tar) {
	let map = new Map();

	for (let i = 0; i < arr.length; i++) {
		// Check for the compliment of the target
		if (map.has(tar - arr[i])) {
			// return the compliment's idx, and the current idx being iterated
			return [map.get(tar - arr[i]), i];
		} else {
			// store the current idx with its value as the key, which will serve as the compliment to be found later
			map.set(arr[i], i);
		}
	}

	return [];
}
hashMap(nums, target);
