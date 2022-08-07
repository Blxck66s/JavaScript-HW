const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
m = [];
f = [];
let result = persons.reduce((sum, item, index, array) => {
  x = item.sex; //?

  if (x == "M") {
    m.push(item.name);
    sum[x] = m;
  } else if (x == "F") {
    f.push(item.name);
    sum[x] = f;
  }

  return sum; //?
}, {});

//?

result; //?
