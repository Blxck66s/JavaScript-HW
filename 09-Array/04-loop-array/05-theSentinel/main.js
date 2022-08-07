function appendsum() {
  resultarr = [];
  let resultSum = 0;
  let input;
  do {
    input = +prompt("num ?");
    if (input.trim !== "" || input !== null || input !== NaN) {
      resultarr.push(input);
    }
  } while (input);

  resultarr.forEach((item, index, arr) => {
    resultSum += item;
    return resultSum;
  });
  return console.log(resultSum);
}

appendsum(); //?
