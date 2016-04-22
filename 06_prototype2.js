function Circle () {
this._radius = null;  
}

Circle.prototype = {
  get radius() {
    return this._radius;
  },
  set radius(radius) {
    this._radius = radius
  },
  get area() {
    return Math.PI * this._radius * this._radius
  }
};

Circle.prototype.customFun = function(passVar){
  return passVar;
}

var newCir = new Circle();
newCir.radius = 3;
console.log(newCir.radius, newCir.area)
newCir.radius = 4;
console.log(newCir.radius, newCir.area)

var newCir2 = new Circle();
newCir.radius = 8;
console.log(newCir.radius, newCir.area)

console.log(newCir2.customFun("QWERT"));

var newCir3 = new Circle();
console.log(newCir3.radius, newCir3.area)