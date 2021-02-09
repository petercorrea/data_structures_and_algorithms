// Given an array of unsorted student scores, determine the minimum amount of rewards to provide.
// Assume all scores are unique

// Rules:
// -	every student at a minimum needs to recieve 1 reward
// -	any student student with a higher score than their adj. score must stricly revieve more rewards
// -	any student with a lower score than their adj. score must stricly recieve fewer rewards

// Time: nlogn
// Space: n
function minRewards(scores) {
	let map = new Map();
	let rewards = Array(scores.length).fill(1);
	let sorted = [];
	let total = 0;

	for (let i = 0; i < scores.length; i++) {
		// value, index
		map.set(scores[i], i);
		sorted.push(scores[i]);
	}

	// Sorted array of values to use with map
	sorted.sort((a, b) => a - b);
	console.log(sorted);

	for (let element of sorted) {
		let index = map.get(element);
		let rightIdx = index;
		let leftIdx = index;

		while (scores[leftIdx - 1] > scores[leftIdx]) {
			rewards[leftIdx - 1] = Math.max(
				rewards[leftIdx] + 1,
				rewards[leftIdx - 1]
			);
			leftIdx--;
		}

		while (scores[rightIdx] < scores[rightIdx + 1]) {
			rewards[rightIdx + 1] = Math.max(
				rewards[rightIdx] + 1,
				rewards[rightIdx + 1]
			);
			rightIdx++;
		}
	}

	for (element of rewards) {
		total += element;
	}

	return total;
}

// Time: n
// Space: n
function minRewards(scores) {
	let totalRewards = 0;
	let rewards = [];

	for (let i = 0; i < scores.length; i++) {
		if (scores[i - 1] < scores[i]) {
			rewards.push(rewards[i - 1] + 1);
		} else {
			rewards.push(1);
		}
	}

	for (let i = scores.length - 1; i >= 0; i--) {
		if (scores[i] > scores[i + 1]) {
			rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
		}
	}

	for (let i = 0; i < rewards.length; i++) {
		totalRewards += rewards[i];
	}

	return totalRewards;
}
