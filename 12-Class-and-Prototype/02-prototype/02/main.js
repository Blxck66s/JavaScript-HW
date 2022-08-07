function f() {
  alert("Hello!");
}

Function.prototype.defer = function (x) {
  return setTimeout(this, x);
};

f.defer(1000);
