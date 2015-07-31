(function () {

'use strict';

	var root = document.getElementById('rootDiv');
	var printEle = document.querySelector('ul');
	traverse(root);

	function traverse(element) {
  		print(element);
  		var child = element.firstChild;
  		var sibling = element.nextSibling;
  		if(child != null ) 
  			traverse(child);
  		if(sibling != null && notRoot(element)) 
  			traverse(sibling);
	}
	function notRoot(element) {
		if(element.getAttribute('name') != 'A') return true;
		else 									return false;
	}
	function print(element) {
		var e = document.createElement('li');
		e.innerHTML = '<p>' + element.getAttribute('name') + '</p>';
		printEle.appendChild(e);
		console.log(e);
	}

})();