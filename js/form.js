const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");
  const password = formData.get("password");
  const accept = formData.get("accept_terms");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  termsOutput.textContent = accept;
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
