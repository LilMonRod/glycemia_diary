(function() { 
	let magageGlicemya = document.getElementById('magageGlicemya');
	let registration = document.getElementById('registration');
	let grafic = document.getElementById('grafic');
	let list = document.getElementById('list');

/* element.classList.add("mystyle");
element.classList.remove("mystyle");*/

	function validateRegister() {
		let user = localStorage.getItem('dataUser');
		if (user == null) {
			console.log('no hay data en stortage: first session');
			showLog();
		} else {
			console.log('hay data');
			hideLog();
		}
	}

	function hideLog() {
		console.log('escondiendo log');

		registration.classList.add('none');
		magageGlicemya.classList.remove('none');
		grafic.classList.remove('none');
		list.classList.remove('none');
	}
	function showLog() {
		console.log('mostrando log');
		registration.classList.remove('none');
		magageGlicemya.classList.add('none');
		grafic.classList.add('none');
		list.classList.add('none');
	}

	validateRegister();
})();