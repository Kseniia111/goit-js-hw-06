let counterValue = 0;

const value = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

decrementBtn.addEventListener("click", function() {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", function() {
  counterValue += 1;
  value.textContent = counterValue;
});
