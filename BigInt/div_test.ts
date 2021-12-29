import div from "./div.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[div]", () => {
  assert(12n[div](3n) === 4n);
});
