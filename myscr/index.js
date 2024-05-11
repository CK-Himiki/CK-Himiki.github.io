async function LogT(){
	let lg = document.querySelector('#login-inp').value;
	let  ps= document.querySelector('#password-inp').value;
	//Запрос в сервер!!!
	let b = ((lg=='правильный')&&(ps=='пароль'));
	if (b) {
		window.location.href = 'firstpage.html';
	}
	else {
		alert('Неверный логин или пароль');
		
	}
	//console.log(ps, lg);
}

async function NoLog(){
	window.location.href = 'nologfirstpage.html';
}