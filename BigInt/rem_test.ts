import rem from "./rem.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[rem]", () => {
  assert(4n[rem](3n) === 1n);
});
