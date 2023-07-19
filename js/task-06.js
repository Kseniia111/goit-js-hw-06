const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  if (input.value.length === Number(inputLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});

document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);

// var 1

// function onBlurBorderColor(event) {
//   const inputDataLength = Number(inputRef.dataset.length);
//   const inputValueLength = Number(inputRef.value.trim().length);

//   if (inputValueLength === inputDataLength) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (inputValueLength === 0) {
//     inputRef.classList.remove('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
//     inputRef.classList.add('invalid');
//   }
// }
// var 2

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputValueLength = Number(inputRef.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}