import add from "./add.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Map.prototype[add]<from empty>", () => {
  const target = new Map<string, number>();
  target[add](["hello", 42]);
  assertEquals(target, new Map([["hello", 42]]));
});

Deno.test("Map.prototype[add]<from non-empty>", () => {
  const target = new Map<string, number>([["hello", 42]]);
  target[add](["goodbye", -1]);
  assertEquals(
    target,
    new Map([
      ["hello", 42],
      ["goodbye", -1],
    ])
  );
});

Deno.test("Map.prototype[add]<from non-empty><replaces entry>", () => {
  const target = new Map<string, number>([["hello", 42]]);
  target[add](["hello", Infinity]);
  assertEquals(target, new Map([["hello", Infinity]]));
});
