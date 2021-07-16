import set from "./set.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Object.prototype[set]<existing>", () => {
  const actual = <Record<string, number>>{ a: 1 };
  actual[set]("a", -1);
  assertEquals(actual, { a: -1 });
});

Deno.test("Object.prototype[set]<non-existing>", () => {
  const actual = <Record<string, number>>{ a: 1 };
  actual[set]("b", 2);
  assertEquals(actual, { a: 1, b: 2 });
});
