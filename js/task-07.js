const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", function() {
  const value = input.value;
  text.style.fontSize = value + "px";
});



document.querySelector('body').style.backgroundColor = '#eaf1fad0';
const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

// var 1
/*
function fontSizeControl(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}
*/

// var 2
const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

inputRangeRef.addEventListener('input', fontSizeControl);