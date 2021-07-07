import mapTo from "./mapTo.ts";

import "../Array/add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("%IteratorPrototype%[mapTo]", () => {
  function* values() {
    yield 2;
    yield 4;
  }
  assertEquals(
    values()[mapTo](<string[]>[], (value) => `${value}`),
    ["2", "4"]
  );
});
