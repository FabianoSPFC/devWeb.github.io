const form = document.querySelector("form");
const [
	schoolName,
	schoolPhone,
	login,
	password,
	employeeName,
	employeeSurname,
	schoolEMail,
	schoolAdress,
] = document.querySelectorAll("form > div > div > input");
const message = document.querySelector(".invalidPassword2");

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

 function maskTel(tel){ 
	var v = tel.value;
	
	if(isNaN(v[v.length-1])){ 
	   tel.value = v.substring(0, v.length-1);
	   return;
	}
	
	tel.setAttribute("maxlength", "14");
	if(tel.value.length == 2)
		tel.value = "(" + tel.value + ') '; 

	if(tel.value.length == 9)
		tel.value = tel.value + '-';

}

function submit(e) {
	message.innerHTML = "";
	message.hidden = true;
	if (
		!/^[a-z ,.'-]+$/i.test(schoolName.value) ||
		!/^[a-z ,.'-]+$/i.test(employeeName.value) ||
		!/^[a-z ,.'-]+$/i.test(employeeSurname.value)
	) {
		displayError(e, "Nome deve conter apenas caracteres alfanuméricos. ");
	}
	// if (
	// 	!/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/.test(
	// 		schoolPhone.value
	// 	)
	// ) {
	// 	displayError(e, "Formato de telefone incorreto. ");
	// }
	if (!/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/.test(login.value)) {
		displayError(
			e,
			"Login deve conter apenas caracteres alfanuméricos e números. "
		);
	}
	if (
		!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
			password.value
		)
	) {
		displayError(
			e,
			"Senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial (#?!@$ %^&*-). "
		);
	}
	if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			schoolEMail.value
		)
	) {
		displayError(e, "Email Inválido. ");
	}
	if (!/^([\w\W,.ºª°]+)\s(\d+)$/.test(schoolAdress.value)) {
		displayError(
			e,
			"Endereço deve conter apenas caracteres alfanuméricos, espaço e símbolos (,.ºª°). "
		);
	}
}

form.onsubmit = submit;
