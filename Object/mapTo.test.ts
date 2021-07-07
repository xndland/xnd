import mapTo from "./mapTo.ts";

import "../Array/add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Object.prototype[Object[mapTo]]", () => {
  assertEquals(
    { a: 1, b: 2, c: 3 }[Object[mapTo]](
      <string[]>[],
      ([_key, value]) => `${value}`
    ),
    ["1", "2", "3"]
  );
});
