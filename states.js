function pureState(init) {
	var initDirac = function(init) {
		var vector = [];
		// ket
		if(init[0] == '|' && init[init.length-1] == '>') {
			for(var i=1; i < init.length - 1; i++) {
				vector.push(parseInt(init[i]));
			}
		}
		// bra
		else if(init[0] == '<' && init[init.length] == '|') {

		}	
		return vector;
	};

	var _vector = [];
	if(init instanceof Array) _vector = init;
	else if(typeof(init) == 'string') { _vector = initDirac(init); }

	this.getElements = function() {
		return lin.normalize(_vector);
	}
}

pureState.prototype = {


}


