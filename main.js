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