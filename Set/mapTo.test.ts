import mapTo from "./mapTo.ts";

import "../Map/add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Set.prototype[mapTo]", () => {
  assertEquals(
    new Set([1, 2, 3])[mapTo](
      new Map<string, number>(),
      (value) => [`${value}`, value] as const
    ),
    new Map([
      ["1", 1],
      ["2", 2],
      ["3", 3],
    ])
  );
});
