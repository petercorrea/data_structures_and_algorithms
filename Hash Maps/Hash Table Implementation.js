function hash(key, tableSize) {
	let hash = 311;

	for (i = 0; i < key.length; i++) {
		hash = (hash * key.charCodeAt(i)) % tableSize;
	}

	return hash;
}

class HashTable {
	constructor() {
		this.size = 17;
		this.table = new Array(this.size);
		this.numberOfItems = 0;
	}

	_resize() {
		const newTable = new Array(this.table.length * 2);

		this.table.forEach((item) => {
			if (item) {
				item.forEach(([key, value]) => {
					const idx = hash(key, newTable.length);

					if (newTable[idx]) {
						newTable[idx].push([key, value]);
					} else {
						newTable[idx] = [[key, value]];
					}

					newTable[idx] = value;
				});
			}
		});

		this.table = newtable;
	}

	set(key, value) {
		const idx = hash(key, this.table.length);
		this.loadRatio = this.numberOfItems / this.table.length;

		if (loadRatio > 0.8) {
			this._resize();
		}

		if (this.table[idx]) {
			this.table[idx].push([key, value]);
			this.numberOfItems++;
		} else {
			this.table[idx] = [[[key, value]]];
		}
	}

	get(key) {
		const idx = hash(key, this.table.length);

		if (!this.table[idx]) {
			return null;
		}

		return this.table[idx].find((x) => x[0] === key)[1];
	}

	remove(key) {}
}
