import sub from "./sub.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[sub]", () => {
  assert(4n[sub](3n) === 1n);
});
