import add from "./add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Set.prototype[add]<from empty>", () => {
  const target = new Set<string>();
  target[add]("hello");
  assertEquals(target, new Set(["hello"]));
});

Deno.test("Set.prototype[add]<from non-empty>", () => {
  const target = new Set<string>(["hello"]);
  target[add]("goodbye");
  assertEquals(target, new Set(["hello", "goodbye"]));
});

Deno.test("Set.prototype[add]<from non-empty><same value>", () => {
  const target = new Set<string>(["hello"]);
  target[add]("hello");
  assertEquals(target, new Set(["hello"]));
});
