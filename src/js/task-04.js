// Створюємо змінну counterValue і ініціалізуємо її значенням 0
let counterValue = 0;

// Отримуємо доступ до спану, де буде виводитися значення лічильника
const value = document.querySelector("#value");

// Отримуємо доступ до кнопок за допомогою атрибута data-action
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

// Додаємо слухач кліку до кнопки decrementBtn
decrementBtn.addEventListener("click", function() {
  // Зменшуємо значення лічильника на одиницю
  counterValue -= 1;
  // Оновлюємо інтерфейс новим значенням змінної counterValue
  value.textContent = counterValue;
});

// Додаємо слухач кліку до кнопки incrementBtn
incrementBtn.addEventListener("click", function() {
  // Збільшуємо значення лічильника на одиницю
  counterValue += 1;
  // Оновлюємо інтерфейс новим значенням змінної counterValue
  value.textContent = counterValue;
});
