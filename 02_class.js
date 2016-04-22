function Person (firstName, lastName) {
  var localVar = "local"
  this.firstName  = firstName;
  this.lastName   = lastName;
  
  this.info = function () {
    console.log("Hi...!! " + this.firstName + " " + this.lastName);
    console.log("Display local var", localVar);
    tempFunction("qwert");
  }
  
  tempFunction = function (val) {
    console.log(val)
  } 
}

var chethan = new Person("chethan", "K");

chethan.info();
console.log("chethan.firstName", chethan.firstName);
console.log("chethan.localVar", chethan.localVar)
console.log("chethan is person " + (chethan instanceof Person))
chethan.firstName = "chethan changed";
console.log("Chethan changed name", chethan.firstName);

console.log("Make a call to local function!!");
// chethan.tempFunction("123") 



var chethan2 = new Person("chethan2", "K2");
chethan2.info();
console.log("chethan2.firstName", chethan.firstName);
console.log("chethan2.localVar", chethan.localVar)
chethan.info();

console.log("Number of arguments a function receive : ");
console.log(Person.length);