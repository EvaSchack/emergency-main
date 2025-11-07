const form = document.querySelector("form");

form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

const firstNameOutput = document.querySelector("#first_name_output");
const numberOutput = document.querySelector("#number_output");
const postnummerOutput = document.querySelector("#postnummer_output");
const termsOutput = document.querySelector("#terms_output");
const emailOutput = document.querySelector("#email_output");
const telefonOutput = document.querySelector("#telefon_output");
const koenOutput = document.querySelector("#koen_output");
const cykelOutput = document.querySelector("#cykel_output");
const henvisningOutput = document.querySelector("#henvisning_output");

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first-name");
  const number = formData.get("number");
  const postnummer = formData.get("zipcode");
  const terms = formData.get("accept_terms");
  const email = formData.get("email");
  const telefon = formData.get("telefon");
  const koen = formData.get("gender");
  const cykel = formData.get("message");
  const henvisning = formData.get("myndighed");

  // 2. Vis værdierne i de rigtige output-felter

  firstNameOutput.textContent = firstName;
  numberOutput.textContent = number;
  postnummerOutput.textContent = postnummer;
  termsOutput.textContent = terms;
  emailOutput.textContent = email;
  telefonOutput.textContent = telefon;
  koenOutput.textContent = koen;
  cykelOutput.textContent = cykel;
  henvisningOutput.textContent = henvisning;

  form.reset();
}

form.addEventListener("submit", handleSubmit);
