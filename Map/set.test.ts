import set from "./set.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Map.prototype[set]<existing>", () => {
  const actual = new Map([[1, "a"]]);
  actual[set](1, "A");
  assertEquals(actual, new Map([[1, "A"]]));
});

Deno.test("Map.prototype[set]<non-existing>", () => {
  const actual = new Map([[1, "a"]]);
  actual[set](2, "b");
  assertEquals(
    actual,
    new Map([
      [1, "a"],
      [2, "b"],
    ])
  );
});
