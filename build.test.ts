import build from "./build.js";

import { assert, assertEquals } from "./_test_deps.ts";

Deno.test("Object[build]<no entries>", () => {
  const expected = {};
  const actual = Object[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("Object[build]<single entry><string key>", () => {
  const expected = { answer: 42 };
  const actual = Object[build](function* () {
    yield ["answer", 42];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<single entry><number key>", () => {
  const expected = { 1: 1 };
  const actual = Object[build](function* () {
    yield [1, 1];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<single entry><symbol key>", () => {
  const expected = { [Symbol.for("1")]: 1 };
  const actual = Object[build](function* () {
    yield [Symbol.for("1"), 1];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<multiple entries><string keys>", () => {
  const expected = { a: 1, b: 2, c: 3 };
  const actual = Object[build](function* () {
    yield ["a", 1];
    yield ["b", 2];
    yield ["c", 3];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<multiple entries><number keys>", () => {
  const expected = { 1: 1, 2: 2, 3: 3 };
  const actual = Object[build](function* () {
    yield [1, 1];
    yield [2, 2];
    yield [3, 3];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<multiple entries><symbol keys>", () => {
  const expected = {
    [Symbol.for("1")]: 1,
    [Symbol.for("2")]: 2,
    [Symbol.for("3")]: 3,
  };
  const actual = Object[build](function* () {
    yield [Symbol.for("1"), 1];
    yield [Symbol.for("2"), 2];
    yield [Symbol.for("3"), 3];
  });
  assertEquals(actual, expected);
});

Deno.test("Object[build]<multiple entries><mixed keys>", () => {
  const expected = { a: 1, 1: 2, [Symbol.for("1")]: 3 };
  const actual = Object[build]<PropertyKey, number>(function* () {
    yield ["a", 1];
    yield [1, 2];
    yield [Symbol.for("1"), 3];
  });
  assertEquals(actual, expected);
});

Deno.test("Array[build]<no entries>", () => {
  const expected: never[] = [];
  const actual = Array[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("Array[build]<single entry>", () => {
  const expected = ["hello"];
  const actual = Array[build](function* () {
    yield "hello";
  });
  assertEquals(actual, expected);
});

Deno.test("Array[build]<multiple entries>", () => {
  const expected = [1, 2, 3];
  const actual = Array[build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});

Deno.test("Map[build]<no entries>", () => {
  const expected = new Map();
  const actual = Map[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("Map[build]<single entry>", () => {
  const expected = new Map([[1, 1]]);
  const actual = Map[build](function* () {
    yield [1, 1];
  });
  assertEquals(actual, expected);
});

Deno.test("Map[build]<multiple entries>", () => {
  const expected = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  const actual = Map[build](function* () {
    yield [1, 1];
    yield [2, 2];
    yield [3, 3];
  });
  assertEquals(actual, expected);
});

Deno.test("Set[build]<no entries>", () => {
  const expected = new Set();
  const actual = Set[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("Set[build]<single entry>", () => {
  const expected = new Set([1]);
  const actual = Set[build](function* () {
    yield 1;
  });
  assertEquals(actual, expected);
});

Deno.test("Set[build]<multiple entries>", () => {
  const expected = new Set([1, 2, 3]);
  const actual = Set[build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});

Deno.test("WeakMap[build]<no entries>", () => {
  const a = { key: 1 };
  const target = WeakMap[build](function* () {});
  assert(!target.has(a));
});

Deno.test("WeakMap[build]<single entry>", () => {
  const a = { key: 1 };
  const target = WeakMap[build](function* () {
    yield [a, 1];
  });
  assertEquals(target.get(a), 1);
});

Deno.test("WeakMap[build]<multiple entries>", () => {
  const a = { key: 1 };
  const b = { key: 2 };
  const c = { key: 3 };
  const target = WeakMap[build](function* () {
    yield [a, 1];
    yield [b, 2];
    yield [c, 3];
  });
  assertEquals(target.get(a), 1);
  assertEquals(target.get(b), 2);
  assertEquals(target.get(c), 3);
});

Deno.test("WeakSet[build]<no entries>", () => {
  const a = { value: 1 };
  const target = WeakSet[build]<typeof a>(function* () {});
  assert(!target.has(a));
});

Deno.test("WeakSet[build]<single entry>", () => {
  const a = { value: 1 };
  const target = WeakSet[build](function* () {
    yield a;
  });
  assert(target.has(a));
});

Deno.test("WeakSet[build]<multiple entries>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const c = { value: 3 };
  const target = WeakSet[build](function* () {
    yield a;
    yield b;
    yield c;
  });
  assert(target.has(a));
  assert(target.has(a));
  assert(target.has(a));
});
