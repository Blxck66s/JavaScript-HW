const product1 = { name: "Coke", price: 18, size: "500mL" };

const product2 = product1;
product2.name = "Pepsi";
product2.price = 19;

console.log(product1); // * โชว object product 1
console.log(product2); // ** โชว object product 2
console.log(product1 === product2); // *** object 2,1 เป็นอันเดียวกันเพราะ = แก้อันนึงก็แก้ทั้งสอง
