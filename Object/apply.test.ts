import apply from "./apply.ts";

import { assertStrictEquals } from "../_test_deps.ts";

for (const [type, value] of [
  ["Object", {}] as const,
  ["Array", []] as const,
  ["string", ""] as const,
  ["String", Object("")] as const,
  ["number", 0] as const,
  ["Number", Object(0)] as const,
  ["bigint", 0n] as const,
  ["BigInt", Object(0n)] as const,
  ["boolean", false] as const,
  ["Boolean", Object(false)] as const,
  ["symbol", Symbol()] as const,
  ["Symbol", Object(Symbol())] as const,
]) {
  Deno.test(`Object.prototype[apply]<${type}>`, () => {
    const expectedThis = value;
    const expectedReturnValue = value;
    let actualThis: unknown | undefined;
    const actualReturnValue = value[apply](function (this: unknown) {
      actualThis = this;
    });
    assertStrictEquals(actualThis, expectedThis);
    assertStrictEquals(actualReturnValue, expectedReturnValue);
  });
}
