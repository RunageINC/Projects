const crypto = require("node:crypto");

function generateNewCode(maxLength = 8) {
  //   const array = new BigUint64Array(1);
  // const array = new Uint32Array(1);
  const array = new BigInt64Array(1);

  crypto.getRandomValues(array);

  const maximumNumbers = 10 ** maxLength;

  const codes = Array.from(array, (n) =>
    (n % maximumNumbers).toString().padStart(maxLength, "0")
  );

  return codes[0];
}

// console.log(generateNewCode());
// console.log(generateNewCode(6));
console.log(generateNewCode(12));
