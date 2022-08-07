function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function () {
    this.input = +prompt("input !~");
    this.currentValue += this.input;
  };
  this.show = function () {
    alert(this.currentValue);
  };
}

A = new Accumulator(10);
A.read();
console.log(A);
A.read();
console.log(A);

A.show();
console.log(A);
