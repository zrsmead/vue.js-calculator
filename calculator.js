document.addEventListener("DOMContentLoaded", function(event) {
	var app = new Vue({
		el: '#app',
		data: {
			buttons: ["C", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "+", "-", "X", "/", "="],
			operators: ["+", "-", "*", "X", "/"],
			expression: '0',
			answered: false
		},
		methods: {
			enterSymbol: function(symbol) {
				// if the current input symbol is a number 
				if (Number.isInteger(symbol)) {
					if (this.expression == '0' || this.answered == true) {
						console.log("Answer triggered")
						this.answered = false;
						this.expression = String(symbol);
					} else {
						this.expression += String(symbol);
					};

				// if the current input symbol is an operator and the last input was not an operator
				} else if (this.operators.includes(symbol) 
						&& !(this.operators.includes(this.expression[this.expression.length - 1]))
						&& this.expression.length > 0) // and you aren't starting the expression with an operator
				{	
					if (symbol == "X") {
						this.expression += "*";
					} else {
						this.expression += symbol;
					};
				} else if (symbol == "=") {
					return this.evaluate();
				} else if (symbol == "C") {
					this.expression = '0';
					this.answered = false;
				};
			},

			evaluate: function() {
				this.expression = eval(this.expression);
				this.answered = true;
				console.log(this.answered);
			}
		}
	});
});


