import mod from "./mod.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[mod]", () => {
  assert((-4n)[mod](3n) === 2n);
});
