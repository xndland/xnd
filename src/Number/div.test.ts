import div from "./div.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[div]", () => {
  assert((12)[div](3) === 4);
});
