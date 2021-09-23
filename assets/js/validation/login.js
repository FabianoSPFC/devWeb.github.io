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
	message.innerHTML = message.innerHTML + "<br/>" + messageString;
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

form.onsubmit = submit;

console.log({ form });
