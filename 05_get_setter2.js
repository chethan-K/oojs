function Point () {
  this.xPos = 0;
  this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
  get : function(){
    return this.xPos + " " + this.yPos
  },
  set : function(str) {
    arr = str.toString().split(", ");
    this.xPos = arr[0] || ""
    this.yPos = arr[1] || ""
  }
});

var aPoint = new Point();
aPoint.pointPos = "1, 2";
console.log(aPoint.pointPos, aPoint.xPos);