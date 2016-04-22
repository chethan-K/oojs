function Pizza (prize) {
	this.prize = prize || 10;
}

Pizza.prototype.getPrize = function() {
	return this.prize;
};

function ExtraCheeze(pizza){
	var prevPrize = pizza.prize;
	pizza.prize = prevPrize + 1
}

var newPizza = new Pizza(12);
console.log(newPizza.prize);
ExtraCheeze(newPizza);
console.log(newPizza.prize);