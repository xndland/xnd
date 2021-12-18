import minOf from "./minOf.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("returns undefined for no values", () => {
  assertEquals(minOf(), undefined);
});

Deno.test("returns single for one values", () => {
  assertEquals(minOf("hi"), "hi");
  assertEquals(minOf(-12), -12);
});

Deno.test("returns min of booleans", () => {
  assertEquals(minOf(false), false);
  assertEquals(minOf(false, false), false);
  assertEquals(minOf(false, true, false), false);
  assertEquals(minOf(true, true), true);
  assertEquals(minOf(true), true);
});

Deno.test("returns min of numbers", () => {
  assertEquals(minOf(1), 1);
  assertEquals(minOf(2), 2);
  assertEquals(minOf(1, 2), 1);
  assertEquals(minOf(2, 1), 1);
  assertEquals(minOf(1, 2, 3), 1);
  assertEquals(minOf(3, 2, 1), 1);
  assertEquals(minOf(1, 3, 2), 1);
  assertEquals(minOf(2, 3, 1), 1);
});

Deno.test("returns min of bigints", () => {
  assertEquals(minOf(1n), 1n);
  assertEquals(minOf(2n), 2n);
  assertEquals(minOf(1n, 2n), 1n);
  assertEquals(minOf(2n, 1n), 1n);
  assertEquals(minOf(1n, 2n, 3n), 1n);
  assertEquals(minOf(3n, 2n, 1n), 1n);
  assertEquals(minOf(1n, 3n, 2n), 1n);
  assertEquals(minOf(2n, 3n, 1n), 1n);
});

Deno.test("returns min of Dates", () => {
  assertEquals(minOf(new Date(1)), new Date(1));
  assertEquals(minOf(new Date(2)), new Date(2));
  assertEquals(minOf(new Date(1), new Date(2)), new Date(1));
  assertEquals(minOf(new Date(2), new Date(1)), new Date(1));
  assertEquals(minOf(new Date(1), new Date(2), new Date(3)), new Date(1));
  assertEquals(minOf(new Date(3), new Date(2), new Date(1)), new Date(1));
  assertEquals(minOf(new Date(1), new Date(3), new Date(2)), new Date(1));
  assertEquals(minOf(new Date(2), new Date(3), new Date(1)), new Date(1));
});
