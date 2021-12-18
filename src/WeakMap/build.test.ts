import build from "./build.ts";

import { assert, assertEquals } from "../_test_deps.ts";

Deno.test("builds WeakMap with no entries", () => {
  const a = { key: 1 };
  const target = WeakMap[build](function* () {});
  assert(!target.has(a));
});

Deno.test("builds WeakMap with single entry", () => {
  const a = { key: 1 };
  const b = { key: 2 };
  const target = WeakMap[build](function* () {
    yield [a, 1];
  });
  assertEquals(target.get(a), 1);
  assert(!target.has(b));
});

Deno.test("builds WeakMap with multiple entries", () => {
  const a = { key: 1 };
  const b = { key: 2 };
  const c = { key: 3 };
  const target = WeakMap[build](function* () {
    yield [a, 1];
    yield [b, 2];
    yield [c, 3];
  });
  assertEquals(target.get(a), 1);
  assertEquals(target.get(b), 2);
  assertEquals(target.get(c), 3);
});
