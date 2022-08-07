let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

function minmax() {
  summ = arr.reduce((sum, item) => {
    if (sum.max < item) {
      sum.max = item;
    }
    if (sum.min > item) {
      sum.min = item;
    }
    return sum;
  }, Obj);
  return summ;
}
Obj = {
  max: arr[0],
  min: arr[0],
};

minmax(); //?
