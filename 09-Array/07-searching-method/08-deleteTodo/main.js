const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deletetask(id) {
  where = tasks.findIndex((item) => item.id == id);
  tasks.splice(where, 1);
}

deletetask(1);

console.log(tasks);
