const notebook = {
  brand: "ASUS",
  model: "Vivobook D413IA-EB303TS",
  processor: "AMD Ryzen 7 4700U 3.6GHz",
  graphics: "Integrated Graphics : AMD Radeon Graphics",
  ram: "8GB DDR4 Onboard",
  storage: "512GB PCIe NVMe M.2 SSD",
};

function clone(Obj) {
  result = {};
  for (let key in Obj) {
    result[key] = Obj[key];
  }
  console.log(result);
}

clone(notebook);

Copy = Object.assign({}, notebook);
