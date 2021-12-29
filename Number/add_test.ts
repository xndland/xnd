import add from "./add.ts";

import { assert } from "../_test_deps.ts";

Deno.test("Number.prototype[add]", () => {
  assert((4)[add](3) === 7);
});
