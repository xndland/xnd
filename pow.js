/// <reference types="./pow.d.ts" />

const pow = Symbol("xnd/pow");

Object.defineProperty(Number.prototype, pow, {
  value(n) {
    return this ** n;
  },
});
Object.defineProperty(BigInt.prototype, pow, {
  value(n) {
    return this ** n;
  },
});

export default pow;
