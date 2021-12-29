import mod from "./mod.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[mod]", () => {
  assert((-4)[mod](3) === 2);
});
