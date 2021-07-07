import map from "./map.ts";

import { assertEquals, fail } from "../_test_deps.ts";

Deno.test("Set.prototype[map]<empty>", () => {
  assertEquals(
    new Set()[map](() => fail()),
    new Set()
  );
});

Deno.test("Set.prototype[map]<non-empty>", () => {
  assertEquals(
    new Set([1, 2, 3])[map]((value) => `${value}`),
    new Set(["1", "2", "3"])
  );
});
