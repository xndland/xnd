/// <reference types="./takeIf.d.ts" />

const takeIf = Symbol("xnd/takeIf");

function value(predicate) {
  return predicate(this) ? this : undefined;
}

Object.defineProperty(Object.prototype, takeIf, { value });

export default takeIf;
