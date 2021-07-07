import map from "./map.ts";

import { assertEquals, fail } from "../_test_deps.ts";

Deno.test("Map.prototype[map]<empty>", () => {
  assertEquals(
    new Map()[map](() => fail()),
    new Map()
  );
});

Deno.test("Map.prototype[map]<non-empty>", () => {
  assertEquals(
    new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])[map](([key, value]) => [value, key]),
    new Map([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ])
  );
});
