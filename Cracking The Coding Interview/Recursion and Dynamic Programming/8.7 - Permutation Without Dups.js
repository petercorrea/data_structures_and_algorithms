// Problem Statement:
// Find all permutations of a string.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

let permsIter = (string, perms = []) => {
	let twoChars = string.substring(0, 2);
	let remaindingChars = string.substring(2);

	perms.push(twoChars[0] + twoChars[1]);
	perms.push(twoChars[1] + twoChars[0]);

	for (char of remaindingChars) {
		let permsLength = perms.length;

		for (let j = 0; j < permsLength; j++) {
			let perm = perms.shift();

			for (let i = 0; i <= perm.length; i++) {
				let newPerm = perm.substring(0, i) + char + perm.substring(i);
				perms.push(newPerm);
			}
		}
	}

	return perms;
};

let permsRecurs = (string, perms = []) => {
	if (string.length == 2) {
		return [string[0] + string[1], string[1] + string[0]];
	}

	for (let i = 0; i < string.length; i++) {
		let rightHalf = string.substring(0, i);
		let char = string[i];
		let leftHalf = string.substring(i + 1);

		let results = permsRecurs(rightHalf + leftHalf);

		for (idx in results) {
			results[idx] = char + results[idx];
			perms.push(results[idx]);
		}
	}

	return perms;
};

// Test
console.log(permsIter("abcd")); // result
console.log(permsRecurs("abcd"));

// Notes after implementing:
// Do not refernce the object length directly as the terminating condition
// for the loop. Save the value.
