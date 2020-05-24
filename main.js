const numButtons = document.querySelectorAll(".numButton")
let display = document.querySelector("#result")
let value = "";

//** Loop to create event listeners **//
buttons.forEach(button => {
  button.addEventListener('click', () => {
    value += numButton.textContent
    display.textContent = value
  })
})

//** Algebric functions **//
function add(x, y) {
  return x + y
}
function subtract(x, y) {
  return x - y
}
function divide(x, y) {
  return x / y
}
function multiply(x, y) {
  return x * y
}


function operate(operator, x, y) {
  const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
  }
  return operators[operator](x, y)
}
