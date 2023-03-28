const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let currentValue = 0;

decrementButton.addEventListener("click", decrementValue);
incrementButton.addEventListener("click", incrementValue);
function decrementValue() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}
function incrementValue() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}
