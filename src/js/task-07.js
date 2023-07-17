const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", function() {
  const value = input.value;
  text.style.fontSize = value + "px";
});
