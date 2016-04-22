var address = {
  street  : "No street",
  city    : "No city",
  state   : "No state",

  get getAddress(){
    return this.street + " " + this.city + " " + this.state;
  },

  set setAddress(str){
    arr = str.toString().split(",");
    this.street = arr[0] || "";
    this.city   = arr[1] || "";
    this.state  = arr[2] || "";
  }

}

address.setAddress = "HMT Layout, Banglore, Karnataka"  
console.log(address.getAddress)
console.log(address.city)
address.setAddress = "HMT Layout, Banglore2, Karnataka"
console.log(address.city)
