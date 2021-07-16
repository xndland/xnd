import get from "./get.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("WeakMap.prototype[get]<existing>", () => {
  const a = {};
  const target = new WeakMap([[a, 1]]);
  assertStrictEquals(target[get](a), target.get(a));
});

Deno.test("WeakMap.prototype[get]<non-existing>", () => {
  const a = {};
  const b = {};
  const target = new WeakMap([[a, 1]]);
  assertStrictEquals(target[get](b), undefined);
});
