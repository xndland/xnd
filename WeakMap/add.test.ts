import add from "./add.ts";

import { assert, assertEquals } from "../_test_deps.ts";

Deno.test("WeakMap.prototype[add]<from empty>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakMap<{ value: number }, string>();
  target[add]([a, "hello"]);
  assertEquals(target.get(a), "hello");
  assert(!target.has(b));
});

Deno.test("WeakMap.prototype[add]<from non-empty>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakMap<{ value: number }, string>([[a, "hello"]]);
  target[add]([b, "goodbye"]);
  assertEquals(target.get(a), "hello");
  assertEquals(target.get(b), "goodbye");
});

Deno.test("WeakMap.prototype[add]<from non-empty><replaces entry>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakMap<{ value: number }, string>([[a, "hello"]]);
  target[add]([a, "goodbye"]);
  assertEquals(target.get(a), "goodbye");
  assert(!target.has(b));
});
