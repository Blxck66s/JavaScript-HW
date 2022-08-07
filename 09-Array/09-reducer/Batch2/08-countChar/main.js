let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
str = str.toLowerCase().split("");

let result = str.reduce((sum, item) => {
  currentkey = sum[item];
  if (item.trim() !== "") {
    if (!currentkey) {
      sum[item] = 1;
    } else {
      sum[item] += 1;
    }
  }

  return sum;
}, {}); //?
