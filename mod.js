/// <reference types="./mod.d.ts" />

const mod = Symbol("xnd/mod");

Object.defineProperty(Number.prototype, mod, {
  value(n) {
    return ((this % n) + n) % n;
  },
});
Object.defineProperty(BigInt.prototype, mod, {
  value(n) {
    return ((this % n) + n) % n;
  },
});

export default mod;
