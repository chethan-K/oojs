var student = {
  name: "Chethan",
  sayPresent : function() {
    return "My name is " + this.name;
  },
  address : {
    street: "salai",
    city: "Banglore"
  }
};

console.log(student.sayPresent());
console.log(student.name);
console.log(student.address.city);

