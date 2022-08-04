
// addition function
function add(a, b) {
  let sum = a + b;
  return sum;
}

// subtraction function
function subtract(a, b) {
  let difference = a - b;
  return difference;
}

// multiplication function
function multiply(a, b) {
  let product = a * b;
  return product;
}

// division function
function divide(a, b) {
  let quotient = a / b;
  return quotient;
}

// operation function
function operate() {
  let operator = prompt("");
  let input1 = prompt("");
  let input2 = prompt("");
  let a = parseInt(input1);
  let b = parseInt(input2);
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return ("Invalid");
  }
}

// global variables
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const display = document.getElementById('display');

const buttons = [
  {name: zero, value: 0},
  {name: one, value: 1},
  {name: two, value: 2},
  {name: three, value: 3},
  {name: four, value: 4},
  {name: five, value: 5},
  {name: six, value: 6},
  {name: seven, value: 7},
  {name: eight, value: 8},
  {name: nine, value: 9},
];

