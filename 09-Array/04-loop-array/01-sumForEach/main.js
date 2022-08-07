const array = [29, 17, 13, 47, 23, 31];
let summ = 0;

array.forEach((item, index, array) => {
  summ = summ + item;

  if (index == array.length - 1) {
    return console.log(summ);
  }
});
