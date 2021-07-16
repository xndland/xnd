import get from "./get.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("TypedArray.prototype[get]<non-negative>", () => {
  const target = Int8Array.of(1, 2, 3);
  assertEquals(target[get](0), 1);
  assertEquals(target[get](1), 2);
  assertEquals(target[get](2), 3);
});

Deno.test("TypedArray.prototype[get]<negative>", () => {
  const target = Uint8Array.of(1, 2, 3);
  assertEquals(target[get](-1), 3);
  assertEquals(target[get](-2), 2);
  assertEquals(target[get](-3), 1);
});

Deno.test("TypedArray.prototype[get]<negatively out-of-range>", () => {
  const target = Uint8ClampedArray.of(1, 2, 3);
  assertEquals(target[get](-4), undefined);
  assertEquals(target[get](-5), undefined);
  assertEquals(target[get](-Infinity), undefined);
});

Deno.test("TypedArray.prototype[get]<positively out-of-range>", () => {
  const target = Int16Array.of(1, 2, 3);
  assertEquals(target[get](3), undefined);
  assertEquals(target[get](4), undefined);
  assertEquals(target[get](Infinity), undefined);
});
