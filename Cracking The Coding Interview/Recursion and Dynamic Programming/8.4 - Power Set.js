// Problem Statement:
// Write a method to return all subsets of a set.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
//

let powerSet = (arr) => {
	let result = powerSetHelper(arr);
	result.push([]);
	return result;
};

let powerSetHelper = (arr, result = []) => {
	if (arr.length == 1) {
		result.push(arr[0]);
		return result;
	}

	powerSetHelper(arr.slice(1), result);

	let length = result.length;

	for (let i = 0; i < length; i++) {
		let item = result[i];
		result.push(arr[0] + item);
	}

	result.push(arr[0]);
	return result;
};

// Test:
console.log(powerSet(["A", "B", "C"])); // result

// Notes after implementing:
