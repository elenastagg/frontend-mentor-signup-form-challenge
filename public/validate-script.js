function validate() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const message = document.getElementById(`message-${input.id}`);
    const errorIcon = document.getElementById(`error-icon-${input.id}`);
    const inputBox = document.getElementById(`input-box-${input.id}`);
    if (input.value === "") {
      message.innerHTML = `${input.placeholder} cannot be empty`;
      errorIcon.hidden = false;
      inputBox.classList.add("error-outline");
    } else {
      message.innerHTML = "";
      errorIcon.hidden = true;
      inputBox.classList.remove("error-outline");
    }
  }
  const email = document.getElementById("email").value;
  const emailMessage = document.getElementById("message-email");
  const errorIcon = document.getElementById("error-icon-email");
  if (validator.isEmail(email)) {
    message.innerHTML = "";
  } else {
    emailMessage.innerHTML = "Please provide a valid email";
    errorIcon.hidden = false;
  }
}
