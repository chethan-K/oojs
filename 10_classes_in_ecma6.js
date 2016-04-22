class Animal {
	constructor(name) {
		this.name = name;
	}

	static getAnimal(){
		return new Animal("No name");
	}
}

class Dog extends Animal{
	constructor(name, owner){
		super(name);
		this.owner = owner;
	}
}

var rover = new Dog("rover", "povel");
console.log(rover.name);
console.log(rover.owner);