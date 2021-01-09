// Problem Statement:
// Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:
//
let permNoDups = (string) => {
	let answers = [];

	let recurse = (currPerm, remainingChars) => {
		if (remainingChars.length === 0) {
			answers.push(currPerm);
		} else {
			let usedChars = {};
			for (let i = 0; i < remainingChars.length; i++) {
				if (!usedChars[remainingChars.charAt(i)]) {
					usedChars[remainingChars.charAt(i)] = true;
					recurse(
						currPerm + remainingChars.charAt(i),
						remainingChars.slice(0, i) + remainingChars.slice(i + 1)
					);
				}
			}
		}
	};
	recurse("", string);
	return answers;
};

// Test:
let test1 = "aaa";
let test2 = "abc";
let test3 = "aba";

console.log(permNoDups(test1));
console.log(permNoDups(test2));
console.log(permNoDups(test3));

// Notes after implementing:
