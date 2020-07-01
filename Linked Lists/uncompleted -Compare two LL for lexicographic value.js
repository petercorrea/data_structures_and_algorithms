// Given 2 linked lists, where each node in each linked list represents
// a character in a string, write a function compare() that compares the 2 strings,

// returns 0 if both strings are the same,
// 1 if the 1st linked list is lexicographically greater,
// and -1 if the 2nd string is lexicographically greater.

// Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
// Output: `1`
// Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// Output: `0`
// Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
// Output: `-1`

function LLNode(val, next) {
	this.val = val;
	this.next = next;
}

let word1 = new LLNode("P", new LLNode("e", new LLNode("t")));
let word2 = new LLNode("P", new LLNode("e"));

function compareLetters(a, b) {
	if (a == b) {
		return 0;
	}

	if (a > b) {
		return -1;
	}

	return 1;
}

function compareWords(word1, word2) {
	while (true) {
		if (!word1) return 1;
		if (!word2) return -1;

		val1 = word1.val;
		val2 = word2.val;

		console.log(val1, val2);

		let value = compareLetters(val1, val2);

		if (value != 0) {
			return value;
		}

		word1 = word1.next;
		word2 = word2.next;
	}
}

compareWords(word1, word2);
