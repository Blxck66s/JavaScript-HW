checkEmptyObj = (obj) => {
  x = Object.keys(obj).length; //?
  if (x == 0) {
    return true;
  } else return false;
};
b = { name: "a", age: "10" };
c = {};
checkEmptyObj(b); //?
