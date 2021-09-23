const form = document.querySelector("form");
const [foodName, foodCode, price, ingredients] = document.querySelectorAll(
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
	message.innerHTML = message.innerHTML + messageString;
	message.hidden = false;
}

/**
 *
 * @param {SubmitEvent} e
 */

 function maskPrice(i){
   
	var v = i.value;
	
	if(isNaN(v[v.length-1])){ 
	   i.value = v.substring(0, v.length-1);
	   return;
	}
	
	i.setAttribute("maxlength", "7");
	if (v.length == 2) i.value = "R$" + i.value + ".";	
 }

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
