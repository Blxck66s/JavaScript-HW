const alphabets = ["a", "b", "a", "c", "a", "d"];
// expected result: [0, 2, 4]
Aindex = [];
let findA = alphabets.findIndex(function (item, index, array) {
  if (item == "a") {
    Aindex.push(index);
  }
});
console.log(Aindex);
