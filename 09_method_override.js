function Vehicle (name) {
  this.name = "Vehicle";
}

Vehicle.prototype = {
  drive : function  () {
    return this.name + " drives forward";
  },

  stop : function  () {
    return this.name + " stops";
  }
}

function Truck(name){
  this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck

Truck.prototype.drive = function(){
  var valFromSuperClass = Vehicle.prototype.drive.call(this);
  return valFromSuperClass + " through a field";
}

var jeep = new Truck("jeep");
console.log(jeep.name);
console.log(jeep.drive());
console.log(jeep.stop());