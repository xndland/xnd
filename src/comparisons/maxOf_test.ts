import maxOf from "./maxOf.ts";

import { assertEquals } from "../_deps_test.ts";

Deno.test("returns undefined for no values", () => {
  assertEquals(maxOf(), undefined);
});

Deno.test("returns single for one values", () => {
  assertEquals(maxOf("hi"), "hi");
  assertEquals(maxOf(-12), -12);
});

Deno.test("returns max of booleans", () => {
  assertEquals(maxOf(false), false);
  assertEquals(maxOf(false, false), false);
  assertEquals(maxOf(false, true, false), true);
  assertEquals(maxOf(true, true), true);
  assertEquals(maxOf(true), true);
});

Deno.test("returns max of numbers", () => {
  assertEquals(maxOf(1), 1);
  assertEquals(maxOf(2), 2);
  assertEquals(maxOf(1, 2), 2);
  assertEquals(maxOf(2, 1), 2);
  assertEquals(maxOf(1, 2, 3), 3);
  assertEquals(maxOf(3, 2, 1), 3);
  assertEquals(maxOf(1, 3, 2), 3);
  assertEquals(maxOf(2, 3, 1), 3);
});

Deno.test("returns max of bigints", () => {
  assertEquals(maxOf(1n), 1n);
  assertEquals(maxOf(2n), 2n);
  assertEquals(maxOf(1n, 2n), 2n);
  assertEquals(maxOf(2n, 1n), 2n);
  assertEquals(maxOf(1n, 2n, 3n), 3n);
  assertEquals(maxOf(3n, 2n, 1n), 3n);
  assertEquals(maxOf(1n, 3n, 2n), 3n);
  assertEquals(maxOf(2n, 3n, 1n), 3n);
});

Deno.test("returns max of Dates", () => {
  assertEquals(maxOf(new Date(1)), new Date(1));
  assertEquals(maxOf(new Date(2)), new Date(2));
  assertEquals(maxOf(new Date(1), new Date(2)), new Date(2));
  assertEquals(maxOf(new Date(2), new Date(1)), new Date(2));
  assertEquals(maxOf(new Date(1), new Date(2), new Date(3)), new Date(3));
  assertEquals(maxOf(new Date(3), new Date(2), new Date(1)), new Date(3));
  assertEquals(maxOf(new Date(1), new Date(3), new Date(2)), new Date(3));
  assertEquals(maxOf(new Date(2), new Date(3), new Date(1)), new Date(3));
});
