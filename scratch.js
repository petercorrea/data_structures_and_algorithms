const LCS = function (string1, string2) {
	function LCSR(str1, str2, i1, i2, count) {
		if (i1 == str1.length || i2 == str2.length) {
			return count;
		}

		if (str1[i1] == str2[i2]) {
			count = LCSR(str1, str2, i1 + 1, i2 + 1, count + 1);
		}

		const count2 = LCSR(str1, str2, i1 + 1, i2, 0);
		const count3 = LCSR(str1, str2, i1, i2 + 1, 0);

		return Math.max(count, Math.max(count2, count3));
	}

	return LCSR(string1, string2, 0, 0, 0);
};

console.log(LCS("passport", "ppsspt"));
