function shopcalc(name, total, price, discount) {
  if (discount == 0 || discount == undefined) {
    result = {
      name,
      total,
      price,
    };
    return total * price;
  } else if (discount) {
    result = {
      name,
      total,
      price,
      discount,
    };
    return total * (price - price * (discount / 100));
  }
}
