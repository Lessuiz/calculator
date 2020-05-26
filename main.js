const numButtons = document.querySelectorAll(".numButton")
const operationButtons = document.querySelectorAll(".operation-button")
const equalsButton = document.querySelector("#equals")
const clearButton = document.querySelector("#clear")
const deleteButton = document.querySelector("#delete")
let display = document.querySelector("#result")
let previousResult = document.querySelector("#previous")
let value = "";
let operationsQuery = []

//** Loop to create event listeners **//
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    value += button.textContent
    display.textContent = value
  })
})

//** This function pushes inputs to the operation array **//
function pushNumbers(e) {
  if (display.textContent == "") return
  operationsQuery.push(parseFloat(display.textContent))
  if (operationsQuery.length === 3) {
    operationsQuery.splice(0, 3, operate(operationsQuery[1], operationsQuery[0], operationsQuery[2]))
    if (operationsQuery[0] == Infinity) {
      operationsQuery = []
      previousResult.textContent = "Infinity"
      display.textContent = ""
      return
    }
  }
  operationsQuery.push(e.target.textContent)
  previousResult.textContent = operationsQuery[0]+' '+operationsQuery[1]
  value = ""
  display.textContent = value
}

operationButtons.forEach(button => {
  button.addEventListener('click', pushNumbers)
})

function equalsFunction() {
  previousResult.textContent = ""
  operationsQuery.push(parseFloat(display.textContent))
  display.textContent = operate(operationsQuery[1], operationsQuery[0], operationsQuery[2])
  operationsQuery = []
}

function clearFucntion() {
  operationsQuery = []
  display.textContent = ""
  previousResult.textContent = ""
  value = ""
}

clearButton.addEventListener('click', clearFucntion)
equalsButton.addEventListener('click', equalsFunction)


//** Algebric functions **//
function add(num1, num2) {
  return num1 + num2
}
function subtract(num1, num2) {
  return num1 - num2
}
function divide(num1, num2) {
  return num1 / num2
}
function multiply(num1, num2) {
  return num1 * num2
}


function operate(operator, num1, num2) {
  const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
  }
  return operators[operator](num1, num2)
}
