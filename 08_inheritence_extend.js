function extend (Child, Parent) {
  var Temp = function(){}
  Temp.prototype = Parent.prototype;
  Child.prototype = new Parent;
  Child.prototype.constructor = Child;
}

function Animal(){
  this.name = "Animal";
  this.toString = function(){
    return "I am " + this.name;
  }
}

function Dog(){
  this.name = "dog";
}

extend(Dog, Animal);

var dog = new Dog();

console.log(dog.toString());