Array.prototype.max = function () {
  return Math.max(...this);
};
Array.prototype.sum = function () {
  return this.reduce((sum, item) => (sum += item));
};

arr = [1, 2, 3, 4];
arr.max(); //?
arr.sum(); //?
