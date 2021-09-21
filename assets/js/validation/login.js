const form = document.querySelector("form");
const [email, password] = document.querySelectorAll("form input");
const message = document.querySelector(".invalidPassword");
/**
 *
 * @param {SubmitEvent} e
 * @param {string} message
 * @param {number} timeout
 */
function displayError(e, messageString, timeout = 10000) {
  e.preventDefault();
  message.innerHTML = messageString;
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
  if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password.value
    )
  ) {
    displayError(e, "Senha Incorreta");
  }
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
  ) {
    displayError(e, "E-mail Inválido");
  }
}

form.onsubmit = submit;
