function qubit(zero, one) {
	this.zero = c.from(zero);
	this.one = c.from(one);	
}

qubit.prototype = {
	
	normalize: function() {
		var d = Math.sqrt(this.zero.normsq() + this.one.normsq());

		this.zero = this.zero.divide(d);
		this.one = this.one.divide(d);
		return this;
	}
}

