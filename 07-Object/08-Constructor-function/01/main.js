function Calc() {
  this.read = function () {
    this.num1 = +prompt("num1");
    this.num2 = +prompt("num2");
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let Calculator = new Calc();
Calculator.read();
console.log(Calculator.sum());
console.log(Calculator.mul());
