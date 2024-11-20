// string
const stringPrimitive = "Mercy";
// number
const numberPrimitive = 10;
// Boolean
const booleanPrimitive = false || true;


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiple(a, b) {
  return a * b;
}

console.log("Results: \n", {
  "Adding 10 + 5: ": add(10, 5),
  "Subtracting 10 - 5: ": subtract(10, 5),
  "Dividing 10 / 5: ": divide(10, 5),
  "Multiplying 10 * 5: ": multiple(10, 5),
});
