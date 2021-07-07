import mapTo from "./mapTo.ts";

import "../Object/add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Array.prototype[mapTo]", () => {
  assertEquals(
    [1, 2, 3][mapTo](<Record<string, number>>{}, (value) => [
      `${value}`,
      value,
    ]),
    { 1: 1, 2: 2, 3: 3 }
  );
});
