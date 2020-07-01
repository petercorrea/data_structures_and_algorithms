// Given a document, implement an algorithm to count and print the
// number of word occurrences.

// Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

let s =
	"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?";

function countSubstring() {
	let pattern = /[A-Z]*[a-z]*/;
	let map = new Map();
	let result = " ";

	for (let idx = 0; idx < s.length; idx++) {
		if (s[idx] == " ") {
			let sub = s.substring(0, idx);

			sub = sub.trim();
			sub = pattern.exec(sub)[0];
			sub = sub.toLocaleLowerCase();
			s = s.substring(idx);
			idx = 0;
			map.set(sub, map.has(sub) ? map.get(sub) + 1 : 1);
		}
	}

	s = s.trim();
	s = s.toLocaleLowerCase();
	s = pattern.exec(s)[0];
	map.set(s, map.has(s) ? map.get(s) + 1 : 1);

	for (let [word, count] of map.entries()) {
		let sub2 = `${word} = ${count}, `;
		result = result.concat(sub2);
	}

	console.log(result);
}

countSubstring(s);
