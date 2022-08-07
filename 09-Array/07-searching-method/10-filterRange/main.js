array = [1, 2, 3, 4, 5, 6, 7];

function filterRange(arr, a, b) {
  return arr.filter((item) => (item = item > a && item < b));
}

filterRange(array, 2, 6); //?
