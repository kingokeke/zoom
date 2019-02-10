const errorDiv = document.querySelector('#form-errors');
const submitButton = document.querySelector('button[type="submit"]');
const passwordField = document.querySelector('input[name="password"]');
const passwordConf = document.querySelector(
  'input[name="password-confirmation"]'
);
const signupFormValidation = () => {
  try {
    if (passwordField.value !== passwordConf.value) {
      errorDiv.classList.add('form-errors');
      throw new Error('Passwords do not match');
    } else {
      errorDiv.classList.remove('form-errors');
      errorDiv.innerHTML = null;
    }
  } catch (err) {
    errorDiv.innerHTML = `<p>${err.message}</p>`;
  }
};

submitButton.onclick = event => {
  event.preventDefault();
};

if (document.querySelector('#signup-form')) {
  passwordConf.onkeyup = signupFormValidation;
}
