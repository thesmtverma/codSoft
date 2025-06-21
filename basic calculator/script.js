const display = document.getElementById("calculator-display");

// number buttons 
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

// operator buttons
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

// clear button
document.getElementById("clear-button").addEventListener("click", () => {
  display.value = "";
});

// equals button
document.getElementById("equals-button").addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});
