const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  if (input.value.trim().length === Number(inputLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});