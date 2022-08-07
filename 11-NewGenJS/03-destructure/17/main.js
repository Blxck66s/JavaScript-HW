const names = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jack", lastName: "Dann" },
  { firstName: "Joe", lastName: "Dunne" },
];

for (obj of names) {
  let { firstName: f, lastName: L } = obj;
  console.log(f, L);
}
