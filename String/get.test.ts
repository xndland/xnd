import get from "./get.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Array.prototype[get]<non-negative>", () => {
  const target = "abc";
  assertEquals(target[get](0), "a");
  assertEquals(target[get](1), "b");
  assertEquals(target[get](2), "c");
});

Deno.test("Array.prototype[get]<negative>", () => {
  const target = "abc";
  assertEquals(target[get](-1), "c");
  assertEquals(target[get](-2), "b");
  assertEquals(target[get](-3), "a");
});

Deno.test("Array.prototype[get]<negatively out-of-range>", () => {
  const target = "abc";
  assertEquals(target[get](-4), undefined);
  assertEquals(target[get](-5), undefined);
  assertEquals(target[get](-Infinity), undefined);
});

Deno.test("Array.prototype[get]<positively out-of-range>", () => {
  const target = "abc";
  assertEquals(target[get](3), undefined);
  assertEquals(target[get](4), undefined);
  assertEquals(target[get](Infinity), undefined);
});
