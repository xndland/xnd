import add from "./add.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[add]", () => {
  assert(4n[add](3n) === 7n);
});
