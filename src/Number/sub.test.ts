import sub from "./sub.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[sub]", () => {
  assert((4)[sub](3) === 1);
});
