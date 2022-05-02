const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operation = (option) => {
  switch (option) {
    case "+":
      return sum;
    case "-":
      return sub;
    case "*":
      return mul;
    case "/":
      return div;
    default:
      return null;
  }
};

const operator = operation.bind(this, "+")();

console.log(operator(+process.argv[2], +process.argv[3]));
