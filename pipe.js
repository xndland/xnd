/// <reference types="./pipe.d.ts" />

const pipe = Symbol("xnd/pipe");

Object.defineProperty(Object.prototype, pipe, {
  value(fn) {
    return fn(this);
  },
});

export default pipe;
