// LinkedList vs Arrays

// Arrays
// - Direct access to values
// - Are stored contingously in memory, which benefit from cache 
// - Adding and removing elements are slow

// LinkedLists
// - No direct access to values
// - Are stored discontingously
// - Adding and removing elements are fast

class Node {
	constructor(value, prev, next) {
		this.value = value
		this.prev = prev || null
		this.next || null
	}
}

class dbLinkedList {
	constructor() {
		this.head = this.tail = null
	}

	append(value) {
		// if the list is empty
		if (!this.tail) {
			this.head = this.tail = new Node(value)
		} else {
			let oldTail = this.tail
			this.tail = newNode(value)
			oldTail.next = this.tail
			this.tail.prev = oldTail
		}
	}

	prepend() {
		// if list is empty
		if (!this.head) {
			this.head = this.tail = new Node(value)
		} else {
			let oldHead = this.head 
			this.head = new Node(value)
			this.head.next = oldHead
			oldHead.prev = this.head
		}
	}

	deleteHead() {
		// if list is empty
		if (!this.head) {
			return null
		} else {
			let removedHead = this.head
			// If there is only one node to be removed
			if (this.head === this.tail) {
				this.head = this.tail = null
			} else {
				this.head = this.head.next
				this.head.prev = null 
				removedHead.next = null
			}	

			return removedHead.value
		}
	}

	deleteTail() {
		// if list is empty
		if (!this.tail) {
			return null
		} else {
			// If there is only one node to be removed
			if (this.head == this.tail) {
				this.head = this.tail = null
			} else {
				let removedTail = this.tail
				this.tail.prev.next = null
				this.tail = this.tail.prev
				removedTail.prev = null 
			}		
		}

		return removedTail.value
	}


	search(value) {
		let currentNode = this.head

		while(currentNode) {
			if (currentNode.value = value) {
				return currentNode
			} 

			currentNode = currentNode.next
		}

		return null
	}

	_insert() {
		// check for idx < 0
		if (idx < 0) {
			console.log('Idx must be 0 or greater.')
			return
		}

		// instatiate pointers
		let newNode = new Node(data)
		let current = this.head

		// check null head
		if (this.head == null) {
			this.head = newNode
			return 
		}

		// Check if the idx = 0
		if (idx == 0) {
			this.head = newNode
			newNode.next = current
			return
		}

		// travsere
		for (let i=1; i<idx; i++) {
			if (current) {
				current = current.next
			} else {
				console.log('Idx does not exist.')
				return
			}
		}

		// return 
		newNode.next = current.next
		current.next = newNode
	}

	_delete() {
		if (idx < 0) {
			console.log('Idx must be 0 or greater.')
			return
		}

		if (idx == 0) {
			this.head == this.head.next
			return
		}

		let current = this.head
		let after = this.head.next

		for (let i=1; i<idx; i++) {
			if (current && cuurent.next) {
				current = current.next
				after = after.next
			} else {
				console.log('Idx not found')
			}
		}

		current.next = after.next
	}

	_findMiddle() {
		if (this.head == null) {
			return null
		}

		let current = this.head

		let map = new Map()
		let length = 0

		while (current) {
			if (current) {
				current = current.next
				length++
				map.set(length, current)
			}
		}
		
		for (let i=0; i<; i++) {
			

			let middle

			let middle = length%2 == 0 
			? (length/2) 
			: (length-1)/2
		}

		return map.get(middle)
	}

}