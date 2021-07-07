import add from "./add.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[add]", () => {
  assert((4)[add](3) === 7);
});

Deno.test("BigInt.prototype[add]", () => {
  assert(4n[add](3n) === 7n);
});
