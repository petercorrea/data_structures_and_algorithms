let x = 5; // 0101
let y = 6; // 0110

// Left shifts double numbers: pushes zeros
// console.log(x << 1);
// console.log(y << 1);

// Right Shift divdes by 2 and floors the result: append leftmost bit
// console.log(x >> 1);
// console.log(y >> 1);

// Unsigned Right Shift: append zeros thus always returns a positive numbers
let twoCompliment = (-3 >>> 0).toString(2); // twos compliment
// console.log(twoCompliment);

// &0 - turning off bits
let off_0 = 0 & 0;
let off_1 = 1 & 0;

// &1 - pass through bit
let num = 0b0101;
let mask = 0b0100;
// console.log((num & mask) > 0);

// |1 - turns on bits
let on_0 = 0 | 1;
let on_1 = 1 | 1;

// ^1 - flip bits
let flip_0 = 0 ^ 1;
let flip_1 = 1 ^ 1;

// Adding, subtracting, etc.
let a = 0b0001;
let b = 0b0100;
// console.log(((a - b) >>> 0).toString(2));
