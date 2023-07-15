// Отримуємо доступ до інпута за id
const input = document.querySelector("#font-size-control");

// Отримуємо доступ до спана за id
const text = document.querySelector("#text");

// Додаємо слухача події input до інпута
input.addEventListener("input", function() {
  // Отримуємо значення інпута
  const value = input.value;

  // Встановлюємо значення інпута як розмір шрифту для спана
  text.style.fontSize = value + "px";
});
