function pureState(elements) {

	var _vector = elements;

	this.getElements = function() {
		return lin.normalize(_vector);
	}
}

function lin() {


}

lin.normalize = function(vector) {
	var total = 0;
	var elements = vector;
	for(var i in elements) {
		total += elements[i];
	}

	for(var i in elements) {
		elements[i] = elements[i] / total;
	}
	return elements;
}



lin.vectorDot = function(s1, s2) {
	if(s1.length != s2.length) { return false; }
	var inP = 0;
	for(var i = 0; i < s1.length; i++) {
		inP += s1[i] * s2[i];
	}
	return inP;
}

lin.matrixDot = function(m, v) {
	if(m.length != v.length) return false;

	var out = [];
	for(var i in m) {
		var el = 0;
		for(var j in m[i]) {
			el += m[i][j] * v[j];
		}
		out.push(el);
	}

	return out;
}

lin.dot = function(a, b) {
	if(lin.isMatrix(a) && lin.isVector(b)) return lin.matrixDot(a,b);
	else return lin.vectorDot(a,b);
}

lin.tensorProduct = function(s1, s2) {
	var tensorP = [];
	for(var i = 0; i < s1.length; i++) {
		for(var j = 0; j < s2.length; j++) {
			tensorP.push(s1[i] * s2[j]);
		}
	}

	return tensorP;
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

var p1 = [1,2];
var p2 = [2,3];
var mid = [[1,0],[0,1]];
var mtr = [[0,1],[1,0]];
