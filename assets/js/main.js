takeKiss = () => {
	const given = document.getElementById('given');
	let kisses = given.value;
	kisses = parseInt(kisses, 10);

	const emoji1 = document.getElementById('emoji');

	const emoji2 = 'assets/img/2facepalm-gif-emoji.gif';
	const emoji3 = 'assets/img/3dont-know-emoji.gif';
	const emoji4 = 'assets/img/4thumbs-down-gif-emoji.gif';
	const emoji5 = 'assets/img/5animated-crying-emoji.gif';
	const emoji6 = 'assets/img/6wtf-emoji.gif';
	const emoji7 = 'assets/img/7clapping-emoji.gif';
	const emoji8 = 'assets/img/8dreamer-emoji.gif';
	const emoji9 = 'assets/img/9kiss-animated-emoji.gif';
	const emoji10 = 'assets/img/10angel-animated-emoji.gif';
	const emoji11 = 'assets/img/11angry-animated-emoji.gif';
	const emoji12 = 'assets/img/12bye-animated-emoji.gif';

	switch (true) {
		case kisses === 1:
			emoji1.setAttribute('src', emoji2);
			break;
		case kisses >= 5 && kisses <= 9:
			emoji1.setAttribute('src', emoji3);
			break;
		case kisses >= 10 && kisses <= 19:
			emoji1.setAttribute('src', emoji4);
			break;
		case kisses >= 20 && kisses <= 29:
			emoji1.setAttribute('src', emoji5);
			break;
		case kisses >= 30 && kisses <= 39:
			emoji1.setAttribute('src', emoji6);
			break;
		case kisses >= 40 && kisses <= 49:
			emoji1.setAttribute('src', emoji7);
			break;
		case kisses >= 50 && kisses <= 59:
			emoji1.setAttribute('src', emoji8);
			break;
		case kisses >= 60 && kisses <= 69:
			emoji1.setAttribute('src', emoji9);
			break;
		case kisses >= 70 && kisses <= 84:
			emoji1.setAttribute('src', emoji10);
			break;
		case kisses >= 85 && kisses <= 99:
			emoji1.setAttribute('src', emoji11);
			break;
		case kisses >= 100 && kisses <= 105:
			emoji1.setAttribute('src', emoji12);
			break;
	}
};

const give = document.getElementById('give');
give.addEventListener('click', takeKiss);
