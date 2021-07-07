/// <reference types="./sub.d.ts" />

const sub = Symbol("xnd/sub");

Object.defineProperty(Number.prototype, sub, {
  value(n) {
    return this - n;
  },
});
Object.defineProperty(BigInt.prototype, sub, {
  value(n) {
    return this - n;
  },
});

export default sub;
