import mod from "./mod.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[mod]", () => {
  assert((-4)[mod](3) === 2);
});

Deno.test("BigInt.prototype[mod]", () => {
  assert((-4n)[mod](3n) === 2n);
});
