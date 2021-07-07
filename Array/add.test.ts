import add from "./add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Array.prototype[add]<from empty>", () => {
  const target: string[] = [];
  target[add]("hello");
  assertEquals(target, ["hello"]);
});

Deno.test("Array.prototype[add]<from non-empty>", () => {
  const target: string[] = ["hello"];
  target[add]("goodbye");
  assertEquals(target, ["hello", "goodbye"]);
});
