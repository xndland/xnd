import add from "./add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Object.prototype[add]<from empty>", () => {
  const target: Record<string, number> = {};
  target[add](["hello", 42]);
  assertEquals(target, { hello: 42 });
});

Deno.test("Object.prototype[add]<from non-empty>", () => {
  const target: Record<string, number> = { hello: 42 };
  target[add](["goodbye", -1]);
  assertEquals(target, { hello: 42, goodbye: -1 });
});

Deno.test("Object.prototype[add]<from non-empty><replaces entry>", () => {
  const target: Record<string, number> = { hello: 42 };
  target[add](["hello", Infinity]);
  assertEquals(target, { hello: Infinity });
});
