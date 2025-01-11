const a = new ArrayBuffer(6);

console.log(a);

const a8 = new Uint8Array(a);

a8[0] = 45;

console.log(a8);

a8[2] = 45;

console.log(a8);

const a16 = new Uint16Array(a);

a16[2] = 0x4545; //hexadecimal value

console.log(a16);