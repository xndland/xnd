import build from "./build.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("builds Map with no entries", () => {
  const expected = new Map();
  const actual = Map[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("builds Map with single entry", () => {
  const expected = new Map([[1, 1]]);
  const actual = Map[build](function* () {
    yield [1, 1];
  });
  assertEquals(actual, expected);
});

Deno.test("builds Map with multiple entries", () => {
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
