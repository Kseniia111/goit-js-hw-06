// Отримуємо доступ до інпута за id
const input = document.querySelector("#name-input");

// Отримуємо доступ до спана за id
const output = document.querySelector("#name-output");

// Додаємо слухача події input до інпута
input.addEventListener("input", function() {
  // Отримуємо значення інпута
  const value = input.value;

  // Перевіряємо, чи значення порожнє
  if (value === "") {
    // Якщо так, то у спані виводимо "Anonymous"
    output.textContent = "Anonymous";
  } else {
    // Якщо ні, то у спані виводимо значення інпута
    output.textContent = value;
  }
});
