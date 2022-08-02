



function add(a, b) {
  let sum = a + b;
  return sum;
}





function subtract(a, b) {
  let difference = a - b;
  return difference;
}



function multiply(a, b) {
  let product = a * b;
  return product;
}



function divide(a, b) {
  let quotient = a / b;
  return quotient;
}



function operate() {
  let operator = prompt("");
  let input1 = prompt("");
  let input2 = prompt("");
  let a = parseInt(input1);
  let b = parseInt(input2);
  if (operator === "+") {
    alert(add(a, b));
  } else if (operator === "-") {
    alert(subtract(a, b));
  } else if (operator === "*") {
    alert(multiply(a, b));
  } else if (operator === "/") {
    alert(divide(a, b));
  } else {
    alert("Invalid");
  }
}

operate();