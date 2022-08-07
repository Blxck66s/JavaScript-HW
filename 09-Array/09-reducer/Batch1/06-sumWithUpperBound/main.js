let str = "31 45 12 67 34 86 23 37 19 41";

let arraynum = str.split(" "); //?

let summ = arraynum.reduce(function (sum, item, index, aray) {
  if (item < 40) {
    sum = sum + +item;
    sum; //?
  }
  return sum;
}, 0); //?
