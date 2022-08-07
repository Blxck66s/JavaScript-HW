const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

function checkname(name) {
  if (employees[name]) {
    console.log(
      `name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province} `
    );
  } else console.log("Not Found");
}

checkname("john"); //?
