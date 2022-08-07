x = "string";
ucFirst = (str) => {
  first = str[0].toUpperCase();
  left = str.slice(1);
  return first + left;
};
console.log(ucFirst(x));
