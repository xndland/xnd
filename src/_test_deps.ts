export * from "https://deno.land/std@0.117.0/testing/asserts.ts";

import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";

export function assertSign(
  value: number | bigint,
  expected: -1 | -0 | 1 | number,
  msg?: string
) {
  assertEquals(Math.sign(Number(value)), expected, msg);
}
