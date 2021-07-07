import div from "./div.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[div]", () => {
  assert((12)[div](3) === 4);
});

Deno.test("BigInt.prototype[div]", () => {
  assert(12n[div](3n) === 4n);
});
