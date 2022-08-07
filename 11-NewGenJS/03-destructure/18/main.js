const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 },
];

for (obj of users) {
  let { user: name, age: num } = obj;
  if (num) {
    console.log(name, num);
  } else if (num == undefined) {
    console.log(name, "unknown");
  }
}
