/// <reference types="./rem.d.ts" />

const rem = Symbol("xnd/rem");

Object.defineProperty(Number.prototype, rem, {
  value(n) {
    return this % n;
  },
});
Object.defineProperty(BigInt.prototype, rem, {
  value(n) {
    return this % n;
  },
});

export default rem;
