import '../css/global.scss';
import lodash from 'lodash';
import aboutFile from './about.js';


(function(){
	function component() {
		
		aboutFile();
		
		var element = document.createElement('div');
		element.innerHTML = _.join(['Hello', 'webpack'], ' ');
		element.classList.add('hello');

		return element;
	} //component

	document.body.appendChild(component());


			
})();


