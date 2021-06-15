// Alterar a imagem 1
const imagem = document.querySelector('img.img-p1');
let nomeDoPersonagem;

gerarValorAleatorio = () => {
	return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
	let numeroAleatorio = gerarValorAleatorio ();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
		method: 'GET',
		headers: {
    		Accept: 'application/json', "Content-type": 'application/json'
}
	}).then((response) => response.json()).then((data) => {
		imagem.src = data.image;
		imagem.alt = data.name;
		nomeDoPersonagem = data.name;
		document.getElementById("nome-personagem1").innerHTML = nomeDoPersonagem;
});
}

pegarPersonagem();


// Alterar a imagem 2
const imagem2 = document.querySelector('img.img-p2');
let nomeDoPersonagem2;

gerarValorAleatorio2 = () => {
	return Math.floor(Math.random() * 671);
}

pegarPersonagem2 = () => {
	let numeroAleatorio2 = gerarValorAleatorio2 ();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
		method: 'GET',
		headers: {
    		Accept: 'application/json', "Content-type": 'application/json'
}
	}).then((response) => response.json()).then((data) => {
		imagem2.src = data.image;
		imagem2.alt = data.name;
		nomeDoPersonagem2 = data.name;
		document.getElementById("nome-personagem2").innerHTML = nomeDoPersonagem2;
});
}
pegarPersonagem2();

// Alterar a imagem 3
const imagem3 = document.querySelector('img.img-p3');
let nomeDoPersonagem3;

gerarValorAleatorio3 = () => {
	return Math.floor(Math.random() * 671);
}

pegarPersonagem3 = () => {
	let numeroAleatorio3 = gerarValorAleatorio3 ();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio3}`, {
		method: 'GET',
		headers: {
    		Accept: 'application/json', "Content-type": 'application/json'
}
	}).then((response) => response.json()).then((data) => {
		imagem3.src = data.image;
		imagem3.alt = data.name;
		nomeDoPersonagem3 = data.name;
		document.getElementById("nome-personagem3").innerHTML = nomeDoPersonagem3;
});
}
pegarPersonagem3();

// Alterar a imagem 4
const imagem4 = document.querySelector('img.img-p4');
let nomeDoPersonagem4;

gerarValorAleatorio3 = () => {
	return Math.floor(Math.random() * 671);
}

pegarPersonagem4 = () => {
	let numeroAleatorio4 = gerarValorAleatorio3 ();
	return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio4}`, {
		method: 'GET',
		headers: {
    		Accept: 'application/json', "Content-type": 'application/json'
}
	}).then((response) => response.json()).then((data) => {
		imagem4.src = data.image;
		imagem4.alt = data.name;
		nomeDoPersonagem4 = data.name;
		document.getElementById("nome-personagem4").innerHTML = nomeDoPersonagem4;
});
}
pegarPersonagem4();