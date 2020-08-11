const { Node } = require("./@Implementation.js");

function getDecimalValue(head) {
	let result = 0;

	while (head) {
		result = result * 2 + head.value;
		head = head.next;
	}

	return result;
}

let node1 = new Node(1);
let node2 = new Node(1);
let node3 = new Node(0);

node1.next = node2;
node2.next = node3;

console.log(getDecimalValue(node1));
