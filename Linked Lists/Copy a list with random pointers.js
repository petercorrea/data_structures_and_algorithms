const { Node } = require("./Implementation.js");

class RandomNode extends Node {
	constructor(value, random) {
		super(value);
		this.random = random;
	}
}

let randomNode1 = new RandomNode("1");
let randomNode2 = new RandomNode("2");
let randomNode3 = new RandomNode("3");

randomNode1.next = randomNode2;
randomNode2.next = randomNode3;
randomNode1.random = randomNode3;
randomNode3.random = randomNode2;
randomNode2.random = randomNode1;

console.log(randomNode1);

function copy(head) {
	let current = head;
	while (current) {
		let copyNode = new Node(current.value);
		copyNode.next = current.next;
		current.next = copyNode;
		current = current.next.next;
	}

	current = head.next;
	let original = head;
	while (current) {
		current.random = original.random;
		current = current.next;
		original = original.next;
	}

	original = head;
	while (original) {
		original.next = original.next.next;
		original = original.next;
	}

	return head;
}

copy(randomNode1);
