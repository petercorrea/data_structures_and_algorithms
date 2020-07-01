function Node(val, next, random) {
	this.val = val;
	this.next = next;
	this.random = random;
}

// Create original inout
let param = new Node(3, null, null);
let node2 = new Node(4, null, param);
let node3 = new Node(2, null, null);
param.next = node2;
node2.next = node3;

function copyRecursivelyWithHash(head) {
	const visited = new Map();

	function copy(node) {
		// If null return null
		if (!node) return null;
		// If we have made a reference, return the clone node
		if (visited.has(node)) return visited.get(node);

		// Create clone Node
		let newNode = new Node(node.val);

		// Pass node through a hash table,
		// Set reference from Node to clone Node,
		// we will use this to return the clone nodes later on
		visited.set(node, newNode);

		// Recursively go into the node.next,
		// The recursion will continue until the last clone has been made
		// this will returned the node.next in reverse order
		newNode.next = copy(node.next);

		// As we bring back each clone node,
		// we'll set the random pointer
		// Recursively go into the node.random,
		// this will return the referenced clone node from the hash table
		newNode.random = copy(node.random);

		// Return the newNode
		return newNode;
	}
	return copy(head);
}
// copyRecursivelyWithHash(param)

var copyIterativelyWithHash = function (head) {
	if (head == null) return null;
	let map = new Map();
	let curNode = head;

	// Iterate over the old list's nodes
	while (curNode != null) {
		// Add to the map Old Node ->  New Node. The new node still has old references though
		map.set(curNode, new Node(curNode.val, curNode.next, curNode.random));
		curNode = curNode.next;
	}

	// Iterate through the new nodes that were added
	// and because they still have references from the old list
	// we can retrieve the newly created nodes using the map
	for (let newNode of map.values()) {
		if (newNode.next != null) newNode.next = map.get(newNode.next);
		if (newNode.random != null) newNode.random = map.get(newNode.random);
	}

	// Get the head of the new list - this is what we'll return
	let newHead = map.get(head);

	// return the new head
	return newHead;
};
// copyIterativelyWithHash(param)

var copyIterativelyWithPointers = function (head) {
	if (!head) return null;
	let curr = head;
	while (curr) {
		let copy = new Node(curr.val, curr.next, null);
		// copy.next = curr.next;
		curr.next = copy;
		curr = curr.next;
		curr = curr.next;
	}

	curr = head;
	while (curr) {
		curr.next.random = curr.random ? curr.random.next : null;
		curr = curr.next.next;
	}

	curr = head;
	let result = head.next;
	let resPtr = result;
	while (curr) {
		curr.next = curr.next.next;
		curr = curr.next;
		resPtr.next = resPtr.next ? resPtr.next.next : null;
		resPtr = resPtr.next;
	}

	return result;
};
copyIterativelyWithPointers(param);
