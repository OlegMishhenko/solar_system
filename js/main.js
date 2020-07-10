document.querySelector('.nav-icon').onclick = function (){
	document.querySelector('.nav-icon').classList.toggle('open');
	document.querySelector('.menu-items').classList.toggle('open');
};

document.querySelector('#sun').onclick = function () {
	document.querySelector('.modal').style.display = 'block';
};

document.querySelector('.modal-info-close-img').onclick = function () {
	console.log('1111');
	document.querySelector('.modal').style.display = 'none';
};