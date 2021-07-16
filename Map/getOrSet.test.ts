import getOrSet from "./getOrSet.ts";

import { assertEquals, assertStrictEquals, fail } from "../_test_deps.ts";

Deno.test("Map.prototype[getOrSet]<existing>", () => {
  const target = new Map([[1, "a"]]);
  const actual = target[getOrSet](1, () => fail());
  assertStrictEquals(actual, "a");
  assertEquals(target, new Map([[1, "a"]]));
});

Deno.test("Map.prototype[getOrSet]<non-existing>", () => {
  const target = new Map([[1, "a"]]);
  const actual = target[getOrSet](2, () => "b");
  assertStrictEquals(actual, "b");
  assertEquals(
    target,
    new Map([
      [1, "a"],
      [2, "b"],
    ])
  );
});
