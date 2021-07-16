import get from "./get.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("Array.prototype[get]<non-negative>", () => {
  const target = Array.of(1, 2, 3);
  assertStrictEquals(target[get](0), target[0]);
  assertStrictEquals(target[get](1), target[1]);
  assertStrictEquals(target[get](2), target[2]);
});

Deno.test("Array.prototype[get]<negative>", () => {
  const target = Array.of(1, 2, 3);
  assertStrictEquals(target[get](-1), target[2]);
  assertStrictEquals(target[get](-2), target[1]);
  assertStrictEquals(target[get](-3), target[0]);
});

Deno.test("Array.prototype[get]<negatively out-of-range>", () => {
  const target = Array.of(1, 2, 3);
  assertStrictEquals(target[get](-4), undefined);
  assertStrictEquals(target[get](-5), undefined);
  assertStrictEquals(target[get](-Infinity), undefined);
});

Deno.test("Array.prototype[get]<positively out-of-range>", () => {
  const target = Array.of(1, 2, 3);
  assertStrictEquals(target[get](3), undefined);
  assertStrictEquals(target[get](4), undefined);
  assertStrictEquals(target[get](Infinity), undefined);
});
