//math.js 모듈
function add(a, b) {
  return a + b;
}

//subtract
function subtract(a, b) {
  return a - b;
}

//multiply
function multiply(a, b) {
  return a * b;
}

//divide
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zerro");
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
