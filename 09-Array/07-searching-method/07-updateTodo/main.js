const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  where = tasks.findIndex((item) => item.id == id);
  tasks[where].name = newName;
  ///tasks.splice(where,1,{id:id,name:newName})
}

updateTask(2, "Travelling");

console.log(tasks);
