let permutations = (str, prefix) => {
	if (str.length == 0) {
		console.log("result", prefix);
	} else {
		for (let i = 0; i < str.length; i++) {
			let rem = str.substring(0, i) + str.substring(i + 1);
			permutations(rem, prefix + str.charAt(i));
		}
	}
};

console.log(permutations("abc", ""));
