import map from "./map.ts";

import { assertEquals, fail } from "../_test_deps.ts";

Deno.test("Object.prototype[Object[map]]<empty>", () => {
  assertEquals(
    {}[Object[map]](() => fail()),
    {}
  );
});

Deno.test("Object.prototype[Object[map]]<non-empty>", () => {
  assertEquals(
    { a: 1, b: 2, c: 3 }[Object[map]](([key, value]) => [value, key]),
    { "1": "a", "2": "b", "3": "c" }
  );
});
