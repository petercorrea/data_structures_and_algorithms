// // Write a function that takes and swaps two integers

// x = 1011;
// y = 1001;

// x = x ^ y;
// x = 1011 ^ 1001 = 0010;

// y = x ^ y = x;
// y = x ^ y ^ y = x;
// y = 0010 ^ 1001 = 1011;

// x = x ^ y = y;
// x = x ^ y ^ (x ^ y ^ y) = y;
// y = 0010 ^ 1011 = 1001;

export const swap = (int1, int2) => {
  int1 ^= int2
  int2 ^= int1
  int1 ^= int2

  const result = [int1, int2]
  return result
}

console.log(swap(12, 24))
