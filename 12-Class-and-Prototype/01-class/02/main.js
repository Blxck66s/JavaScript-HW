class Sale {
  name;
  constructor(name) {
    this.name = name;
  }
  calcPrice() {
    let sum = 0;
    sum += this.price * this.amount;
    sum = sum - (sum * this.discount) / 100;
    return sum;
  }
}
class Beverage extends Sale {
  amount = 0;
  price = 0;
  discount = 0;
  constructor({
    name: name,
    amount: amount,
    price: price,
    discount: discount,
  }) {
    super();
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}
beverage = new Beverage({
  name: "Pepsi",
  amount: 3,
  price: 19,
  discount: 10,
});

beverage.calcPrice(); //?
