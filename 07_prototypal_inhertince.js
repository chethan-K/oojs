/*
Animal : name
Dog.prototype = Animal
Dog : bark()
*/

function Animal () {
  this.name = "Animal";
  this.toString = function(){
    return "I am " + this.name;
  };
}

function Dog (aName) {
  this.name = aName;
}

function Cat (aName) {
  this.name = aName;
}

Dog.prototype = new Animal
Dog.prototype.constructor = Dog


Cat.prototype = new Animal
Cat.prototype.constructor = Cat


Animal.prototype.sound = "Grrr"
Animal.prototype.getSound = function (){
  return this.name + " Says " + this.sound;
}

Dog.prototype.sound = "Bow Bow"
Dog.prototype.getSound = function(){
  return this.name + " Says " + this.sound;
}

dog = new Dog("dog");

console.log(dog.name)
console.log(dog.toString())
console.log(dog.getSound())

console.log("Dog is an instance of Animal " + (dog instanceof Animal));