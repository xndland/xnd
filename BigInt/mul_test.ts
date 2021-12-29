import mul from "./mul.ts";

import { assert } from "../_test_deps.ts";

Deno.test("BigInt.prototype[mul]", () => {
  assert(4n[mul](3n) === 12n);
});
