import get from "./get.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("Object.prototype[get]<existing>", () => {
  const target = <Record<string, number>>{ a: 1 };
  assertStrictEquals(target[get]("a"), target.a);
});

Deno.test("Object.prototype[get]<non-existing>", () => {
  const target = <Record<string, number>>{ a: 1 };
  assertStrictEquals(target[get]("b"), undefined);
});
