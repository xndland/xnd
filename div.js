/// <reference types="./div.d.ts" />

const div = Symbol("xnd/div");

Object.defineProperty(Number.prototype, div, {
  value(n) {
    return this / n;
  },
});
Object.defineProperty(BigInt.prototype, div, {
  value(n) {
    return this / n;
  },
});

export default div;
