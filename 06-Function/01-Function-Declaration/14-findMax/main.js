function max(a, b, c, d) {
  if (a && b && c && d) {
    return console.log(Math.max(a, b, c, d));
  } else if (c && d === undefined) {
    return console.log(Math.max(a, b, c));
  } else if (b && c === undefined) {
    return console.log(Math.max(a, b));
  } else if (a && b === undefined) {
    return console.log(Math.max(a));
  } else {
    return console.log(a);
  }
}
