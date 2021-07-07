import mul from "./mul.js";

import { assert } from "./_test_deps.ts";

Deno.test("Number.prototype[mul]", () => {
  assert((4)[mul](3) === 12);
});

Deno.test("BigInt.prototype[mul]", () => {
  assert(4n[mul](3n) === 12n);
});
