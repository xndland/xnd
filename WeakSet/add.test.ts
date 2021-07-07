import add from "./add.ts";

import { assert } from "../_test_deps.ts";

Deno.test("WeakSet.prototype[add]<from empty>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakSet();
  target[add](a);
  assert(target.has(a));
  assert(!target.has(b));
});

Deno.test("WeakSet.prototype[add]<from non-empty>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakSet([a]);
  target[add](b);
  assert(target.has(a));
  assert(target.has(b));
});

Deno.test("WeakSet.prototype[add]<from non-empty><same value>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = new WeakSet([a]);
  target[add](a);
  assert(target.has(a));
  assert(!target.has(b));
});
