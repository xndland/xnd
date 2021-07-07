/// <reference types="./also.d.ts" />

const also = Symbol("xnd/also");

Object.defineProperty(Object.prototype, also, {
  value(fn) {
    fn(this);
    return this;
  },
});

export default also;
