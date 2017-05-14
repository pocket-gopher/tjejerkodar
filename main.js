var menu = document.getElementById('open-menu');

document.addEventListener('DOMContentLoaded', function() {
	menu.classList.remove('js-isOpen');
	console.log('loaded');
});

menu.addEventListener('click', function () {
	if (this.classList.contains('js-isOpen')) {
		this.classList.remove('js-isOpen');
	} else {
		this.classList.add('js-isOpen');
	}
});