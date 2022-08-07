const stop = "stop";
function Created() {
  const result = {};
  let key;
  let value;
  do {
    key = prompt("Enter Key");
    value = prompt("Enter Value");
    if (value > 1) {
      key = key + "s";
    }
    if (key !== null || key.trim !== "" || key !== stop || value !== stop) {
      result[key] = value;
    }
  } while (key !== stop || value !== stop);
  if (key == stop) {
    delete key;
  }
  return result;
}

console.log(Created());
