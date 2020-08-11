const { Node, dbLinkedList } = require("./Implementation.js");

function findMiddleNode(list) {
	let slow = list.head;
	let fast = list.head;

	while (fast !== list.tail && fast !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

let ll = new dbLinkedList();
ll.append("Peter");
ll.append("Michael");
ll.append("Miguel");
ll.append("Correa");
ll.prepend("Pedro");
console.log(findMiddleNode(ll));
