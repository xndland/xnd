import map from "./map.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("%AsyncIteratorPrototype%[map]", async () => {
  async function* values() {
    yield 2;
    yield 4;
  }
  const iterator = values()[map]((value) => `${value}`);
  assertEquals(await iterator.next(), { done: false, value: "2" });
  assertEquals(await iterator.next(), { done: false, value: "4" });
  assertEquals(await iterator.next(), { done: true, value: undefined });
});
