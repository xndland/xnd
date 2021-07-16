import get from "./get.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("Map.prototype[get]<existing>", () => {
  const target = new Map([[1, "a"]]);
  assertStrictEquals(target[get](1), target.get(1));
});

Deno.test("Map.prototype[get]<non-existing>", () => {
  const target = new Map([[1, "a"]]);
  assertStrictEquals(target[get](2), undefined);
});
