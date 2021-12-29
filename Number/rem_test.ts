import rem from "./rem.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[rem]", () => {
  assert((4)[rem](3) === 1);
});
