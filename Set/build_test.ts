import build from "./build.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("builds Set with no entries", () => {
  const expected = new Set();
  const actual = Set[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("builds Set with single entry", () => {
  const expected = new Set([1]);
  const actual = Set[build](function* () {
    yield 1;
  });
  assertEquals(actual, expected);
});

Deno.test("builds Set with multiple entries", () => {
  const expected = new Set([1, 2, 3]);
  const actual = Set[build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});
