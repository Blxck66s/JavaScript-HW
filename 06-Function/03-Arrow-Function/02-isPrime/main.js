let checkPrime = (num) => {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

// console.log(checkPrime(7)); // isPrime == true
// console.log(checkPrime(20)); // isPrime == false