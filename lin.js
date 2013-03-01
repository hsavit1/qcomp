function lin() {

}

lin.vectorDot = function(s1, s2) {
	if(s1.length != s2.length) { return false; }
	var inP = new c(0,0);
	for(var i = 0; i < s1.length; i++) {
		inP = inP.add(s1[i].multiply(s2[i].conjugate()));
	}
	return inP;
}

lin.matrixDot = function(m, v) {
	if(m.length != v.length) return false;

	var out = [];
	for(var i in m) {
		var el = new c(0, 0);
		for(var j in m[i]) {
			el.add(m[i][j].multiply(v[j]));
		}
		out.push(el);
	}

	return out;
}

lin.dot = function(a, b) {
	if(lin.isMatrix(a) && lin.isVector(b)) return lin.matrixDot(a,b);
	else return lin.vectorDot(a,b);
}


lin.normalize = function(vector) {
	var norm = Math.sqrt(lin.dot(vector, vector));
	var elements = vector;
	for(var i in elements) {
		elements[i] = elements[i] / norm;
	}
	return elements;
}


lin.tensorProduct = function(s1, s2) {
	var tensorP = [];
	for(var i = 0; i < s1.length; i++) {
		for(var j = 0; j < s2.length; j++) {
			tensorP.push(s1[i].multiply(s2[j]));
		}
	}

	return tensorP;
}

lin.dualProduct = function(s1, s2) {
	if(s1.length != s2.length) return false;

	var product = [];
	for(var i = 0; i < s1.length; i++) {
		var row = [];
		for(var j = 0; j < s2.length; j++) {
			row.push(s1[i].multiply(s2[j]));
		}
		product.push(row);
	}
	return product;
}


lin.isVector = function(candidate) {
	if(!(candidate instanceof Array)) return false;
	return true;
}

lin.isMatrix = function(candidate) {
	if(!(candidate instanceof Array)) return false;
	if(!(candidate[0] instanceof Array)) return false;
	var length = candidate[0].length;
	for(var i in candidate) {
		if(!(candidate[i] instanceof Array)) return false 
		if(candidate[i].length != length) return false;	
	}
	return true;
}


