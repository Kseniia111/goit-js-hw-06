const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function() {
  const value = input.value;
  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
});
