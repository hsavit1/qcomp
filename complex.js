function c(re, im) {
	this.re = re;
	this.im = im;

}

c.prototype = {

	re: 0,
	im: 0,

	add: function() {
		// if there is one input variable, it is either a real number or of type c
		if(arguments.length == 1) {
			if(typeof(arguments[0]) == 'number') {
				return new c(this.re + arguments[0], this.im);
			} else if(arguments[0] instanceof c) {
				return new c(this.re + arguments[0].re, this.im + arguments[0].im);
			}
		} else if(arguments.length == 2) {
			return new c(this.re + arguments[0], this.im + arguments[1]);
		}
	},

	subtract: function() {
		// if there is one input variable, it is either a real number or of type c
		if(arguments.length == 1) {
			if(typeof(arguments[0]) == 'number') {
				return new c(this.re - arguments[0], this.im);
			} else if(arguments[0] instanceof c) {
				return new c(this.re - arguments[0].re, this.im - arguments[0].im);
			}
		} else if(arguments.length == 2) {
			return new c(this.re - arguments[0], this.im - arguments[1]);
		}
	}


}
