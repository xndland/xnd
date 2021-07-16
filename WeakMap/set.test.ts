import set from "./set.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("WeakMap.prototype[set]<existing>", () => {
  const a = {};
  const target = new WeakMap([[a, 1]]);
  target[set](a, -1);
  assertStrictEquals(target.get(a), -1);
});

Deno.test("WeakMap.prototype[set]<non-existing>", () => {
  const a = {};
  const b = {};
  const target = new WeakMap([[a, 1]]);
  target[set](b, 2);
  assertStrictEquals(target.get(a), 1);
  assertStrictEquals(target.get(b), 2);
});
