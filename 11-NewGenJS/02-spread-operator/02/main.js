array1 = [1, 2, 3, 4, 5];

spreadfunc = (arr) => {
  Newarr = [...arr];
  if (Newarr[3]) {
    Newarr[3] = Newarr[3] ** 2;
  }
  return Newarr; //?
};

spreadfunc(array1); //?
array1; //?

//   Newarr = arr.reduce((sum, item, index) => {
//     index == 3 ? sum.push(item ** 2) : sum.push(item);
//     return sum;
//   }, []);
//   return Newarr; //?
