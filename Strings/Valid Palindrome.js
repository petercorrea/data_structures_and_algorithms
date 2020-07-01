str = "A man, a plan, a canal: Panama";

var isPalindrome = function (str) {
	// Guard against edge cases
	if (str.length == 0) {
		return true;
	}

	// Clean input and place into an array
	let pattern = /\W/gm;
	let replaced = str.replace(pattern, "");
	replaced = replaced.toLowerCase();
	let split = replaced.split("");

	// Using two pointers
	let s = 0;
	let f = split.length - 1;

	// Prevent pointers from crossing over
	while (s < f) {
		if (split[s] == split[f]) {
			s++;
			f--;
		} else {
			return false;
		}
	}

	return true;
};

isPalindrome(str);
