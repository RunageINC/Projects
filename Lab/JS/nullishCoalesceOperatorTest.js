const transaction = {
  name: "pix",
  receiver: null,
  date: new Date().toISOString(),
};

console.log(transaction);
console.log(transaction.receiver?.firstName.slice(0, 1) ?? "");
