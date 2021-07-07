import mapTo from "./mapTo.ts";

import "../Set/add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Map.prototype[mapTo]", () => {
  assertEquals(
    new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])[mapTo](new Set<string>(), ([_key, value]) => `${value}`),
    new Set(["1", "2", "3"])
  );
});
