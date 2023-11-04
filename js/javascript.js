function slider(anything, marca, valor) {
	document.querySelector('.one').src = anything;

	var text = document.querySelector('.descr');
	var preco = document.querySelector('#preco');


	preco.textContent = valor;
	text.textContent = marca;
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx - x');
	navbar.classList.toggle('open');
}
