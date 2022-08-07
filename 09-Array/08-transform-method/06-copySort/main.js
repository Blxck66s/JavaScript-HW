let arr = ["React", "Vue", "Angular"];

copySorted = (arr) => {
  newArr = arr.slice();
  return newArr.sort();
};

let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
