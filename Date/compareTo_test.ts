import compareTo from "./compareTo.ts";

import { assertSign, assertThrows } from "../_test_deps.ts";

const epoch = new Date("1970-01-01T00:00:00.000Z");
const epochPlus1Ms = new Date("1970-01-01T00:00:00.001Z");

const testValues = [
  new Date(-8640000000000000),
  new Date(-4320000000000000),
  new Date(0),
  new Date(4320000000000000),
  new Date(8640000000000000),
];

Deno.test("returns 0 for equal Dates", () => {
  for (const value of testValues) assertSign(value[compareTo](value), 0);
});

Deno.test("returns negative values for lesser Dates", () => {
  for (let i = 0, a = testValues[i]; i < testValues.length; i++)
    for (let j = i + 1, b = testValues[j]; j < testValues.length; j++)
      assertSign(a[compareTo](b), -1);
});

Deno.test("returns positive values for greater Dates", () => {
  for (let i = 1, a = testValues[i]; i < testValues.length; i++)
    for (let j = 0, b = testValues[j]; j < i; j++)
      assertSign(a[compareTo](b), +1);
});

Deno.test("coerces booleans to Dates", () => {
  assertSign(epoch[compareTo](false), 0);
  assertSign(epoch[compareTo](true), -1);
  assertSign(epochPlus1Ms[compareTo](true), 0);
  assertSign(epochPlus1Ms[compareTo](false), 1);
});

Deno.test("coerces numbers to Dates", () => {
  assertSign(epoch[compareTo](0), 0);
  assertSign(epoch[compareTo](1), -1);
  assertSign(epochPlus1Ms[compareTo](1), 0);
  assertSign(epochPlus1Ms[compareTo](0), 1);
});

Deno.test("throws coercing bigints", () => {
  for (const value of [-1n, 0n, 1n])
    assertThrows(() => epoch[compareTo](value), TypeError, "Cannot convert");
});

Deno.test("parses strings as Dates", () => {
  assertSign(epoch[compareTo](epoch.toISOString()), 0);
  assertSign(epoch[compareTo](epochPlus1Ms.toISOString()), -1);
  assertSign(epochPlus1Ms[compareTo](epochPlus1Ms.toISOString()), 0);
  assertSign(epochPlus1Ms[compareTo](epoch.toISOString()), 1);
});

Deno.test("returns NaN for invalid date strings", () => {
  assertSign(epoch[compareTo]("a"), NaN);
  assertSign(new Date(NaN)[compareTo](epoch), NaN);
});
