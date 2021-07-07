/// <reference types="./add.d.ts" />

const add = Symbol("xnd/add");

Object.defineProperty(Number.prototype, add, {
  value(n) {
    return this + n;
  },
});
Object.defineProperty(BigInt.prototype, add, {
  value(n) {
    return this + n;
  },
});

export default add;
