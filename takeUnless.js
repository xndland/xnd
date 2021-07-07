/// <reference types="./takeUnless.d.ts" />

const takeUnless = Symbol("xnd/takeUnless");

function value(predicate) {
  return predicate(this) ? undefined : this;
}

Object.defineProperty(Object.prototype, takeUnless, { value });

export default takeUnless;
