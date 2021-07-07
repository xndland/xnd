/// <reference types="./build.d.ts" />

const build = Symbol("xnd/build");

Object.defineProperty(Object, build, {
  value(generate) {
    return Object.fromEntries(generate());
  },
});

Object.defineProperty(Array, build, {
  value(generate) {
    return Array.from(generate());
  },
});

Object.defineProperty(Map, build, {
  value(generate) {
    return new Map(generate());
  },
});

Object.defineProperty(Set, build, {
  value(generate) {
    return new Set(generate());
  },
});

Object.defineProperty(WeakMap, build, {
  value(generate) {
    return new WeakMap(generate());
  },
});

Object.defineProperty(WeakSet, build, {
  value(generate) {
    return new WeakSet(generate());
  },
});

export default build;
