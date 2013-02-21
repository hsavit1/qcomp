function vector(elements) {
	if(elements instanceof Array) { 
		this.elements = elements; 
		this.dim = elements.length;
	}
	else return false;	
}

vector.prototype.normalize = function() {
	var total = 0;
	var elements = this.elements;
	for(var i in elements) {
		total += elements[i];
	}

	for(var i in elements) {
		elements[i] = elements[i] / total;
	}
	return elements;
}

vector.create = function(dim) { var arr = []; for(var i = 0; i < dim; i++) { arr.push(0); } return new vector(arr); };

function pureState(elements) {

	var _vector = new vector(elements);

	this.getElements = function() {
		return _vector.normalize();
	}
}

function lin() {

		

}

lin.innerProduct = function(s1, s2) {
	if(s1.getElements().length != s2.getElements().length) { return false; }
	var inP = 0;
	for(var i = 0; i < s1.getElements().length; i++) {
		inP += s1.getElements()[i] * s2.getElements()[i];
	}
	return inP;
}

lin.tensorProduct = function(s1, s2) {
	var tensorP = vector.create(s1.dim * s2.dim);
	for(var i = 0; i < s1.dim; i++) {
		for(var j = 0; j < s2.dim; j++) {
			tensorP.elements[s2.dim*i+j] = s1.elements[i] * s2.elements[j];
		}
	}

	return tensorP;
}

/* test */

var p1 = new vector([1,2]);
var p2 = new vector([2,3]);

