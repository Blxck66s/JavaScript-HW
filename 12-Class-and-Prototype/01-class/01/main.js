class Calculator {
  value = 0;
  constructor(value) {
    this.value = value;
  }
  sum(x) {
    return (this.value = this.value + x);
  }
  subtract(x) {
    return (this.value = this.value - x);
  }
  multiply(x) {
    return (this.value = this.value * x);
  }
  divide(x) {
    return (this.value = this.value / x);
  }
  show() {
    return this.value; //?
  }
}

const Cal1 = new Calculator(10);
Cal1.show(); //?
Cal1.sum(10); //?
Cal1.subtract(10); //?
Cal1.multiply(10); //?
Cal1.divide(10); //?
Cal1.show(); //?
