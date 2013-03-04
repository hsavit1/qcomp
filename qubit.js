function qubit(zero, one) {
	this.zero = c.from(zero);
	this.one = c.from(one);

	this.normalize();	


}

qubit.prototype = {
	operators: {
		'I' : [[new c(1,0), new c(0,0)],[new c(0,0), new c(1,0)]],
		'X' : [[new c(0,0), new c(1,0)],[new c(1,0), new c(0,0)]],
		'Y' : [[new c(0,0), new c(0,-1)],[new c(0,1), new c(0,0)]],
		'Z' : [[new c(1,0), new c(0,0)],[new c(0,0), new c(-1,0)]]
	},


	normalize: function() {
		var d = Math.sqrt(this.zero.normsq() + this.one.normsq());

		this.zero = this.zero.divide(d);
		this.one = this.one.divide(d);
		return this;
	},

	applyGate: function(gate) {
		var vector = [this.zero, this.one];
		var result = lin.dot(this.operators[gate], vector);
		this.zero = result[0];
	   	this.one = result[1];
		return this;
	},

	X: function() {
		return this.applyGate('X');
	},

	Y: function() {
		return this.applyGate('Y');
	},

	Z: function() {
		return this.applyGate('Z');
	},

	I: function() {
		return this.applyGate('I');
	},
	toString: function() {
		return '('+this.zero.toString()+') |0> + ('+this.one.toString()+') |1>';
	}
};

