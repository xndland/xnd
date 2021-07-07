import rem from "./rem.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[rem]", () => {
  assert((4)[rem](3) === 1);
});

Deno.test("BigInt.prototype[rem]", () => {
  assert(4n[rem](3n) === 1n);
});
