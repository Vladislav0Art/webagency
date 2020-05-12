const processingElement = (className, classElement, triggerOpen, triggerClose) => {
	let element = document.querySelector(`${classElement}`);
	const triggerElementOpen = document.querySelector(`${triggerOpen}`);
	const triggerElementClose = document.querySelector(`${triggerClose}`);
	let allLinks = document.querySelectorAll(`.navigation__link`);

	triggerElementOpen.addEventListener('click', function() {

		if(!(element.classList.contains(`${className}`))) {

			element.classList.add(`${className}`);
			
		}
	});

	triggerElementClose.addEventListener('click', function() {

		if(element.classList.contains(`${className}`)) {

			element.classList.remove(`${className}`);
			
		}
	});

	allLinks.forEach((item) => {
		item.addEventListener('click', () => {
			element.classList.remove(`${className}`);
		});
	});
};

processingElement('navigation__menu-show', '.navigation__menu', '.navigation-container', '.navigation__closer');