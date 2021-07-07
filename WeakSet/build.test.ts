import build from "./build.ts";

import { assert } from "../_test_deps.ts";

Deno.test("WeakSet[build]<no entries>", () => {
  const a = { value: 1 };
  const target = WeakSet[build]<typeof a>(function* () {});
  assert(!target.has(a));
});

Deno.test("WeakSet[build]<single entry>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const target = WeakSet[build](function* () {
    yield a;
  });
  assert(target.has(a));
  assert(!target.has(b));
});

Deno.test("WeakSet[build]<multiple entries>", () => {
  const a = { value: 1 };
  const b = { value: 2 };
  const c = { value: 3 };
  const target = WeakSet[build](function* () {
    yield a;
    yield b;
    yield c;
  });
  assert(target.has(a));
  assert(target.has(a));
  assert(target.has(a));
});
