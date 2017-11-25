/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  return function (selector) {
 	let theElement,
 		theButtons,
 		theContents;

  	if(typeof selector === 'string') {
  		theElement = document.getElementById(selector);
  		if(!theElement) {
  			throw new Error('The ID does not select anything!');
  		}
  	} else if(selector instanceof HTMLElement) {
  		theElement = selector;
  	} else {
  		throw new Error('No valid ID or HTMLElement');
  	}

  	theButtons = Array.from(theElement.getElementsByClassName('button'));
  	theContents = theElement.getElementsByClassName('content');

  	theButtons.forEach(button => {
		button.innerHTML = 'hide';
		button.addEventListener('click', function(ev){
			var clickedButton = ev.target;
			var nextSibling = clickedButton.nextElementSibling;
			var firstContent,
				validFirstContent = false;

			while(nextSibling){
				if(nextSibling.className === 'content'){
					firstContent = nextSibling;
					nextSibling = nextSibling.nextSibling;
					while(nextSibling){
						if(nextSibling.className === 'button'){
							validFirstContent = true;
							break;
						}
						nextSibling = nextSibling.nextElementSibling;
					}
					break;
				} else {
					nextSibling = nextSibling.nextElementSibling;
				}
			}

			if (validFirstContent) {
				if (firstContent.style.display === 'none') {
					firstContent.style.display = '';
					clickedButton.innerHTML = 'hide';
				} else {
					firstContent.style.display = 'none';
					clickedButton.innerHTML = 'show';
				}
			}

		});
  	});

  };
};

module.exports = solve;