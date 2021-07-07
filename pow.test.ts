import pow from "./pow.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[pow]", () => {
  assert((4)[pow](3) === 64);
});

Deno.test("BigInt.prototype[pow]", () => {
  assert(4n[pow](3n) === 64n);
});
