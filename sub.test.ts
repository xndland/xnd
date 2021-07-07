import sub from "./sub.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[sub]", () => {
  assert((4)[sub](3) === 1);
});

Deno.test("BigInt.prototype[sub]", () => {
  assert(4n[sub](3n) === 1n);
});
