import pow from "./pow.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[pow]", () => {
  assert((4)[pow](3) === 64);
});
