// Problem Statement:
//Write a recursive function to multiply two positive integers without using the * operator (or / operator). You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
let multiply = (a, b) => {
	let smaller = a < b ? a : b;
	let larger = a > b ? a : b;
	let result;

	if (smaller % 2 == 0) {
		result = multiplyHelper(smaller >> 1, larger);
		return result + result;
	} else {
		result = multiplyHelper(smaller - 1, larger);
		return result + larger;
	}
};

let multiplyHelper = (a, b) => {
	if (a <= 1) {
		return b;
	}
	let result = multiplyHelper(a >> 1, b);
	return result + result;
};

// Test:
console.log(multiply(10, 3)); // result

// Notes after implementing:
