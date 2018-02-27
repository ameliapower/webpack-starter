import '../css/global.scss';
import lodash from 'lodash';
import aboutFile from './about.js';


function component() {
	
	aboutFile();
	
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	return element;
} //component

document.body.appendChild(component());


var doBox = function() {
	var node = document.createElement('div');
	node.style = "width:200px; height:200px; background:lightblue";
	document.body.appendChild(node);
	node.addEventListener('click', e => 
		node.classList.toggle('active')
	)
}();

			


