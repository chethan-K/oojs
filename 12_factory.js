function Sword (desc) {
  this.weaponType = "sword"
  this.metal    = desc.metal || "Steel";
  this.style    = desc.style || "Long sword";
}

function Bow (desc) {
  this.weaponType = "bow"
  this.metal   = desc.material || "Wood";
  this.style    = desc.style || "Long bow";
}


function WeaponFactory(){}

WeaponFactory.prototype.makeWeapon = function(desc) {
  weaponClass = null;
  if(desc.weaponType == "sword"){
    weaponClass = Sword
  } else if (desc.weaponType == "bow") {
    weaponClass = Bow;
  }else {
    return false;
  };

  return new weaponClass(desc);
};

var weaponFactory = new WeaponFactory();
var blade = weaponFactory.makeWeapon({
  weaponType : "sword",
  metal      : "Dark iron",
  style      : "Scythe"
})

console.log(blade.metal);