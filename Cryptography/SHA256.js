// SHA256
// Utilities
function toBinary(string) {
	let result = string.split("");

	result.forEach((e, i, a) => {
		// convert to UTF-16BE binary string
		a[i] = e.charCodeAt(0).toString(2);

		if (a[i].length < 8) {
			a[i] = a[i].padStart(8, "0");
		} else if (a[i].length < 16) {
			a[i] = a[i].padStart(16, "0");
		} else if (a[i].length < 24) {
			a[i] = a[i].padStart(24, "0");
		} else if (a[i].length < 32) {
			a[i] = a[i].padStart(32, "0");
		}
	});

	return result.join("");
}

function ROTR(x, n) {
	return (x >>> n) | (x << (32 - n));
}

function SR(x, n) {
	return (result = x >>> n);
}

// Hashing Pipeline
function preprocess(string) {
	// convert to utf-16 binary string
	let binary = toBinary(string);
	let l = binary.length;

	// append a 1 bit
	binary = binary + "1";

	// obtain padding for a length to equal a multiple of 512
	let padAmount = 512 - (binary.length % 512);

	// pad and remove 64 bits
	let padded = binary.padEnd(binary.length + padAmount, "0");
	padded = padded.slice(0, -64);

	// add 64bits representing original length of msg;
	padded += l.toString(2).padStart(64, "0");
	return padded;
}

function generateSha256Hash(string) {
	// constants
	let _h = [
		// the first 32 bits of the fractional parts of the square roots of the first 8 primes (2 - 19)
		0x6a09e667,
		0xbb67ae85,
		0x3c6ef372,
		0xa54ff53a,
		0x510e527f,
		0x9b05688c,
		0x1f83d9ab,
		0x5be0cd19,
	];

	let _k = [
		// the first 32 bits of the fractional parts of the cube roots of the first 64 primes (2 - 311)
		0x428a2f98,
		0x71374491,
		0xb5c0fbcf,
		0xe9b5dba5,
		0x3956c25b,
		0x59f111f1,
		0x923f82a4,
		0xab1c5ed5,
		0xd807aa98,
		0x12835b01,
		0x243185be,
		0x550c7dc3,
		0x72be5d74,
		0x80deb1fe,
		0x9bdc06a7,
		0xc19bf174,
		0xe49b69c1,
		0xefbe4786,
		0x0fc19dc6,
		0x240ca1cc,
		0x2de92c6f,
		0x4a7484aa,
		0x5cb0a9dc,
		0x76f988da,
		0x983e5152,
		0xa831c66d,
		0xb00327c8,
		0xbf597fc7,
		0xc6e00bf3,
		0xd5a79147,
		0x06ca6351,
		0x14292967,
		0x27b70a85,
		0x2e1b2138,
		0x4d2c6dfc,
		0x53380d13,
		0x650a7354,
		0x766a0abb,
		0x81c2c92e,
		0x92722c85,
		0xa2bfe8a1,
		0xa81a664b,
		0xc24b8b70,
		0xc76c51a3,
		0xd192e819,
		0xd6990624,
		0xf40e3585,
		0x106aa070,
		0x19a4c116,
		0x1e376c08,
		0x2748774c,
		0x34b0bcb5,
		0x391c0cb3,
		0x4ed8aa4a,
		0x5b9cca4f,
		0x682e6ff3,
		0x748f82ee,
		0x78a5636f,
		0x84c87814,
		0x8cc70208,
		0x90befffa,
		0xa4506ceb,
		0xbef9a3f7,
		0xc67178f2,
	];

	// for each 512bit block of data
	while (string.length > 0) {
		// each block is an array of 64 slices of 32bit words
		let queue = [];

		// add 16 slices of data
		for (let i = 0; i < 16; i++) {
			queue.push(parseInt(string.slice(0, 32), 2));
			string = string.slice(32);
		}

		// add 48 slices of zeros
		for (let i = 0; i < 48; i++) {
			// "00000000000000000000000000000000"
			queue.push(0);
		}

		// for each zero-ed slice do the following
		for (let i = 16; i < 64; i++) {
			let s0 =
				ROTR(queue[i - 15], 7) ^ ROTR(queue[i - 15], 18) ^ SR(queue[i - 15], 3);

			let s1 =
				ROTR(queue[i - 2], 17) ^ ROTR(queue[i - 2], 19) ^ SR(queue[i - 2], 10);

			queue[i] = s0 + s1 + queue[i - 16] + queue[i - 7];
			queue[i] = queue[i] % 2 ** 32 >>> 0;
		}

		// initialize a-h with h[0] - h[7]
		let a = _h[0],
			b = _h[1],
			c = _h[2],
			d = _h[3],
			e = _h[4],
			f = _h[5],
			g = _h[6],
			h = _h[7];

		// Compression Loop: '>>> 0' for addition modulo 2^32
		for (let i = 0; i < 64; i++) {
			let S0 = ROTR(a, 2) ^ ROTR(a, 13) ^ ROTR(a, 22);
			let S1 = ROTR(e, 6) ^ ROTR(e, 11) ^ ROTR(e, 25);

			let a_b = a & b;
			let a_c = a & c;
			let b_c = b & c;
			let major = a_b ^ a_c ^ b_c;

			let e_f = e & f;
			let not_e = ~e;
			let choice = e_f ^ (not_e & g);

			let t1 = h + S1 + choice + _k[i] + queue[i];
			let t2 = S0 + major;

			h = g;
			g = f;
			f = e;
			e = (d + t1) >>> 0;
			d = c;
			c = b;
			b = a;
			a = (t1 + t2) >>> 0;
		}

		// update hash values
		_h[0] = (_h[0] + a) >>> 0;
		_h[1] = (_h[1] + b) >>> 0;
		_h[2] = (_h[2] + c) >>> 0;
		_h[3] = (_h[3] + d) >>> 0;
		_h[4] = (_h[4] + e) >>> 0;
		_h[5] = (_h[5] + f) >>> 0;
		_h[6] = (_h[6] + g) >>> 0;
		_h[7] = (_h[7] + h) >>> 0;
	}

	// get final hex strings
	let r0 = _h[0].toString(16),
		r1 = _h[1].toString(16),
		r2 = _h[2].toString(16),
		r3 = _h[3].toString(16),
		r4 = _h[4].toString(16),
		r5 = _h[5].toString(16),
		r6 = _h[6].toString(16),
		r7 = _h[7].toString(16);

	// return concat hex strings
	return r0
		.concat(r1)
		.concat(r2)
		.concat(r3)
		.concat(r4)
		.concat(r5)
		.concat(r6)
		.concat(r7);
}

// Example
function SHA256(string) {
	let msg = preprocess(string);
	return generateSha256Hash(msg);
}

module.exports = {
	SHA256,
};

// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
console.log(SHA256("hello world"));
