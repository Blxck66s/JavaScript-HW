factorial = (x) => {
  let z = 0;
  for (i = 1; i < x; i++) {
    z = z + x * i;
  }
  return z;
};
