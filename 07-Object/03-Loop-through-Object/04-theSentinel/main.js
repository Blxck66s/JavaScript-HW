const stop = "stop";
function Created() {
  const result = {};
  let key;
  let value;
  do {
    key = prompt("Enter Key");
    value = prompt("Enter Value");
    if (key !== null || key.trim !== "" || key !== stop || value !== stop) {
      result[key] = value;
    }
  } while (key !== stop || value !== stop);
  return result;
}

use = Created();

use;
