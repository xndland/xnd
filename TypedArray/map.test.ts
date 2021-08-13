import map from "./map.ts";

import { assertEquals, fail } from "../_test_deps.ts";

Deno.test("TypedArray.prototype[map]<empty>", () => {
  assertEquals(
    Float64Array.of()[map](() => fail()),
    Float64Array.of()
  );
});

Deno.test("TypedArray.prototype[map]<non-empty>", () => {
  assertEquals(
    Uint8ClampedArray.of(1, 2, 3)[map]((value) => value ** 2),
    Uint8ClampedArray.of(1, 4, 9)
  );
});
