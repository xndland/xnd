import mul from "./mul.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[mul]", () => {
  assert((4)[mul](3) === 12);
});
