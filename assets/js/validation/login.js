const form = document.querySelector("form");
const [email, password] = document.querySelectorAll("form input");

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
    e.preventDefault();
  }
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
  ) {
    e.preventDefault();
  }
}

form.onsubmit = submit;
