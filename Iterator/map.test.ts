import map from "./map.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("%IteratorPrototype%[map]", () => {
  function* values() {
    yield 2;
    yield 4;
  }
  const iterator = values()[map]((value) => `${value}`);
  assertEquals(iterator.next(), { done: false, value: "2" });
  assertEquals(iterator.next(), { done: false, value: "4" });
  assertEquals(iterator.next(), { done: true, value: undefined });
});
