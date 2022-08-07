function extractCurrencyValue(string, rate) {
  return "THB " + (num = string.slice(1) * rate);
}

console.log(extractCurrencyValue("$120", 30));
