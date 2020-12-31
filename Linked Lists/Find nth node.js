const { Node, dbLinkedList } = require("./LinkedList.js");

function findNthNode(list, nth) {
	let current = list.head;
	let counter = 0;

	while (current && counter !== nth) {
		current = current.next;
		counter++;
	}

	if (counter == nth) {
		return current;
	}

	return false;
}

let ll = new dbLinkedList();
ll.append("Peter");
ll.append("Michael");
ll.append("Miguel");
ll.append("Correa");
ll.prepend("Pedro");
ll.delete("Pedro");

console.log(findNthNode(ll, 2));
