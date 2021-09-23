const form = document.querySelector("form");
const [drinkName, drinkCode, price, supplier] = document.querySelectorAll(
	"form > div > div > input"
);
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

	if (
		!/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/.test(foodName.value)
	) {
		displayError(
			e,
			"Nome da comida permite apenas caracteres alfanuméricos"
		);
	}
}

form.onsubmit = submit;

console.log({ form });
