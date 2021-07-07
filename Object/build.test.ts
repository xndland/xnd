import build from "./build.ts";

import { assertEquals } from "../_test_deps.ts";

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
