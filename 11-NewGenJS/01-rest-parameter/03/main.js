mergeObjects = (...obj) => {
  let reobj = obj.reverse();
  result = reobj.reduce((sum, item) => {
    Object.assign(sum, item);
    return sum;
  }, {});

  return result;
};

obj1 = { num1: 1 };
obj2 = { num2: 2, num3: 3, num4: 4 };

mergeObjects(obj1, obj2); //?
