function c(re, im) {
	this.re = re;
	this.im = im;

}

c.prototype = {

	re: 0,
	im: 0,

	add: function(x) {
		var z = c.from(x);
		return new c(this.re+z.re, this.im+z.im);	
	},

	subtract: function(x) {
		var z = c.from(x);
		return new c(this.re-z.re, this.im-z.im);	
	},

	multiply: function(x) {
		var z = c.from(x);
		return new c(this.re*z.re - this.im*z.im, this.re*z.im + this.im*z.re);	
	},

	divide: function(x) {
		var z = c.from(x);
		var d = z.re*z.re + z.im*z.im;

		return new c( 
				(this.re*z.re + this.im*z.im)/d,
				(this.im*z.re - this.re*z.im)/d);
	},

	power: function(x) {
		var z = c.from(x);

	},

	sqrt: function(x) {

	},			  

	normsq: function() {
		return (this.re*this.re + this.im*this.im);
	},

	modulus: function() {
		return Math.sqrt(this.normsq());
	},

	conjugate: function() {
		return new c(this.re, -this.im);
	},

	negative: function() {
		return new c(-this.re, -this.im);
	},

	// warning: unreliable, as rounding errors can lead to tiny differences
	equals: function(x) {
		var z = c.from(x);
		return (this.re == z.re && this.im == z.im);
	},

	toString: function() {
		var str = '';
		str += this.re;
		str += this.im < 0 ? this.im +'i': '+' + this.im + 'i';
		return str;
	}	
}

c.from = function() {
	if(arguments.length == 1) {
		if(typeof(arguments[0]) == 'number') return new c(arguments[0], 0);
		else if(arguments[0] instanceof c) return arguments[0];
	} else if(arguments.length == 2) return new c(arguments[0], arguments[1]);
};

