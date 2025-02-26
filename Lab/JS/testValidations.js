const req1 = {
  body: {
    value: "hello",
  },
};

const req2 = {
  body: null,
};

const req3 = {
  body: undefined,
};

console.log("req 1 value", req1?.body ? JSON.stringify(req1.body) : "");
console.log(
  "req 2 with null value",
  req2?.body ? JSON.stringify(req2.body) : ""
);
console.log(
  "req 3 with null value",
  req3?.body ? JSON.stringify(req3.body) : ""
);

console.log("req 1 value && ", req1?.body && JSON.stringify(req1.body));
console.log("req 2 value && ", req2?.body && JSON.stringify(req2.body));
console.log("req 3 value && ", req3?.body && JSON.stringify(req3.body));

console.log("req 3 value ?? ", JSON.stringify(req2?.body) ?? "");
