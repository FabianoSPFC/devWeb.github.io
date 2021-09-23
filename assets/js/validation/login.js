const form = document.querySelector("form");
const [email, password] = document.querySelectorAll("form > div > input");
const message = document.querySelector(".invalidPassword");

/**
 *
 * @param {SubmitEvent} e
 * @param {string} messageString
 */
function displayError(e, messageString) {
	e.preventDefault();
	message.innerHTML = message.innerHTML + messageString;
	message.hidden = false;
}

/**
 *
 * @param {SubmitEvent} e
 */
function submit(e) {
	message.innerHTML = "";
	message.hidden = true;
	console.log(password.value.length)
	if (password.value.length === 0) {
		displayError(e, "Preencha a Senha");
	}
	if (email.value.length === 0) {
		displayError(e, "Preencha o email");
	}
}

function redirecionar() {
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var form = document.getElementById("form");

	console.log(email.value + password.value);
	if(email.value == "admin@cantisystem.com" && password.value == "1234"){
		form.action = 'registered.html';
	}else if(email.value == "unifacs@unifacs.br" && password.value == "unifacs"){
		form.action = 'moduleSchool.html';
	}else if(email.value == "lucas@unifacs.resp.br" && password.value == "lucas"){
		form.action = 'moduleOwner.html';
	}else if(email.value == "clayton@unifacs.edu.br" && password.value == "clayton"){
		form.action = 'moduleStudent.html';
	}else{
		alert("Email ou Senha não conferem");
	}
 }

form.onsubmit = submit;

console.log({ form });
