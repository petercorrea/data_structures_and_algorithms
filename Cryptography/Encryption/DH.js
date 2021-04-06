// Diffie-Hellman
class Person {
	constructor(name) {
		this.name = name;
		this.msg = "";
		this.private = "";
		this.public = "";
		this.Prime = "";
		this.g = "";
		this.common = "";
		this.recieved = "";
	}

	generatePrivateKey(k) {
		this.private = k;
	}

	generatePublicKey() {
		let k = this.g ** this.private % this.Prime;
		this.public = k;
	}

	generateCommonKey() {
		this.common = this.recieved ** this.private % this.Prime;
	}

	static shareSecrets(person1, person2, num1, num2) {
		person1.Prime = num1;
		person1.g = num2;

		person2.Prime = num1;
		person2.g = num2;
	}

	static sharePublicKeys(p1, p2) {
		p2.recieved = p1.public;
		p1.recieved = p2.public;
	}
}

let Alice = new Person("Alice");
let Bob = new Person("Bob");

Alice.generatePrivateKey(3);
Bob.generatePrivateKey(7);
Person.shareSecrets(Alice, Bob, 23, 5);
Alice.generatePublicKey();
Bob.generatePublicKey();
Person.sharePublicKeys(Alice, Bob);
Alice.generateCommonKey();
Bob.generateCommonKey();
