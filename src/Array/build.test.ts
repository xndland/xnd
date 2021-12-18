import build from "./build.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("builds Array with no entries", () => {
  const expected: never[] = [];
  const actual = Array[build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("builds Array with single entry", () => {
  const expected = ["hello"];
  const actual = Array[build](function* () {
    yield "hello";
  });
  assertEquals(actual, expected);
});

Deno.test("builds Array with multiple entries", () => {
  const expected = [1, 2, 3];
  const actual = Array[build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});
