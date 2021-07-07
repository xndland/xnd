import build from "./build.ts";

import { assertEquals } from "../_test_deps.ts";

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
