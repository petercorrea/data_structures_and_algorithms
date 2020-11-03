const LCS = function (string1, string2) {
	const memo = [];

	const LCSR = function (str1, str2, i1, i2) {
		if (i1 == str1.length || i2 == str2.length) {
			return 0;
		}

		memo[i1] = memo[i1] || [];

		if (typeof memo[i1][i2] == "undefined") {
			if (str1[i1] == str2[i2]) {
				memo[i1][i2] = 1 + LCSR(str1, str2, i1 + 1, i2 + 1);
			} else {
				const c1 = LCSR(str1, str2, i1 + 1, i2);
				const c2 = LCSR(str1, str2, i1, i2 + 1);
				memo[i1][i2] = Math.max(c2, c2);
			}
		}

		return memo[i1][i2];
	};

	return LCSR(string1, string2, 0, 0);
};

console.log(LCS("passport", "ppsspt"));
