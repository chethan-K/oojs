function Mammal (name) {
	var privateVar = "private Value"
	this.name 	 = name;
	this.getInfo = function () {
		return "Mammal name is " + this.name;
	}
}

Mammal.prototype.sound = "GRRRR!";
Mammal.prototype.makeSound = function() {
	
	return this.name + " says " + this.sound;
};

var grover = new Mammal("Grover");
console.log(grover.makeSound())