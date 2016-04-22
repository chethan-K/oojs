function Hero(name){
  if(typeof Hero.instance === 'object'){
    return Hero.instance;
  }
  this.name = name;
  Hero.instance = this;
  return this;
}

var hero1 = new Hero('hero1')
console.log(hero1.name);


var hero2 = new Hero('hero2')
console.log(hero2.instance);