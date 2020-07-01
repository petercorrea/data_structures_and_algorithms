// You have an array of logs.  Each log is a space delimited string of words.

// For each log, the first word in each log is an alphanumeric identifier.  Then, either:

// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

// Reorder the logs so that all of the letter-logs come before any digit-log.
// The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.
// The digit-logs should be put in their original order.

// Return the final order of the logs.

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

const sortLogs = (logs) => {
	// Slice out body
	const body = (s) => s.slice(s.indexOf(" ") + 1);

	// Determine if it's a digits log
	const isNum = (s) => /\d/.test(s);

	// Initialize arrays
	let logs_of_digits = [];
	let logs_of_letters = [];

	// Compare function for logs of letters
	const compare = (a, b) => {
		// Compare body, if same, compare identifier
		const result = body(a).localeCompare(body(b));

		if (result !== 0) return result;
		return a.localeCompare(b);
	};

	// Iterate through data and place into respective arrays
	for (const log of logs) {
		if (isNum(body(log))) logs_of_digits.push(log);
		else logs_of_letters.push(log);
	}

	return [...logs_of_letters.sort(compare), ...logs_of_digits];
};

let arr = [
	"dig1 8 1 5 1",
	"let1 art can",
	"dig2 3 6",
	"let2 own kit dig",
	"let3 art zero",
];
sortLogs(arr);
