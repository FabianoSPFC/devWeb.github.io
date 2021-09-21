const form = document.querySelector("form");
const [nameStudent, surnameStudent, id, phone, classStudent] =
	document.querySelectorAll("form input");
const message = document.querySelector(".invalidPassword");
console.log({ form, email, password, message });
/**
 *
 * @param {SubmitEvent} e
 * @param {string} message
 * @param {number} timeout
 * @param {HTMLSpanElement} nessage
 */
function showError(e, message, timeout = 10000) {
	e.preventDefault();
	console.log("show");
	message.innerHTML = message;
	message.hidden = false;
	setTimeout(() => {
		message.hidden = true;
	}, timeout);
}

/**
 *
 * @param {SubmitEvent} e
 */

function submit(e) {
	if (!/^[a-z ,.'-]+$/i.test(nameStudent.value)) {
		showError(e, "Senha ou Email Inválido!");
	}
	if (!/^[a-z ,.'-]+$/i.test(surnameStudent.value)) {
		showError(e, "Senha ou Email Inválido!");
	}
	if (!/^\d{8}$/i.test(id.value)) {
		showError(e, "Senha ou Email Inválido!");
	}
	if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i.test(id.value)) {
		showError(e, "Senha ou Email Inválido!");
	}
	if (
		!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
			phone.value
		)
	) {
		showError(e, "Senha ou Email Inválido!");
	}
	if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email.value
		)
	) {
		showError(e, "Senha ou Email Inválido!");
	}
}

form.onsubmit = submit;
