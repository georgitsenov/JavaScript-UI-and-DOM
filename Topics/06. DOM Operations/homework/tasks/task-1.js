/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

  return function (element, contents) {
  	let theElement,
  		docFragment = document.createDocumentFragment();

  	if(typeof element === 'string') {
  		theElement = document.getElementById(element);
  		if(!theElement) {
  			throw new Error('The ID does not select anything!');
  		}
  	} else if(element instanceof HTMLElement) {
  		theElement = element;
  	} else {
  		throw new Error('No valid ID or HTMLElement');
  	}

  	contents.forEach(item => {
  		if(typeof item != 'string' && typeof item != 'number') {
  			throw new Error('The content is not strings or numbers');
  		}
  		let content = document.createElement('div')
  		content.innerHTML = item;
  		docFragment.appendChild(content);
  	});

  	theElement.innerHTML = '';
  	theElement.appendChild(docFragment);

  };
};