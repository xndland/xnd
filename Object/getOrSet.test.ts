import getOrSet from "./getOrSet.ts";

import { assertEquals, assertStrictEquals, fail } from "../_test_deps.ts";

Deno.test("Object.prototype[getOrSet]<existing>", () => {
  const target = <Record<string, number>>{ a: 1 };
  const actual = target[getOrSet]("a", () => fail());
  assertStrictEquals(actual, 1);
  assertEquals(target, { a: 1 });
});

Deno.test("Object.prototype[getOrSet]<non-existing>", () => {
  const target = <Record<string, number>>{ a: 1 };
  const actual = target[getOrSet]("b", () => 2);
  assertStrictEquals(actual, 2);
  assertEquals(target, { a: 1, b: 2 });
});
