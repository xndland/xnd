/// <reference types="./mul.d.ts" />

const mul = Symbol("xnd/mul");

Object.defineProperty(Number.prototype, mul, {
  value(n) {
    return this * n;
  },
});
Object.defineProperty(BigInt.prototype, mul, {
  value(n) {
    return this * n;
  },
});

export default mul;
