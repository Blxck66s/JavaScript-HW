const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

function calSum(arr) {
  sumarr = [];
  for (let item of arr) {
    let currentobj = {};
    if (item.discount) {
      let netprice = item.price - item.price * item.discount;
      currentobj.netprice = netprice;
      sumarr.push(currentobj);
    } else {
      currentobj.netprice = item.price;
      sumarr.push(currentobj);
    }
  }
  return console.log(sumarr);
}

calSum(sales);
