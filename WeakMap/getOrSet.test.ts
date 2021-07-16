import getOrSet from "./getOrSet.ts";

import { assertStrictEquals, fail } from "../_test_deps.ts";

Deno.test("WeakMap.prototype[getOrSet]<existing>", () => {
  const a = {};
  const target = new WeakMap([[a, 1]]);
  const actual = target[getOrSet](a, () => fail());
  assertStrictEquals(actual, 1);
  assertStrictEquals(target.get(a), 1);
});

Deno.test("WeakMap.prototype[getOrSet]<non-existing>", () => {
  const a = {};
  const b = {};
  const target = new WeakMap([[a, 1]]);
  const actual = target[getOrSet](b, () => 2);
  assertStrictEquals(actual, 2);
  assertStrictEquals(target.get(a), 1);
  assertStrictEquals(target.get(b), 2);
});
