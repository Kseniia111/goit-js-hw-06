function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');
divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';
divBoxesEl.style.marginTop = '30px';
createBtnEl.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}