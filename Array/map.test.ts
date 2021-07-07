import map from "./map.ts";

import { assertEquals, fail } from "../_test_deps.ts";

Deno.test("Array.prototype[map]<empty>", () => {
  assertEquals(
    [][map](() => fail()),
    []
  );
});

Deno.test("Array.prototype[map]<non-empty>", () => {
  assertEquals(
    [1, 2, 3][map]((value) => `${value}`),
    ["1", "2", "3"]
  );
});
