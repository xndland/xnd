import pow from "./pow.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[pow]", () => {
  assert(4n[pow](3n) === 64n);
});
