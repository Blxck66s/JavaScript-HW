z = "xxX ";

console.log(x(z));
console.log(z);

function x(search) {
  search = search.trim();
  if (
    search.toLowerCase() == "xxx" ||
    search.toLowerCase() == "porn" ||
    search.toLowerCase() == "sex"
  ) {
    return true;
  } else return false;
}
