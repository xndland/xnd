import also from "./also.ts";

import { assertEquals, assertStrictEquals } from "../_test_deps.ts";

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
  Deno.test(`Object.prototype[also](this: ${type})`, () => {
    const expectedArguments = [value];
    const expectedReturnValue = value;
    let actualArguments: unknown[] | undefined;
    const actualReturnValue = value[also](
      (...args: unknown[]) => (actualArguments = args)
    );
    assertEquals(actualArguments, expectedArguments);
    assertStrictEquals(actualArguments?.[0], expectedArguments[0]);
    assertStrictEquals(actualReturnValue, expectedReturnValue);
  });
}
